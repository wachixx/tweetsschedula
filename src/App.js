import Store from "./context/Store";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Store>
         <Home/>
      </Store>
    </>
  );
}

export default App;
