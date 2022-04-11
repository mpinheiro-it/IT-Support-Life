import Image from 'next/image';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <Image className={styles.headerLogo} src="/images/Vector.png" width="40" height="23"/>
        <p>spacetraveling<span>.</span></p>      
        
      </div>
    </header>
    

  ) 
}
