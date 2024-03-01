import logo from './logo.svg';
import './App.css';
import GitHubCard from './components/GitHubCard';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <GitHubCard />
    </div>
  );
}

export default App;
