import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useSearchResults = () => {
    const [searchResults, setSearchResults] = useState();
    const API_KEY = import.meta.env.VITE_API_KEY
    const query = useParams()

    useEffect(() => {
        searchQuery()
    }, [query]);
    

    const searchQuery = async () => {
        await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query.query}&regionCode=ar&key=${API_KEY}`).then((res) => {
            console.log("search", res)
            setSearchResults(res.data.items)
        })
    }

    return {searchQuery, searchResults}
};
