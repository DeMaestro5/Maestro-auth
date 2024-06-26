'use client';

import { UserInfo } from '@/components/user-info';
import { useCurrentUser } from '@/hooks/use-current-user';

const clientPage = () => {
  const user = useCurrentUser();
  return <UserInfo user={user} label='Client Side' />;
};

export default clientPage;
