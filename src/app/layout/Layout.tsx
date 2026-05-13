import { Outlet } from 'react-router';
import { Footer } from '../../shared/ui';
import { Icon } from '../../assets/Icon/Icon';

export function Layout() {
  return (
    <div>
      <div>Шапка</div>
      <Icon.Check />
      <Outlet />
      <Footer />
    </div>
  );
}
