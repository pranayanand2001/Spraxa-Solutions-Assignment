import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/tables', label: 'Tables', icon: '📊' },
    { path: '/billing', label: 'Billing', icon: '💳' },
    { path: '/rtl', label: 'RTL', icon: '🔧' },
  ];

  const accountPages = [
    { path: '/sign-in', label: 'Sign In', icon: '📄' },
    { path: '/sign-up', label: 'Sign Up', icon: '🚀' },
  ];

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>PURITY UI DASHBOARD</span>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
              onClick={onClose}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}

          <div className={styles.sectionLabel}>ACCOUNT PAGES</div>

          {accountPages.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
              onClick={onClose}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className={styles.helpCard}>
          <div className={styles.helpIcon}>❓</div>
          <div className={styles.helpContent}>
            <h3>Need help?</h3>
            <p>Please check our docs</p>
            <button className={styles.docButton}>DOCUMENTATION</button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
