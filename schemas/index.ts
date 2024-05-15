import * as z from 'zod';

export const NewPasswordSchema = z.object({
  Password: z.string().min(6, {
    message: 'Password is required',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: '6 minimum characters required',
  }),
  name: z.string().min(1, {
    message: 'name is required',
  }),
});
