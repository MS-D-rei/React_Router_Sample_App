## useParams type setting

```ts
interface paramsProps {
  quoteId: string;
}

function QuoteDetail() {
  const params = useParams<paramsProps>();
  return (
    <>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
    </>
  );
}
```
