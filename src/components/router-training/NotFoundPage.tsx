import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      404 Not Found
      <Link to="/">Home from Link</Link>
    </div>
  );
}

export default NotFoundPage;
