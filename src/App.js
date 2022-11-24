import './App.scss';
import Welcome from './components/Welcome/Welcome';
import Intro from './components/Intro/Intro';
import SelectLang from './components/SelectLang/SelectLang';


function App() {
  return (
    <div className="App">
      <Welcome />
      <Intro />
      <SelectLang />

    </div>
  );
}

export default App;
