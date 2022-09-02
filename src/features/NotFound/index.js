import logo from '../../logo.svg';
import './index.css';

function NotFound() {
  return (
    <div className="NotFound">
      <header className="NotFound-header">
        <img src={logo} className="NotFound-logo" alt="logo" />
        <p> Page Not Found </p>
      </header>
    </div>
  );
}

export default NotFound;
