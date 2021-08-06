import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Work from "./components/works/Work"
import Contacts from "./components/contacts/Contact"
import "./app.css"

function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
       <Intro />
       <Portfolio/>
       <Work/>
       <Contacts/>
     </div>
    </div>
  );
}

export default App;
