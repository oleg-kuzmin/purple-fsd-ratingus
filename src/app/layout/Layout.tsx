import { Outlet } from 'react-router';
import { Footer } from '@/shared/ui';
import { Icon } from '@/assets/Icon/Icon';
import { useUserStore } from '@/entities/user';

export function Layout() {
  const { profile } = useUserStore();

  return (
    <div>
      <div>Шапка</div>
      {profile?.name}
      <Icon.Check />
      <Outlet />
      <Footer />
    </div>
  );
}
