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

## Upgrade v5 to v6
1. Change 'Switch' to 'Routes'
- All <Route>s and <Link>s inside a <Routes> are relative. This leads to leaner and more predictable code in <Route path> and <Link to>
- Routes are chosen based on the best match instead of being traversed in order. This avoids bugs due to unreachable routes because they were defined later in your <Switch>
- Routes may be nested in one place instead of being spread out in different components. In small to medium-sized apps, this lets you easily see all your routes at once. In large apps, you can still nest routes in bundles that you load dynamically via React.lazy

In order to use v6, need to convert all your <Switch> elements to <Routes>.
```ts
// v5
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Users() {
  // In v5, nested routes are rendered by the child component, so
  // you have <Switch> elements all over your app for nested UI.
  // You build nested routes and links using match.url and match.path.
  let match = useRouteMatch();

  return (
    <div>
      <nav>
        <Link to={`${match.url}/me`}>My Profile</Link>
      </nav>

      <Switch>
        <Route path={`${match.path}/me`}>
          <OwnUserProfile />
        </Route>
        <Route path={`${match.path}/:id`}>
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}

// v6
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        // Don't use path='/users/*'
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        // Relative path. to='me' => (users/)me
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        // Relative path. path=':id' => (users/):id
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}
```
2. useNavigate instead of useHistory
```ts
// v5
function NewQuote() {
  const history = useHistory();
  history.push('/quotes');
}
// v6
function NewQuote() {
  const navigate = useNavigate();
  navigate('/quotes');
}
```

## lazy component loading with Suspense
reactjs URL
https://beta.reactjs.org/apis/react/lazy
```ts
// router.tsx
const QuoteDetail = React.lazy(() => import('@/components/pages/QuoteDetail'));
export const router = createBrowserRouter([
  {
    path: 'quotes/:quoteId/*',
    element: (
      // Need to set fallback component while loading component
      <Suspense fallback={
        <QuoteDetailLoadingDiv>
          <LoadingSpinnerDiv className="spinner" />
        </QuoteDetailLoadingDiv>
      }>
        <QuoteDetail />
      </Suspense>
    ),
  },
])
```