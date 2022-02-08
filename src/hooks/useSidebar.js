import { useContext, useEffect } from "react";
import SubscriptionsContext from "../contexts/SubscriptionsContext";
import axios from "axios";

export const useSidebar = () => {
    const {subscriptions, setSubscriptions} = useContext(SubscriptionsContext)

    useEffect(() => {
        getSuscriptionsFromUserLogged()
    }, []);
    
    const getSuscriptionsFromUserLogged = async () => {
        if(!subscriptions) {
            const accessToken = localStorage.getItem('accessToken')
            const API_KEY = import.meta.env.VITE_API_KEY
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=50&mine=true&order=unread&access_token=${accessToken}&key=${API_KEY}`)
            setSubscriptions(res.data.items)
        }
    }
    
    return {getSuscriptionsFromUserLogged}
}
