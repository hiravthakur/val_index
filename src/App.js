
import './App.css';
import CharDeployed from './characterContainer.js';
import SearchAppBar from './searchAppBar';
import characters from './characters.json';
import { useState } from 'react';
import SearchAlerts from './alerts';
import MapDeployed from './mapContainer';
import maps from './maps.json';
import CircularIndeterminate from './circularUpdates';
function App() {

  const [view, setView] = useState('characters');

  const [filteredCharactersArray, setfilteredCharactersArray] = useState(characters);

  const [filteredMapsArray, setfilteredMapsArray] = useState(maps);

  const handleSearch = (query) => {
    if (view === 'characters') {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setfilteredCharactersArray(filtered);
    }
    else if (view === 'maps') {
      const filteredMaps = maps.filter(maps =>
        maps.name.toLowerCase().includes(query.toLowerCase())
      );
      setfilteredMapsArray(filteredMaps);
      }
  };

  const externalLink = (url) => {
    window.open(url, 'my Linkedin')
    setView('characters')
  };

  return (
    <>
      <SearchAppBar onSearch={handleSearch} set={setView} />
      
      {view === 'characters' && (
        <>
          {filteredCharactersArray.length === 0 ? (
            <SearchAlerts desc="Can't find what you're looking for :("/>
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
          {filteredMapsArray.map((item) => (
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

{view === 'developer information' && (

      externalLink("https://www.linkedin.com/in/hirav-abhay-singh-thakur-8bb3b3253")

      )}
  {view === 'weapons' && (
    <><SearchAlerts desc="Sorry, we're still working on this."></SearchAlerts>
    <div className='centered'>
    <CircularIndeterminate></CircularIndeterminate>
    </div>
    </>
  )}

    </>
  );
}

export default App;
