import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import {useState} from "react";


function App() {
  const [loaded, setLoaded] = useState(true);
  return (
    <>
    <Header/>
    <Main loaded={loaded} setLoaded={setLoaded}/>
    </>
  );
}
export default App;
