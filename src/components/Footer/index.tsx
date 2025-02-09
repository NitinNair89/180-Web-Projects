import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="text-left text-small text-muted">
      <div>
        This is a popular challenge done by{' '}
        <Link to="https://jenniferdewalt.com/">Jennifer Dewalt</Link>.
        The "180 Days challenge" is to develop a website each day and
        upskill in the process.
      </div>
      <div>
        Made with ❤️ by{' '}
        <Link
          to="https://github.com/NitinNair89"
          target="_blank"
          title="Follow Nitin on GitHub"
          aria-label="Follow Nitin on GitHub"
        >
          Nitin Nair
        </Link>{' '}
      </div>
    </footer>
  );
};
