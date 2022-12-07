import Layout from '@/components/layout/Layout';
import AllQuotes from '@/components/pages/AllQuotes';
import NewQuote from '@/components/pages/NewQuote';
import { NotFoundDiv } from '@/components/pages/NotFoundStyle';
import QuoteDetail from '@/components/pages/QuoteDetail';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        errorElement: <NotFoundDiv>Page not found</NotFoundDiv>,
        children: [
          {
            index: true,
            element: <Navigate to='quotes' />
          },
          {
            path: 'quotes',
            element: <AllQuotes />,
          },
          {
            path: 'quotes/:quoteId/*',
            element: <QuoteDetail />,
          },
          {
            path: 'new-quote',
            element: <NewQuote />,
          },
          {
            path: '*',
            element: <NotFoundDiv>Page not found</NotFoundDiv>,
          },
        ],
      },
    ],
  },
]);
