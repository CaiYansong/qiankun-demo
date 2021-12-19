import microApps from './micro-apps';

function go(href) {
  window.history.pushState({}, null, href);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Main
        </p>
        <ul>
          {microApps.map(item => (
            <li style={{margin: '12px', cursor: 'pointer'}} onClick={() => { go(item.activeRule) }}>{ item.name }</li>
          ))}
        </ul>
      </header>
      <main>
        <div id='container'></div>
      </main>
    </div>
  );
}

export default App;
