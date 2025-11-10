import "./App.css";
import Router from "./components/Router";
import ScrollTop from "./components/RouterScroll";

const App = () => {
  return (
    <div className="app">
      <ScrollTop />
      <Router />
    </div>
  );
};

export default App;