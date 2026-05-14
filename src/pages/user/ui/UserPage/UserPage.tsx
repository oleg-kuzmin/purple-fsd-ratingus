import { Link } from 'react-router';
import { ROUTES } from '../../../../shared/routes';

export function UserPage() {
  return (
    <div>
      Профиль
      <Link to={ROUTES.profile.index}>Профиль</Link>
    </div>
  );
}
