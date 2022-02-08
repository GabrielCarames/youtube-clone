import { useEffect, useState } from "react";
import { getAuth, signInWithRedirect, GoogleAuthProvider, inMemoryPersistence, onAuthStateChanged, getRedirectResult, setPersistence, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useSidebar } from "./useSidebar";
import axios from "axios";

export const useHome = () => {
    const [mostPopularVideos, setMostPopularVideos] = useState()
    const {getSuscriptionsFromUserLogged} = useSidebar()
    const API_KEY = import.meta.env.VITE_API_KEY
    const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
    const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
    const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
    const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID
    const APP_ID = import.meta.env.VITE_MESSAGING_APP_ID

    const firebaseConfig = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    };
    
    useEffect(() => {
        initializeApp(firebaseConfig);
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user){
                getRedirectResult(auth).then((result) => {
                    if(result) {
                        const credential = GoogleAuthProvider.credentialFromResult(result)
                        const accessToken = credential.accessToken
                        const user = result.user
                        localStorage.setItem('accessToken', accessToken)
                        localStorage.setItem('userLogged', JSON.stringify(user))
                        localStorage.setItem('comprobacion', JSON.stringify(result))
                        getSuscriptionsFromUserLogged(accessToken)
                    }
                    getHomeData()
                })
            }else{
                authentication()
            }
        })
    }, []);
    
    const authentication = async () => {
        const auth = getAuth()
        setPersistence(auth, inMemoryPersistence).then(() => {
            const provider = new GoogleAuthProvider()
            provider.addScope('https://www.googleapis.com/auth/youtube')
            return signInWithRedirect(auth, provider)
        })
    }

    const singOut = () => {
        initializeApp(firebaseConfig)
        const auth = getAuth();
        localStorage.clear()
        signOut(auth)
    }

    const getMostPopularVideos = async () => {
        try {
            const mostPopularVideosList = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=30&regionCode=ar&videoCategoryId=17&key=${API_KEY}`)
            return mostPopularVideosList.data.items
        } catch (error) {
            console.log("err", error) 
        }
    }

    const getHomeData = async () => {
        const mostPopularVideosList = await getMostPopularVideos()
        setMostPopularVideos(mostPopularVideosList)
    }

    const getCorrectTime = (time) => {
        const timeInSeconds = Math.floor((new Date() - new Date(time)) / 1000)
        if(timeInSeconds >= timeList.second && timeInSeconds < timeList.minute) return checkPlural(timeInSeconds, ' segundos')
        if(timeInSeconds >= timeList.minute && timeInSeconds < timeList.hour) return checkPlural(Math.floor(timeInSeconds/60), ' minutos')
        if(timeInSeconds >= timeList.hour && timeInSeconds < timeList.day) return checkPlural(Math.floor(timeInSeconds/3600), ' horas')
        if(timeInSeconds >= timeList.day && timeInSeconds < timeList.week) return checkPlural(Math.floor(timeInSeconds/86400), ' dias')
        if(timeInSeconds >= timeList.week && timeInSeconds < timeList.month) return checkPlural(Math.floor(timeInSeconds/604800), ' semanas')
        if(timeInSeconds >= timeList.month && timeInSeconds < timeList.year) return checkPlural(Math.floor(timeInSeconds/2592000), ' meses') 
        if(timeInSeconds >= timeList.year) return checkPlural(Math.floor(timeInSeconds/31536000), ' años')
    }

    const timeList = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    const checkPlural = (timeInSeconds, stringTime) => {
        if(timeInSeconds === 1) return timeInSeconds + reverseAndRemoveSFromString(stringTime)
        else return timeInSeconds + stringTime
    }

    const reverseAndRemoveSFromString = (string) => {
        if(string === ' meses') return ' mes'
        else return string.split("").reverse().join("").replace('s','').split("").reverse().join("")
    }

    const formatNumberWithDots = (number) => {
        if(number >= 1000000) {
            const millionNumber = number.toString().split("")
            if(millionNumber[1] === "0") return millionNumber[0] +  " M"
            else return millionNumber[0] + "." + millionNumber[1] +  " M"
        } 
        else return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    return {mostPopularVideos, getCorrectTime, setMostPopularVideos, formatNumberWithDots, singOut}
};
