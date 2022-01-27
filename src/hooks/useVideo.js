import { useEffect } from "react";

export const useVideo = () => {

    useEffect(() => {
        const navbar = document.querySelector('.sidebar')
        navbar.className = 'sidebar disable'
    }, []);


    return {}
};
