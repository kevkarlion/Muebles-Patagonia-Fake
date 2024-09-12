import styles from './Spinner.module.sass'


export function Spinner() {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className={`${styles['spinner']}`}></div>
        </div>
      );
    }