import { db } from '@/lib/db';

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const PasswordResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    });

    return PasswordResetToken;
  } catch (error) {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const PasswordResetToken = await db.passwordResetToken.findFirst({
      where: { email },
    });

    return PasswordResetToken;
  } catch (error) {
    return null;
  }
};
