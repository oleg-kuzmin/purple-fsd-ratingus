import { createBrowserRouter } from 'react-router';
import { CategoryPage } from '../../pages/category';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <a>Main</a>,
      },
      {
        path: 'community',
        element: <a>Community</a>,
      },
      {
        path: ':category',
        Component: CategoryPage,
      },
      {
        path: 'article',
        children: [{ path: ':alias', element: <a>Article</a> }],
      },
      {
        path: 'profile',
        children: [
          { index: true, element: <a>Profile</a> },
          { path: 'edit', element: <a>EditProfile</a> },
        ],
      },
    ],
  },
]);
