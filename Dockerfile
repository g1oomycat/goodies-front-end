FROM node:20.11.1-alpine  AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy only the files needed to install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies with the preferred package manager
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM base  AS builder
WORKDIR /app

# ARG BASE_URL
# ENV BASE_URL=https://api.goodies-shop.kz/api

# ARG NEXT_PUBLIC_BASE_URL
# ENV NEXT_PUBLIC_BASE_URL=https://api.goodies-shop.kz/api
COPY .env.production.local ./.env
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY public/images /app/public/images


RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi



FROM base AS runner
WORKDIR /app



ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Удаляем sitemap заранее, если он не должен быть сгенерен во время сборки
# RUN rm -rf /app/.next/server/app/sitemap.xml.* \
#  && rm -rf /app/.next/server/app/_not-found.* \
#  && rm -rf /app/.next/server/app/*/*/product/[slug]/* || true 


USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0


CMD ["node", "server.js"]
