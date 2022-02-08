import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useSearchResults = () => {
    const [searchResults, setSearchResults] = useState()
    const query = useParams()
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const previousQuery = localStorage.getItem('query')
        if(previousQuery !== query.query) searchQuery()
    }, [query]);
    
    const searchQuery = async () => {
        await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query.query}&regionCode=ar&key=${API_KEY}`).then((res) => {
            localStorage.setItem('query', query.query)
            setSearchResults(res.data.items)
        })
    }

    return {searchQuery, searchResults}
};
