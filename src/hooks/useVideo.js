import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const useVideo = () => {
    const [video, setVideo] = useState()
    const [channel, setChannel] = useState()
    const [comments, setComments] = useState()
    const [relatedVideos, setRelatedVideos] = useState()
    const [visualizationsLoader, setVisualizationsLoader] = useState(false)
    const { id } = useParams()
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const navbar = document.querySelector('.sidebar')
        navbar.className = 'sidebar disable'
        getVideoById()
    }, []);

    const getVideoById = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${id}&key=${API_KEY}`).then((res) => {
            console.log("video", res.data.items[0])
            setVideo(res.data.items[0])
            getChannelById(res.data.items[0].snippet.channelId)
            getComments(res.data.items[0].id)
            getRelatedVideos(res.data.items[0].id)
        })
    }

    const getChannelById = (id) => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2C%20statistics&id=${id}&key=${API_KEY}`).then((res) => {
            console.log("channel", res.data.items[0])
            setChannel(res.data.items[0])
        })
    }
    
    const getComments = (id) => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&videoId=${id}&key=${API_KEY}`).then((res) => {
            console.log("comments", res.data)
            setComments(res.data.items)
        })
    }

    const getRelatedVideos = (id) => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&relatedToVideoId=SkCY2xS7PfQ&type=video&key=${API_KEY}`).then((res) => {
            console.log("relatedVideos", res.data)
            setRelatedVideos(res.data.items)
        })
    }

    const days = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

    const formatDate = (date) => {
        console.log(new Date(date).getDate())
        return `${new Date(date).getDate()} ${days[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`
    }

    return {video, channel, comments, relatedVideos, formatDate, visualizationsLoader}
};
