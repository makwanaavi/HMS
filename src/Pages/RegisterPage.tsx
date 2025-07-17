import { Button, PasswordInput, TextInput } from '@mantine/core';
import { IconHeartbeat } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: any) => (!value ? 'Password Required' : null),
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };
  return (
    <div
      style={{
        background: 'url("/bg.jpg")',
      }}
      className="w-screen h-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center"
    >
      <div className="  text-pink-500 py-3 flex gap-1 items-center">
        <IconHeartbeat size={45} stroke={2.5} />
        <span className="font-heading font-semibold text-4xl">Pulse</span>
      </div>
      <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-xl">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-5 [&_input]:placeholder-neutral-100 [&_input]:!pl-2 [&_input]:!text-white [&_svg]:text-white [&_.mantine-Input-input]:border-white focus-within:[&_.mantine-Input-input]:!border-pink-500 [&_.mantine-Input-input]:!border"
        >
          <div className="self-center font-heading font-medium text-light text-2xl">Login</div>
          <TextInput
            {...form.getInputProps('email')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Email"
          />
           <TextInput
            {...form.getInputProps('email')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Email"
          />
          <PasswordInput
            {...form.getInputProps('password')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Password"
          />
          <Button type="submit" color="pink" variant="filled" radius="md" size="md">
            Login
          </Button>
          
          <div className='text-neutral-100 text-sm self-center'>
         haven an account? <Link to='/login' className='hover:underline text-sm text-pink-400 font-semibold'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
