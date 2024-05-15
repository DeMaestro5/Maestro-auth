'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/token';
import { sendVerificationEmail } from '@/lib/mail';

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (validatedFields.success) {
    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return { error: 'Email already Taken' };
    }
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const verificationToken = await generateVerificationToken({ email });

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: ' Confirmation Email sent' };
  } else {
    return { error: 'invalid field' };
  }
};
