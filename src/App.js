// import './App.css';
import {Route, Routes} from 'react-router-dom'
import { MainPage } from './Components/MainPage';
import { SearchPage } from './Components/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/searchq=:query" element={<SearchPage />}></Route>
      </Routes>
    </div>
  )
}

export default App;
