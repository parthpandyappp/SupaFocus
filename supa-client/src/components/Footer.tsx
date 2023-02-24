import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex-none text-center text-xs text-white">
      &copy; SUPAFOCUS {`${new Date().getFullYear()}`}{" "}
      <span className="ml-1">•</span>
      <Link to="/terms-of-service" className="ml-2">
        Terms of service
      </Link>
      <span className="ml-1">•</span>
      <Link to="/privacy-policy" className="ml-2">
        Privacy policy
      </Link>
    </footer>
  );
};
