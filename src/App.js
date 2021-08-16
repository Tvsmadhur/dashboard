
import './App.css';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import BarChart from './components/BarChart';
import List from './components/List'
import SpacingGrid from './components/SpacingGrid';
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Sidebar/>
     <BarChart/>
      <List/>
      <SpacingGrid/>
      
      
    </div>
  );
}

export default App;
