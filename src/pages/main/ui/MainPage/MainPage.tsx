import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';
import { Like } from '@/features/article';

export function MainPage() {
  return (
    <div>
      Главная
      <Link to={ROUTES.profile.index}>Профиль</Link>
      <Like />
    </div>
  );
}
