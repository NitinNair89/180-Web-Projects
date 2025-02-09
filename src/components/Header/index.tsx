import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <a href="#" className="btn btn-link">
          About
        </a>
      </section>
      <section className="navbar-center">
        <Link to="/" className="navbar-brand no-underline">
          &lt; 180_Days_180_Websites /&gt;
        </Link>
      </section>
      <section className="navbar-section">
        <Link
          to="https://github.com/NitinNair89/180-Web-Projects"
          className="btn btn-link"
          target="_blank"
        >
          GitHub
        </Link>
      </section>
    </header>
  );
};
