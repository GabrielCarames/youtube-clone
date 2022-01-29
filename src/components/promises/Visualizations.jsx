import { useEffect, useState } from "react"
import axios from "axios";
import { useHome } from "../../hooks/useHome";

export default function Visualizations({id}) {
    const [visualizations, setVisualizations] = useState()
    const {formatNumberWithDots} = useHome()
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(async () => {
        const video = await getVisualizationsFromVideoById(id)
        setVisualizations(video.statistics.viewCount)
    }, []);

    const getVisualizationsFromVideoById = async (id) => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${id}&key=${API_KEY}`)
        console.log("visualizations", res.data.items[0])
        return res.data.items[0]
    }

    return ( visualizations ? <span className="list__meta">{formatNumberWithDots(visualizations)} de visualizaciones</span> : null )
}
