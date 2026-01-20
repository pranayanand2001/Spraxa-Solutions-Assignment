import styles from './Toggle.module.css';

function Toggle({ checked = false, onChange, label, id }) {
  const handleToggle = () => {
    const newValue = !checked;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.toggleContainer}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <button
        id={id}
        className={`${styles.toggle} ${checked ? styles.checked : ''}`}
        onClick={handleToggle}
        role="switch"
        aria-checked={checked}
      >
        <span className={styles.slider}></span>
      </button>
    </div>
  );
}

export default Toggle;
