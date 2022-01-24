import { useEffect, useState } from "react"
import axios from "axios";

export default function Icon({id}) {
    const [icon, setIcon] = useState();
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(async () => {
        const iconResult = await getChannelIcon(id)
        setIcon(iconResult)
    }, []);

    const getChannelIcon = async (id) => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${id}&key=${API_KEY}`)
        return res.data.items[0].snippet.thumbnails.default.url
    }

    return ( icon ? <img className="data__avatar" src={icon} alt="avatar" /> : null )
}
