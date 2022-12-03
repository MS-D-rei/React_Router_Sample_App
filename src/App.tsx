import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AllQuotes from '@/components/pages/AllQuotes';
import NewQuote from '@/components/pages/NewQuote';
import QuoteDetail from '@/components/pages/QuoteDetail';
import { NotFoundDiv } from './components/pages/NotFoundStyle';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="quotes" />} />
        <Route path="quotes" element={<AllQuotes />} />
        <Route path="quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFoundDiv>Page not found</NotFoundDiv>} />
      </Routes>
    </Layout>
  );
}
export default App;
