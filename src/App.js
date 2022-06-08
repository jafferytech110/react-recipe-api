import './App.css';
import Categories from './components/Categories';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
