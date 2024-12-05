import React from 'react';
import styles from './Title.module.css';

function Title() {
  return (
    <div>
        {/*styles["my-title"]*/}
        <h1 className={styles.my_title}>Meu título</h1>
    </div>
  )
}

export default Title;