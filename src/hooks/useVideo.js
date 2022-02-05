import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useVideo = () => {
    const [relatedVideos, setRelatedVideos] = useState()
    const [comments, setComments] = useState()
    const [channel, setChannel] = useState()
    const [video, setVideo] = useState()
    const { id } = useParams()
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const navbar = document.querySelector('.sidebar')
        navbar.className = 'sidebar disable'
        getVideoById()
    }, [id]);

    const getVideoById = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${id}&key=${API_KEY}`).then((res) => {
            setVideo(res.data.items[0])
            getChannelById(res.data.items[0].snippet.channelId)
            getComments(res.data.items[0].id)
            getRelatedVideos(res.data.items[0].id)
        })
    }

    const getChannelById = (id) => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2C%20statistics&id=${id}&key=${API_KEY}`).then((res) => {
            setChannel(res.data.items[0])
        })
    }
    
    const getComments = (id) => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&videoId=${id}&key=${API_KEY}`).then((res) => {
            setComments(res.data.items)
        })
    }

    const getRelatedVideos = (id) => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&relatedToVideoId=${id}Q&type=video&key=${API_KEY}`).then((res) => {
            setRelatedVideos(res.data.items)
        })
    }

    const days = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

    const formatDate = (date) => {
        return `${new Date(date).getDate()} ${days[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`
    }
    
    const urlify = (className) => {
        const descriptionText = className.current
        if(descriptionText) {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            const formatedDescription = video.snippet.description.replace(urlRegex, function(url) {
              return '<a href="' + url + '">' + url + '</a>';
            })
            descriptionText.innerHTML += formatedDescription
        }
    }

    return {video, channel, comments, relatedVideos, formatDate, urlify}
};
