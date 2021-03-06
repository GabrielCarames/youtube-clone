import { useContext, useEffect, useState } from "react";
import SubscriptionsContext from "../contexts/SubscriptionsContext";
import axios from "axios";

export const useSubscriptions = () => {
    const [subscriptionsVideos, setSubscriptionsVideos] = useState([])
    const {subscriptions} = useContext(SubscriptionsContext)
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        subscriptions && getSubscriptionsVideos()
    }, [subscriptions]);
    
    let subscriptionsVideosArray = []

    const getSubscriptionsVideos = async () => {
        if(subscriptionsVideos.length === 0) {
            const subscriptionsRawArray = await Promise.all(
                subscriptions.map(async (subscription) => {
                    const items = await getSubscriptions(subscription.snippet.resourceId.channelId)
                    return subscriptionsVideosArray.concat.apply(subscriptionsVideosArray, items)
                })
            )
            const subscriptionMergedArray = [].concat.apply([], subscriptionsRawArray)
            subscriptionMergedArray.sort(function(a,b){
                return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
            });
            setSubscriptionsVideos(subscriptionMergedArray)
        }
    }

    const getSubscriptions = async (channelId) => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/activities?part=id%2C%20snippet%2C%20contentDetails&channelId=${channelId}&key=${API_KEY}`)
        return res.data.items
    }

    return {subscriptionsVideos}
};
