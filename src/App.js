
import './App.css';
import CharDeployed from './characterContainer.js';
import SearchAppBar from './searchAppBar';
import characters from './characters.json';
import BasicModal from './displayModal';

function App() {
  return (
    <>
      <SearchAppBar />
      <div className="containsGrid">
      {characters.map((item) => ( <div className="itemName"> <CharDeployed name={item.name} imageSrc={item.imageSrc} 
      realn={item['real-name']} role={item.role}/>
      </div>))}
      </div>
      </>
  );
}

export default App;
