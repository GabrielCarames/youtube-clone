import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"

function App() {

  return (
    <Router>
        <div className="app-container">
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
