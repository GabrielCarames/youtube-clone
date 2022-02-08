import { useEffect, useState } from "react";
import axios from "axios";

export const useCategories = (setMostPopularVideos) => {
    const [categories, setCategories] = useState();
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        getCategories()
    }, []);
    
    const getCategories = async () => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=es_AR&regionCode=ar&key=${API_KEY}`)
        setCategories(res.data.items)
    }

    const getCategoryById = async (id) => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&hl=es_AR&regionCode=ar&maxResults=30&videoCategoryId=${id}&key=${API_KEY}`)
        setMostPopularVideos(res.data.items)
    }

    return {categories, getCategoryById}
};
