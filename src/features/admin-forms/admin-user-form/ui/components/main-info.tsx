import {
	EnumUserRole,
	getRoleOption,
	IUsersResponse,
	UserRoleMeta,
} from '@/entities/user';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { DotLoader } from '@/shared/kit/dot-loader';
import {
	emailValidation,
	passwordValidation,
	requiredValidation,
} from '@/shared/lib/input-validations';
import { AutocompleteMui } from '@/shared/ui/components/autocomplete-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiPassword } from '@/shared/ui/components/input-mui-password';
import { sxAutocompletePopper, sxMuiInput } from '@/shared/ui/styles';
import { Control } from 'react-hook-form';

type Props = {
	control: Control<any>;
	data?: IUsersResponse;
	role: EnumUserRole;
};

export const MainInfo = ({ control, data, role }: Props) => {
	return (
		<AdminFormCreateEditBlock title='Основная информация *'>
			<AdminFormCreateEditItem title='почта'>
				<InputMui
					name='email'
					control={control}
					placeholder='почта'
					validation={emailValidation(true)}
					sx={sxMuiInput}
					size='small'
				/>
			</AdminFormCreateEditItem>

			<AdminFormCreateEditItem title={data ? 'сменить пароль' : 'пароль'}>
				<InputMuiPassword
					name='password'
					control={control}
					placeholder={data ? 'введите новый пароль' : 'пароль'}
					validation={passwordValidation(!data)}
					sx={sxMuiInput}
					size='small'
					variant='outlined'
				/>
			</AdminFormCreateEditItem>

			{role === EnumUserRole.SUPER_ADMIN && (
				<AdminFormCreateEditItem title='роль'>
					<AutocompleteMui
						name='role'
						control={control}
						placeholder='Роль'
						validation={requiredValidation}
						options={getRoleOption(role)}
						sx={sxMuiInput}
						size='small'
						sxPopper={sxAutocompletePopper}
					/>
				</AdminFormCreateEditItem>
			)}
			{!!data && role !== EnumUserRole.SUPER_ADMIN && (
				<AdminFormCreateEditItem title=''>
					<DotLoader
						items={[
							{
								key: 'роль',
								value: UserRoleMeta[data.role].label,
							},
						]}
					/>
				</AdminFormCreateEditItem>
			)}
		</AdminFormCreateEditBlock>
	);
};
