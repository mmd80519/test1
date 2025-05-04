import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href='/'> صفحه ی اصلی </a>
            </li>
            <li>
              <a href='/musics'> موزیک ها </a>
            </li>
            <li>
              <a href='/videos'> ویدیو ها </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
