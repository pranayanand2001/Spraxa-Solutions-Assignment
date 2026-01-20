import { useLocation } from 'react-router-dom';
import styles from './Topbar.module.css';
import Button from '../../common/Button/Button';

function Topbar({ onMenuClick }) {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/profile') return 'Profile';
    return 'Dashboard';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    console.log('Search:', searchTerm);
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    alert('Notifications feature');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    alert('Settings feature');
  };

  const handleSignInClick = () => {
    console.log('Sign In clicked');
    alert('Sign In feature');
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbText}>Pages / {getPageTitle()}</span>
        <h1 className={styles.pageTitle}>{getPageTitle()}</h1>
      </div>

      <div className={styles.actions}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchIcon}>🔍</div>
          <input
            type="text"
            name="search"
            placeholder="Type here..."
            className={styles.searchInput}
          />
        </form>

        <Button variant="ghost" size="md" className={styles.actionButton} onClick={handleSignInClick}>
          <span className={styles.actionIcon}>👤</span>
          <span className={styles.actionText}>Sign In</span>
        </Button>

        <button className={styles.iconButton} onClick={handleSettingsClick} aria-label="Settings">
          ⚙️
        </button>

        <button className={styles.iconButton} onClick={handleNotificationClick} aria-label="Notifications">
          🔔
        </button>

        <button className={styles.menuButton} onClick={onMenuClick} aria-label="Menu">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Topbar;
