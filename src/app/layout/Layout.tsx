import { Outlet } from 'react-router';
import { Footer } from '../../shared/ui';

export function Layout() {
  return (
    <div>
      <div>Шапка</div>
      <Outlet />
      <Footer />
    </div>
  );
}
