import { EnumUserRole, IUsersResponse, UserRoleMeta } from '@/entities/user';
import { AdminFormCreateEditBlock } from '@/shared/components/admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '@/shared/components/admin-form-create-edit-item';
import { DotLoader } from '@/shared/kit/dot-loader';
import {
	emailValidation,
	passwordValidation,
} from '@/shared/lib/input-validations';
import { InputMui } from '@/shared/ui/components/input-mui';
import { InputMuiPassword } from '@/shared/ui/components/input-mui-password';
import { sxMuiInput } from '@/shared/ui/styles';
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

			{role !== EnumUserRole.SUPER_ADMIN && !!data && (
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
