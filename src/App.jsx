import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <Router>
        <div className="app-container">
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/"><Home/></Route>
                {/* <Route exact path="/error/:error"><Error/></Route> */}
                <Route path="*"><Home /></Route>
            </Switch>
        </div>
    </Router>
  )
}

export default App
