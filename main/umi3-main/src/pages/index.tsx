import styles from './index.less';

import microApps from '../../micro-apps';

function go(href) {
  window.history.pushState({}, null, href);
}

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>umi3 Micro</h1>
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
      <div id='root-subapp'></div>
    </div>
  );
}
