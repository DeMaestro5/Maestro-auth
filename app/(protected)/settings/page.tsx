'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import { logout } from '@/actions/logout';

const SettingsPage = () => {
  const user = useCurrentUser();

  const onclick = () => {
    logout();
  };
  return (
    <div className='bg-white p-10 rounded-xl'>
      <button onClick={onclick} type='submit'>
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
