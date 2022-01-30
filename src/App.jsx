import { createContext, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import SearchResults from "./components/SearchResults"
import Sidebar from "./components/Sidebar"
import Video from "./components/Video"
import SidebarContext from "./contexts/SidebarContext"

function App() {
    const [expandSidebar, setExpandSidebar] = useState(true);

    return (
        <SidebarContext.Provider value={{expandSidebar, setExpandSidebar}}>
            <Router>
                    <div className="app-container">
                        <Navbar expandSidebar={expandSidebar} setExpandSidebar={setExpandSidebar} />
                        <Sidebar />
                        <Switch>
                            <Route exact path="/"><Home/></Route>
                            <Route exact path="/watch/:id"><Video/></Route>
                            <Route exact path="/results/:query"><SearchResults/></Route>
                            {/* <Route exact path="/error/:error"><Error/></Route> */}
                            <Route path="*"><Home /></Route>
                        </Switch>
                    </div>
            </Router>
        </SidebarContext.Provider>
    )
}

export default App
