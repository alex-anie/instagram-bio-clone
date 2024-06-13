import { Link } from "react-router-dom";
import InstagramText from "../icons/InstagramText";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav>
          {/* Logo */}
          <div className="logo">
            <Link>
              <InstagramText />
            </Link>
          </div>

          {/* Sign up button */}
          <div className="sign-up-buttons">
            <Link className="log-in btn">Log In</Link>
            <Link className="sign-up btn">Sign Up</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
