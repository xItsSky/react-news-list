import logo from './logo.svg';
import './App.css';
import TimeLine from "./components/timeline/TimeLine";
import {news} from "./resources/News";

function App() {
  return (
    <div className="App">
      <TimeLine news={news} />
    </div>
  );
}

export default App;
