import { UserInfo } from '@/components/user-info';
import { currentUser } from '@/lib/auth';
import { ExtendedUser } from '@/next-auth';
import { UserRole } from '@prisma/client';

const ServerPage = async () => {
  const user = await currentUser();

  // Ensure the user object matches the expected type
  const User: ExtendedUser | undefined = user
    ? {
        ...user,
        id: user.id ?? '',
        role: user.role as UserRole,
        isTwoFactorEnabled: user.isTwoFactorEnabled ?? false,
      }
    : undefined;

  return <UserInfo label='Server Side' user={User} />;
};

export default ServerPage;
