import { useContext, useEffect, useState } from "react";
import SubscriptionsContext from "../contexts/SubscriptionsContext";
import axios from "axios";

export const useSubscriptions = () => {
    const [subscriptionsVideos, setSubscriptionsVideos] = useState([]);
    const {subscriptions} = useContext(SubscriptionsContext)
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        // const previousQuery = localStorage.getItem('query')
        // if(previousQuery !== query.query) searchQuery()
        subscriptions && getSubscriptionsVideos()
    }, [subscriptions]);
    
    let subscriptionsVideosArray = []

    const getSubscriptionsVideos = async () => {
        const subscriptionsRawArray = await Promise.all(
            subscriptions.map(async (subscription, index, array) => {
                const items = await getSubscriptions(subscription.snippet.resourceId.channelId)
                return subscriptionsVideosArray.concat.apply(subscriptionsVideosArray, items)
            })
        )
        const subscriptionMergedArray = [].concat.apply([], subscriptionsRawArray)
        console.log("subscriptionsVideosArray", subscriptionMergedArray)
        setSubscriptionsVideos(subscriptionMergedArray)
    }

    const getSubscriptions = async (channelId) => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/activities?part=id%2C%20snippet%2C%20contentDetails&channelId=${channelId}&key=${API_KEY}`)
        // res.data.items && subscriptionsVideosArray.concat(res.data.items)
        return res.data.items
    }

    return {subscriptionsVideos}
};
