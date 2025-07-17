import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core';
import { IconHeartbeat } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const form = useForm({
    initialValues: {
      type: 'PATIENT',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: any) => (!value ? 'Password Required' : null),
      confirmPassword: (value: any, values: any) =>
        value === values.password ? null : "Password don't match",
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
          <div className="self-center font-heading font-medium text-light text-2xl">Register</div>
          <SegmentedControl
            {...form.getInputProps('type')}
            fullWidth
            size="md"
            radius="md"
            color="pink"
            bg="none"
            className="[&_*]:!text-white border border-white"
            data={[
              { label: 'Patient', value: 'PATIENT' },
              { label: 'Doctor', value: 'DOCTOR' },
              { label: 'Admin', value: 'ADMIN' },
            ]}
          />
          ;
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
          <PasswordInput
            {...form.getInputProps('confirmPassword')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="confirm Password"
          />
          <Button type="submit" color="pink" variant="filled" radius="md" size="md">
            Login
          </Button>
          <div className="text-neutral-100 text-sm self-center">
            haven an account?{' '}
            <Link to="/login" className="hover:underline text-sm text-pink-400 font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
