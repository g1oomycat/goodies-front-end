import { genderOptions, IUsersResponse, UserItem } from '@/entities/user';
import {
	addressValidation,
	dateValidation,
	emailValidation,
	nameValidation,
	requiredValidation,
} from '@/shared/lib/input-validations';
import { ButtonCustom } from '@/shared/ui/components/button';
import { CheckboxMui } from '@/shared/ui/components/checkbox';
import { InputMuiMask } from '@/shared/ui/components/input-masks-mui';
import { InputMui } from '@/shared/ui/components/input-mui';
import { RadioMui } from '@/shared/ui/components/radio-mui';
import classNames from 'classnames';
import { useUpdateUserForm } from '../../model';
import styles from './styles.module.scss';

type Props = {
	data: IUsersResponse;
};

export const UpdateProfile = ({ data }: Props) => {
	const { control, error, handleSubmit, isPending, onSubmit } =
		useUpdateUserForm(data);
	return (
		<form
			noValidate
			className={classNames(styles.form)}
			aria-disabled={isPending}
			onSubmit={handleSubmit(onSubmit)}
		>
			<UserItem title='контактная информация'>
				<InputMui
					placeholder='Имя*'
					name='firstName'
					control={control}
					variant='standard'
					validation={nameValidation(true)}
				/>
				<InputMui
					placeholder='Фамилия*'
					name='lastName'
					control={control}
					variant='standard'
					validation={nameValidation(true)}
				/>
				<InputMui
					placeholder='Отчество'
					name='surName'
					control={control}
					variant='standard'
					validation={nameValidation(false)}
				/>
				<RadioMui
					name='gender'
					control={control}
					data={genderOptions}
					validation={requiredValidation}
					className='fs-s-3 low lh-no'
				/>
			</UserItem>
			<UserItem title='Дата рождения'>
				<InputMuiMask
					placeholder='дд/мм/гггг*'
					name='dateOfBirth'
					control={control}
					type='date'
					variant='standard'
					validation={dateValidation(true, 'less')}
				/>
			</UserItem>
			<UserItem title='Контакты'>
				<InputMui
					placeholder='Email*'
					name='email'
					control={control}
					variant='standard'
					validation={emailValidation(true)}
				/>

				<InputMuiMask
					placeholder='Телефон*'
					name='phone'
					control={control}
					type='phone'
					variant='standard'
					validation={requiredValidation}
				/>
			</UserItem>
			<UserItem title='адрес доставки'>
				<InputMui
					placeholder='Город, улица, дом, квартира'
					name='address'
					control={control}
					variant='standard'
					validation={addressValidation(false)}
				/>
			</UserItem>
			<UserItem>
				<CheckboxMui
					name='accept'
					control={control}
					label={
						<p className='fs-s-1'>
							я даю согласие на обработку своих персональных данных в
							соответствии с политикой обработки персональных данных
						</p>
					}
					validation={requiredValidation}
				/>
			</UserItem>
			<UserItem>
				<ButtonCustom type='submit' size='l' disabled={isPending}>
					Сохранить
				</ButtonCustom>
			</UserItem>
		</form>
	);
};
