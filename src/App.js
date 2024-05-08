
import './App.css';
import CharDeployed from './characterContainer.js';
import SearchAppBar from './searchAppBar';
function App() {
  return (
    <>
      <SearchAppBar />
      <CharDeployed name="Hirav" imageSrc={"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png"} age="25" role="Duelist"/>
      </>
  );
}

export default App;
