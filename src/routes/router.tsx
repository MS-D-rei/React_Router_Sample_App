import AuthForm from '@/components/auth/AuthForm';
import Layout from '@/components/layout/Layout';
import AllQuotes from '@/components/pages/AllQuotes';
// import NewQuote from '@/components/pages/NewQuote';
import { NotFoundDiv } from '@/components/pages/NotFoundStyle';
import { QuoteDetailLoadingDiv } from '@/components/pages/QuoteDetailStyle';
import { LoadingSpinnerDiv } from '@/components/UI/LoadingSpinnerStyle';
// import QuoteDetail from '@/components/pages/QuoteDetail';
import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const QuoteDetail = React.lazy(() => import('@/components/pages/QuoteDetail'));
const NewQuote = React.lazy(() => import('@/components/pages/NewQuote'));

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
            element: <Navigate to="auth" />,
          },
          {
            path: 'auth',
            element: <AuthForm />
          },
          {
            path: 'quotes',
            element: <AllQuotes />,
          },
          {
            path: 'quotes/:quoteId/*',
            element: (
              <Suspense
                fallback={
                  <QuoteDetailLoadingDiv>
                    <LoadingSpinnerDiv className="spinner" />
                  </QuoteDetailLoadingDiv>
                }
              >
                <QuoteDetail />
              </Suspense>
            ),
          },
          {
            path: 'new-quote',
            element: (
              <Suspense
                fallback={
                  <QuoteDetailLoadingDiv>
                    <LoadingSpinnerDiv className="spinner" />
                  </QuoteDetailLoadingDiv>
                }
              >
                <NewQuote />
              </Suspense>
            ),
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
