import axios from "axios";
import { useEffect, useState } from "react";

export const useCategories = (setMostPopularVideos) => {
    const [categories, setCategories] = useState();

    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        getCategories()
    }, []);
    

    const getCategories = async () => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=es_AR&regionCode=ar&key=${API_KEY}`)
        console.log("timedasd", res.data.items)
        setCategories(res.data.items)
    }

    const getCategoryById = async (id) => {
        // const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=ar&type=video&maxResults=30&videoCategoryId=${id}&key=${API_KEY}`)
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&hl=es_AR&regionCode=ar&maxResults=30&videoCategoryId=${id}&key=${API_KEY}`)
        console.log("cv", res.data.items)
        setMostPopularVideos(res.data.items)
    }

    return {categories, getCategoryById}
};
