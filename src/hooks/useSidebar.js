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
        // const userAuth = await axios.get('https://accounts.google.com/o/oauth2/auth?client_id=1083580781763-6a8bpfo37mcbfha1kjvj8g26ugrou7bu.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost&scope=https://www.googleapis.com/auth/youtube&response_type=token')
        // console.log("userAuth", userAuth)
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&access_token=${accessToken}&key=${API_KEY}`)
        console.log("suscriptions", res)
        setSuscriptions(res.data.items)
    }

    return {suscriptions}
};
