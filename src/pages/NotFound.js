import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="container section">
      <h1>Page Not Found</h1>
      <p>It looks like the page you were looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </main>
  );
}

export default NotFound;
