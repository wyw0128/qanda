import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainIcon } from '../../components/Icons';
import {
  ThemeContext,
  ThemeContextProvider,
} from '../../contexts/themeContext';
import { useContext } from 'react';
import { ThemeMode } from '../../constants/themes';
import { LoginSchema } from './schema';
import { Button } from '../../components/Button';
import { RHFInput } from '../../components/Inputs/RHFInput';

type FormFields = {
  email: string;
  password: string;
};

function LoginBase() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  const { themeMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex justify-center h-screen bg-primary text-primary theme-${themeMode}`}
    >
      <form
        className='w-full m-auto max-w-80'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex justify-center items-center'>
          <MainIcon />
        </div>
        <div className='flex flex-col gap-3'>
          <RHFInput
            register={register}
            label='Email'
            name='email'
            type='email'
            errorMessage={errors.email?.message}
          />
          <RHFInput
            label='Password'
            name='password'
            type='password'
            register={register}
            errorMessage={errors.password?.message}
          />
        </div>
        <div className='mt-5'>
          <Button type='submit' variant='primary'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function Login() {
  // use context to wrap the LoginBase component with the ThemeContextProvider
  return (
    <ThemeContextProvider defaultThemeMode={ThemeMode.DEFAULT_MODE}>
      <LoginBase />
    </ThemeContextProvider>
  );
}
