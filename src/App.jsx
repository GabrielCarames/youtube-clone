import { createContext, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import SearchResults from "./components/SearchResults"
import Sidebar from "./components/Sidebar"
import Subscriptions from "./components/Subscriptions"
import Video from "./components/Video"
import SidebarContext from "./contexts/SidebarContext"
import SubscriptionsContext from "./contexts/SubscriptionsContext"

function App() {
    const [expandSidebar, setExpandSidebar] = useState(true);
    const [subscriptions, setSubscriptions] = useState();

    return (
        <SidebarContext.Provider value={{expandSidebar, setExpandSidebar}}>
            <SubscriptionsContext.Provider value={{subscriptions, setSubscriptions}}>
                <Router>
                        <div className="app-container">
                            <Navbar expandSidebar={expandSidebar} setExpandSidebar={setExpandSidebar} />
                            <Sidebar />
                            <Switch>
                                <Route exact path="/"><Home/></Route>
                                <Route exact path="/watch/:id"><Video/></Route>
                                <Route exact path="/results/:query"><SearchResults/></Route>
                                <Route exact path="/feed/subscriptions"><Subscriptions /></Route>
                                {/* <Route exact path="/error/:error"><Error/></Route> */}
                                <Route path="*"><Home /></Route>
                            </Switch>
                        </div>
                </Router>
            </SubscriptionsContext.Provider>
        </SidebarContext.Provider>
    )
}

export default App
