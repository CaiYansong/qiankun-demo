import React from 'react';
import styles from './index.css';

import microApps from '../../micro-apps';

function go(href) {
  window.history.pushState({}, null, href);
}

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
    <ul>
    {
      microApps.map(item => (
        <li
          style={{ margin: '12px', cursor: 'pointer' }}
          onClick={() => { go(item.base) }}
          key={item.name}
        >{item.name}</li>
      ))
    }
    </ul>
      {props.children}
      <div id='container'></div>
      <div id='root-subapp'></div>
    </div>
  );
};

export default BasicLayout;
