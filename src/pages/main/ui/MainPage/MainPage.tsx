import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';

export function MainPage() {
  return (
    <div>
      Главная
      <Link to={ROUTES.profile.index}>Профиль</Link>
    </div>
  );
}
