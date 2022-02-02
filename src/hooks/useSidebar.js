import axios from "axios";
import { useEffect, useState } from "react";

export const useSidebar = () => {
    const [suscriptions, setSuscriptions] = useState();

    useEffect(() => {
        getSuscriptionsFromUserLogged()
    }, []);
    
    const getSuscriptionsFromUserLogged = async () => {
        const API_KEY = import.meta.env.VITE_API_KEY
        const accessToken = localStorage.getItem('accessToken')
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=50&mine=true&order=unread&access_token=${accessToken}&key=${API_KEY}`)
        console.log("suscriptions", res)
        setSuscriptions(res.data.items)
    }

    return {suscriptions}
};
