import './App.css';

function App() {
  return (
    <>
      <ul>
        <li>Привет, React!</li>
        <li>Сегодня {new Date().toLocaleDateString()}</li>
        <li>Сейчас {new Date().toLocaleTimeString()}</li>
      </ul>
    </>
  );
}

export default App;
