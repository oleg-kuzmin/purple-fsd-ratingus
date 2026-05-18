import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';

export function RatingPage() {
  return (
    <div>
      Рейтинг
      <Link to={ROUTES.profile.index}>Профиль</Link>
    </div>
  );
}
