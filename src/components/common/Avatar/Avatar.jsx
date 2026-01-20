import styles from './Avatar.module.css';

function Avatar({ src, alt, size = 'medium', children }) {
  const sizeClass = styles[size] || styles.medium;
  
  return (
    <div className={`${styles.avatar} ${sizeClass}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className={styles.placeholder}>{children || '👤'}</span>
      )}
    </div>
  );
}

export default Avatar;
