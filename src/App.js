
import './App.css';
import CharDeployed from './characterContainer.js';
import SearchAppBar from './searchAppBar';
import characters from './characters.json';
import { useState } from 'react';
import SearchAlerts from './alerts';
function App() {

  const [filteredCharactersArray, setfilteredCharactersArray] = useState(characters);

  const handleSearch = (query) => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setfilteredCharactersArray(filtered);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSearch}/>
      {filteredCharactersArray.length === 0 ? (
        <SearchAlerts></SearchAlerts> )
      : (
      <div className="containsGrid">
      {filteredCharactersArray.map((item) => ( <div className="itemName"> <CharDeployed name={item.name} imageSrc={item.imageSrc} 
      realn={item['real-name']} role={item.role} desc={item.description} home={item.origin}/>
      </div>))}
      </div>
      )}
      </>
  );
}

export default App;
