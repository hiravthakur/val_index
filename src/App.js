
import './App.css';
import CharDeployed from './characterContainer.js';
import SearchAppBar from './searchAppBar';
import characters from './characters.json';
import { useState } from 'react';
import SearchAlerts from './alerts';
import MapDeployed from './mapContainer';
import maps from './maps.json';
function App() {

  const [view, setView] = useState('characters');

  const [filteredCharactersArray, setfilteredCharactersArray] = useState(characters);

  const handleSearch = (query) => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setfilteredCharactersArray(filtered);
  };

  return (
    <>
      <SearchAppBar onSearch={handleSearch} set={setView} />
      
      {view === 'characters' && (
        <>
          {filteredCharactersArray.length === 0 ? (
            <SearchAlerts />
          ) : (
            <div className="containsGrid">
              {filteredCharactersArray.map((item) => (
                <div className="itemName">
                  <CharDeployed
                    name={item.name}
                    imageSrc={item.imageSrc}
                    realn={item['real-name']}
                    role={item.role}
                    desc={item.description}
                    home={item.origin}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
      
      {view === 'maps' && (
        <div className="containsGrid">
          {maps.map((item) => (
            <div className="itemName">
              <MapDeployed
                name={item.name}
                location={item.location}
                deatchmatch={item.tdm}
                layout={item['layout-src']}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
