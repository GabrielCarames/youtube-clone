import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SubscriptionsContext from "./contexts/SubscriptionsContext"
import SidebarContext from "./contexts/SidebarContext"
import SearchResults from "./components/SearchResults"
import Subscriptions from "./components/Subscriptions"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Video from "./components/Video"
import Home from "./components/Home"

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
                                <Route path="*"><Home /></Route>
                            </Switch>
                        </div>
                </Router>
            </SubscriptionsContext.Provider>
        </SidebarContext.Provider>
    )
}

export default App
