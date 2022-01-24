import { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const useHome = () => {
    const [mostPopularVideos, setMostPopularVideos] = useState();
    const [userChannelIcons, setUserChannelIcons] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY

    const firebaseConfig = {
      apiKey: "AIzaSyB8NupBhoXT8uiqBdCrqrpKO5vaAJLayKU",
      authDomain: "clone-339018.firebaseapp.com",
      projectId: "youtube-clone-339018",
      storageBucket: "youtube-clone-339018.appspot.com",
      messagingSenderId: "1083580781763",
      appId: "1:1083580781763:web:f5b9360201314055d83e76"
    };

    const timeList = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };
    
    useEffect(() => {
        const userLogged = localStorage.getItem('userLogged')
        if(!userLogged) {
            initializeApp(firebaseConfig)
            authentication()
        }
        getHomeData()
    }, []);

    const authentication = async () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log("user", user)
            localStorage.setItem('userLogged', JSON.stringify(user))
            getHomeData()
        }).catch((error) => {
            if (error.code === 'auth/popup-closed-by-user') {
                console.log("No se pudo autenticar al usuario")
            }
        });
    }

    const getMostPopularVideos = async () => {
        const objetoparanogastarticketsxd = [
            {
              "kind": "youtube#video",
              "etag": "ZBRFFBtVeXv9I7OQEL6_T-plJI8",
              "id": "J-HXuRZEKWA",
              "snippet": {
                "publishedAt": "2022-01-22T02:28:46Z",
                "channelId": "UCFmMw7yTuLTCuMhpZD5dVsg",
                "title": "¡EL XENEIZE LE GANÓ A LA U Y SE METIÓ EN LA FINAL! | Boca Juniors 3-2 U. De Chile | RESUMEN",
                "description": "Disfruta el Torneo Internacional de Verano 2022 por #ESPNenStarPlus ingresando a este link: http://dis.la/ESPNenStarPlus_YT\n\nTorneo Internacional de Verano 2022\nGrupo A\nGoles: 33' C. Palacios (UC); 39' C. Medina (B); 47' R. Fernández (UC); 51' E. Zeballos (B y 74' L. Vázquez.\nExpulsado: 48' Moya (UC).\n\n¿Ya te suscribiste a nuestro canal?: http://bit.ly/3ppZdsI​​\n\nPara más información, visita http://www.espn.com​​​​\n\nNo te olvides de seguirnos en TODAS las redes:\n\n- https://www.facebook.com/SportsCenterESPN\n- https://twitter.com/SC_ESPN​​​​\n- https://www.instagram.com/scespn/​​​​\n\n- https://www.facebook.com/ESPNFans​​​​\n- https://twitter.com/ESPNArgentina​​​​\n- https://www.instagram.com/espnargentina​",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/J-HXuRZEKWA/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/J-HXuRZEKWA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/J-HXuRZEKWA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/J-HXuRZEKWA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  }
                },
                "channelTitle": "ESPN Fans",
                "tags": [
                  "Boca",
                  "U. de Chile",
                  "Boca Juniors",
                  "ESPN",
                  "RESUMEN",
                  "Torneo Internacional de Verano"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "¡EL XENEIZE LE GANÓ A LA U Y SE METIÓ EN LA FINAL! | Boca Juniors 3-2 U. De Chile | RESUMEN",
                  "description": "Disfruta el Torneo Internacional de Verano 2022 por #ESPNenStarPlus ingresando a este link: http://dis.la/ESPNenStarPlus_YT\n\nTorneo Internacional de Verano 2022\nGrupo A\nGoles: 33' C. Palacios (UC); 39' C. Medina (B); 47' R. Fernández (UC); 51' E. Zeballos (B y 74' L. Vázquez.\nExpulsado: 48' Moya (UC).\n\n¿Ya te suscribiste a nuestro canal?: http://bit.ly/3ppZdsI​​\n\nPara más información, visita http://www.espn.com​​​​\n\nNo te olvides de seguirnos en TODAS las redes:\n\n- https://www.facebook.com/SportsCenterESPN\n- https://twitter.com/SC_ESPN​​​​\n- https://www.instagram.com/scespn/​​​​\n\n- https://www.facebook.com/ESPNFans​​​​\n- https://twitter.com/ESPNArgentina​​​​\n- https://www.instagram.com/espnargentina​"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "RcwyTkXrpqWrCLZcXxynfJVblbA",
              "id": "UTP6PjKFrNA",
              "snippet": {
                "publishedAt": "2022-01-11T23:46:17Z",
                "channelId": "UCGbHu0bRpEe1w1UhNJYS67A",
                "title": "En el partido de béisbol las cosas salieron mal 😰 #short",
                "description": "",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/UTP6PjKFrNA/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/UTP6PjKFrNA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/UTP6PjKFrNA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/UTP6PjKFrNA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/UTP6PjKFrNA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "janin al chair",
                "categoryId": "23",
                "liveBroadcastContent": "none",
                "defaultLanguage": "es-419",
                "localized": {
                  "title": "En el partido de béisbol las cosas salieron mal 😰 #short",
                  "description": ""
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "s8nU0StTS2KH0IrQXvjfs25Z9Fk",
              "id": "SkCY2xS7PfQ",
              "snippet": {
                "publishedAt": "2022-01-18T02:13:12Z",
                "channelId": "UCtUM3ZNoM1ngtcX8Y2Y3PYw",
                "title": "El día que le tomaron el equipo a Sampaoli | Mundial 2018",
                "description": "",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/SkCY2xS7PfQ/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/SkCY2xS7PfQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/SkCY2xS7PfQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/SkCY2xS7PfQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  }
                },
                "channelTitle": "Pablo Carrozza",
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "El día que le tomaron el equipo a Sampaoli | Mundial 2018",
                  "description": ""
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "1_v0_5bHPkO_UDxSCY_zIpxu0MM",
              "id": "EDv7y9M-0ZM",
              "snippet": {
                "publishedAt": "2022-01-13T16:33:37Z",
                "channelId": "UCQZi2YXSxc6BSK4mZHql8ag",
                "title": "He went against a pro and came up clutch 👏🔥 | #shorts",
                "description": "He went against a pro and came up clutch 👏🔥 | #shorts (via @brosee24 on IG)\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/EDv7y9M-0ZM/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/EDv7y9M-0ZM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/EDv7y9M-0ZM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "SportsNation",
                "tags": [
                  "espn",
                  "youtube shorts video",
                  "youtube short video",
                  "viral",
                  "sports",
                  "#ESPN",
                  "youtube shorts",
                  "tik tok",
                  "shorts",
                  "ytshorts",
                  "trending"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "He went against a pro and came up clutch 👏🔥 | #shorts",
                  "description": "He went against a pro and came up clutch 👏🔥 | #shorts (via @brosee24 on IG)\n✔️Subscribe to ESPN+ http://espnplus.com/youtube\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "I5bwbJ3kcJwjz2R14gpQulOMTxw",
              "id": "aZr14Z13o70",
              "snippet": {
                "publishedAt": "2022-01-21T19:55:43Z",
                "channelId": "UCCCkqTnMyk2emHuvE0WxZCg",
                "title": "Detalles de la llegada de Barco a River, la venta de Álvarez y 3 Delanteros para reemplazarlo",
                "description": "------------------------------------------------------------------\n------------------------------------------------------------------\nCortesía: TyC Sports. Mirá las programaciones en vivo de Sportia, de lunes a viernes de 8 a 12 Hs., por la pantalla de TyC Sports.\n------------------------------------------------------------------\n------------------------------------------------------------------\n\nFuentes y Noticias:\n\nTyC Sports\nSportia\nSuperfutbol\nPresion alta\nLíbero\nF90\nF360\nF90 2ª Edición\nTNT Continental\nPlaneta Gol\nEstudio Futbol\nF12\nSportia\nESPN\nESPN 2\nFantino\nGustavo Lopez\nSebastian Vignollo\nPollo Vignolo\nUn buen momento\nDe una un buen momento\nToti Pasman\nPato Burlone\nJuan Cortese\nLito Costa Febre\nLibermann\nHoracio Pagani\nOscar Ruggeri\nPrograma sin nombre\nSupermitre deportivo\nMauro Palacios",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/aZr14Z13o70/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/aZr14Z13o70/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/aZr14Z13o70/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "RiverLateTV 2",
                "tags": [
                  "BOVER TV",
                  "BOVER",
                  "River Plate",
                  "Boca Juniors",
                  "Superclásico"
                ],
                "categoryId": "23",
                "liveBroadcastContent": "none",
                "defaultLanguage": "es-419",
                "localized": {
                  "title": "Detalles de la llegada de Barco a River, la venta de Álvarez y 3 Delanteros para reemplazarlo",
                  "description": "------------------------------------------------------------------\n------------------------------------------------------------------\nCortesía: TyC Sports. Mirá las programaciones en vivo de Sportia, de lunes a viernes de 8 a 12 Hs., por la pantalla de TyC Sports.\n------------------------------------------------------------------\n------------------------------------------------------------------\n\nFuentes y Noticias:\n\nTyC Sports\nSportia\nSuperfutbol\nPresion alta\nLíbero\nF90\nF360\nF90 2ª Edición\nTNT Continental\nPlaneta Gol\nEstudio Futbol\nF12\nSportia\nESPN\nESPN 2\nFantino\nGustavo Lopez\nSebastian Vignollo\nPollo Vignolo\nUn buen momento\nDe una un buen momento\nToti Pasman\nPato Burlone\nJuan Cortese\nLito Costa Febre\nLibermann\nHoracio Pagani\nOscar Ruggeri\nPrograma sin nombre\nSupermitre deportivo\nMauro Palacios"
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "fKkvfC7c3IEhpeXll0cNPdFUJ0c",
              "id": "JGg48DBZWlk",
              "snippet": {
                "publishedAt": "2022-01-20T20:00:05Z",
                "channelId": "UCRN-6-DPNncVEyeRAOmNAKg",
                "title": "FUTBOL TENIS con TODOS los GRANDES - EPISODIO 3",
                "description": "¿Quién es el verdadero grande?\n\nParticipantes invitados:\n\nIndependiente: https://www.instagram.com/charlyiacono y https://www.instagram.com/aledelrojo1234/\nSan Lorenzo: https://www.instagram.com/alejandroalessandri y https://www.instagram.com/fran.leon03/\nRacing: https://www.instagram.com/francisco_medina_chagas/ y https://www.instagram.com/nico.marconi__\nEstudiantes: https://www.instagram.com/33brasil y https://www.instagram.com/_maarcosmartinez\n\n► Redes sociales:\n◘ Instagram: https://instagram.com/losdisplicentes\n◘ Facebook: https://www.facebook.com/LosDisplicentes\n\nSuscribite y acompáñanos para que el deporte nos una, y seamos solo rivales y no enemigos. #LosDisplicentes",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/JGg48DBZWlk/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/JGg48DBZWlk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/JGg48DBZWlk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/JGg48DBZWlk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/JGg48DBZWlk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Los Displicentes",
                "tags": [
                  "los displicentes boca River losdisplicentes futbol",
                  "rivales no enemigos",
                  "soccer",
                  "reacciones",
                  "Reaccion",
                  "copa",
                  "libertadores",
                  "Argentina",
                  "funny",
                  "futbol",
                  "mundial",
                  "los displicentes",
                  "retos",
                  "desafios",
                  "gracioso",
                  "caidas",
                  "mareado",
                  "boca",
                  "river",
                  "5 grandes",
                  "racing",
                  "independiente",
                  "san lorenzo",
                  "futbol tenis",
                  "estudiantes",
                  "tenis"
                ],
                "categoryId": "23",
                "liveBroadcastContent": "none",
                "defaultLanguage": "es-419",
                "localized": {
                  "title": "FUTBOL TENIS con TODOS los GRANDES - EPISODIO 3",
                  "description": "¿Quién es el verdadero grande?\n\nParticipantes invitados:\n\nIndependiente: https://www.instagram.com/charlyiacono y https://www.instagram.com/aledelrojo1234/\nSan Lorenzo: https://www.instagram.com/alejandroalessandri y https://www.instagram.com/fran.leon03/\nRacing: https://www.instagram.com/francisco_medina_chagas/ y https://www.instagram.com/nico.marconi__\nEstudiantes: https://www.instagram.com/33brasil y https://www.instagram.com/_maarcosmartinez\n\n► Redes sociales:\n◘ Instagram: https://instagram.com/losdisplicentes\n◘ Facebook: https://www.facebook.com/LosDisplicentes\n\nSuscribite y acompáñanos para que el deporte nos una, y seamos solo rivales y no enemigos. #LosDisplicentes"
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "dK6NEYrErSBI1w1nlnl5nWfwIkc",
              "id": "d_iS5hlK8xw",
              "snippet": {
                "publishedAt": "2022-01-21T21:00:06Z",
                "channelId": "UCRYL9m12GUiXKYzEin_K2Nw",
                "title": "¡JULIÁN ÁLVAREZ se va a CITY por esta FORTUNA!+ RIVER compra BARCO y FARÍAS+ BOCA presentó BENEDETTO",
                "description": "Descarga OneFootball: https://tinyurl.com/2takk26d\nJulián Álvarez se va al Manchester City por una fortuna de 27 millones y medio de dólares por pedido de Pep Guardiola, River Plate rompe el mercado con sus nuevos refuerzos apuntados Esequiel Barco, ex independiente, Facundo Farias de Colon y Valentín Castellanos, Boca Juniors presentó al Pipa Benedetto en conferencia de prensa dándole la numero 9, Dibu Martínez renovó su contrato con Aston Villa, Paulo Dybala se acerca al Inter dejando la Juventus, Haaland al Real Madrid, el palito del Psg al Real Madrid, los sorteos de copa del Rey, la tristeza de Xavi por quedar afuera, Oscar se acerca al Barcelona, Maxi Meza convocado a la Selección Argentina, Talleres quiere a Pol Fernández, Licha Lopez se fue de Boca al Tijuana de México, San Lorenzo busca repatriar a Nicolás Blandi, lo mejor del Mercado de pases con los últimos refuerzos y rumores, el polémico ranking de los mejores clubes del mundo, lo mejor de #Messi #Boca #River la #LigaFutbolProfesional #TorneoSocios y #CopaLibertadores #CopaSudamericana, los más destacados movimientos, rumores, refuerzos y fichajes en este Mercado de Pases, las mejores curiosidades del Fútbol, y mucho más!\n\n00:00 Intro\n01:13 Jornada Europea\n04:02 Jornada Americana\n04:53 Jornada Argentina\n08:17 Bombas en River\n12:29 Presentación de Benedetto\n\nESPERO que les GUSTE este vídeo! Y no te olvides de suscribirte!\n\n▶️ SUSCRIBITE a esta GRAN Comunidad: https://bit.ly/32IsmDs\n▶️SEGUIME en MI INSTAGRAM: http://www.instagram.com/joaqoop\n\n-------------------------------------------\nUN POCO DE MI:\n\nMi nombre es Joaquin Pastana, pero me gusta que me digan Joaqo y soy un youtuber (o eso intento) de la provincia de Salta, Argentina. Tengo 24 años. Me gusta mucho el periodismo, no estudie nunca la carrera, pero me siento muchas veces como uno. Empecé mi canal a mediados del 2015 y desde ahí no paré. A fines del mismo año, grabé varios comerciales para la empresa DORITOS (si DORITOS!!!) y conoci a varios YOUTUBERS ARGENTINOS. \nEn el año 2016 comencé a trabajar con el DIARIO LA GACETA, un diario muy conocido en el NORTE ARGENTINO hasta fines del 2017.\nY en 2018 estuve produciendo programas y de conductor de un programa de TELEFÉ en TELIVISIÓN.\nMientras tanto seguí subiendo videos y encontrandome más en la plataforma. \nLogré hacer videos con varias personas que admiraba como DUKI, YSY A, PAULO LONDRA, LIT KILLAH, DTOKE, ABEL PINTOS, CHAPU MARTINEZ, EL BANANERO, ECKO, AGUSTIN CASANOVA, entre otros.\nPara el año 2019 decidí centrarme más en mi Canal, creando contenido relacionado al Fútbol Argentino y Fútbol Internacional, en el que intente informar a esta comunidad de lo más destacado del deporte.\nGracias al trabajo en conjunto, pudimos llegar a cubrir varios eventos de Copa Argentina y la Despedida de Rodrigo Mora, ademas de ser invitado por Fox Sport para cubrir los premios de la Superliga Argentina, en donde pudimos darnos el gusto de charlar con Esteban Andrada, Bebelo Reynoso, Hernan Crespo, Matias Zaracho, entre otras figuras.\nEN FIN eso es un poco de mi vida resumidamente,  gracias por hacerme el aguante y unirse a esta buena comunidad!",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/d_iS5hlK8xw/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/d_iS5hlK8xw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/d_iS5hlK8xw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/d_iS5hlK8xw/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/d_iS5hlK8xw/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "LasCronicasDeJoaqo",
                "tags": [
                  "noticias futbol",
                  "noticias futbol de argentina",
                  "noticias argentina",
                  "futbol argentino",
                  "river plate",
                  "boca juniors",
                  "noticias river",
                  "noticias boca",
                  "lionel messi",
                  "messi barcelona",
                  "JULIAN ALVAREZ",
                  "MANCHESTER CITY",
                  "CITY",
                  "ESEQUIEL BARCO",
                  "FACUNDO FARIAS",
                  "FARIAS COLON",
                  "BARCO RIVER",
                  "ATLANTA UNITED",
                  "JULIAN ALVAREZ SE VA",
                  "GUARDIOLA",
                  "ALVAREZ CITY",
                  "VALENTIN CASTELLANOS",
                  "PIPA BENEDETTO",
                  "JUANFER QUINTERO",
                  "BENEDETTO BOCA",
                  "NUEVO JUGADOR",
                  "JUGADOR DE RIVER",
                  "JUGADOR BOCA",
                  "REFUERZO",
                  "RUMORES",
                  "GOLES"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "defaultLanguage": "es",
                "localized": {
                  "title": "¡JULIÁN ÁLVAREZ se va a CITY por esta FORTUNA!+ RIVER compra BARCO y FARÍAS+ BOCA presentó BENEDETTO",
                  "description": "Descarga OneFootball: https://tinyurl.com/2takk26d\nJulián Álvarez se va al Manchester City por una fortuna de 27 millones y medio de dólares por pedido de Pep Guardiola, River Plate rompe el mercado con sus nuevos refuerzos apuntados Esequiel Barco, ex independiente, Facundo Farias de Colon y Valentín Castellanos, Boca Juniors presentó al Pipa Benedetto en conferencia de prensa dándole la numero 9, Dibu Martínez renovó su contrato con Aston Villa, Paulo Dybala se acerca al Inter dejando la Juventus, Haaland al Real Madrid, el palito del Psg al Real Madrid, los sorteos de copa del Rey, la tristeza de Xavi por quedar afuera, Oscar se acerca al Barcelona, Maxi Meza convocado a la Selección Argentina, Talleres quiere a Pol Fernández, Licha Lopez se fue de Boca al Tijuana de México, San Lorenzo busca repatriar a Nicolás Blandi, lo mejor del Mercado de pases con los últimos refuerzos y rumores, el polémico ranking de los mejores clubes del mundo, lo mejor de #Messi #Boca #River la #LigaFutbolProfesional #TorneoSocios y #CopaLibertadores #CopaSudamericana, los más destacados movimientos, rumores, refuerzos y fichajes en este Mercado de Pases, las mejores curiosidades del Fútbol, y mucho más!\n\n00:00 Intro\n01:13 Jornada Europea\n04:02 Jornada Americana\n04:53 Jornada Argentina\n08:17 Bombas en River\n12:29 Presentación de Benedetto\n\nESPERO que les GUSTE este vídeo! Y no te olvides de suscribirte!\n\n▶️ SUSCRIBITE a esta GRAN Comunidad: https://bit.ly/32IsmDs\n▶️SEGUIME en MI INSTAGRAM: http://www.instagram.com/joaqoop\n\n-------------------------------------------\nUN POCO DE MI:\n\nMi nombre es Joaquin Pastana, pero me gusta que me digan Joaqo y soy un youtuber (o eso intento) de la provincia de Salta, Argentina. Tengo 24 años. Me gusta mucho el periodismo, no estudie nunca la carrera, pero me siento muchas veces como uno. Empecé mi canal a mediados del 2015 y desde ahí no paré. A fines del mismo año, grabé varios comerciales para la empresa DORITOS (si DORITOS!!!) y conoci a varios YOUTUBERS ARGENTINOS. \nEn el año 2016 comencé a trabajar con el DIARIO LA GACETA, un diario muy conocido en el NORTE ARGENTINO hasta fines del 2017.\nY en 2018 estuve produciendo programas y de conductor de un programa de TELEFÉ en TELIVISIÓN.\nMientras tanto seguí subiendo videos y encontrandome más en la plataforma. \nLogré hacer videos con varias personas que admiraba como DUKI, YSY A, PAULO LONDRA, LIT KILLAH, DTOKE, ABEL PINTOS, CHAPU MARTINEZ, EL BANANERO, ECKO, AGUSTIN CASANOVA, entre otros.\nPara el año 2019 decidí centrarme más en mi Canal, creando contenido relacionado al Fútbol Argentino y Fútbol Internacional, en el que intente informar a esta comunidad de lo más destacado del deporte.\nGracias al trabajo en conjunto, pudimos llegar a cubrir varios eventos de Copa Argentina y la Despedida de Rodrigo Mora, ademas de ser invitado por Fox Sport para cubrir los premios de la Superliga Argentina, en donde pudimos darnos el gusto de charlar con Esteban Andrada, Bebelo Reynoso, Hernan Crespo, Matias Zaracho, entre otras figuras.\nEN FIN eso es un poco de mi vida resumidamente,  gracias por hacerme el aguante y unirse a esta buena comunidad!"
                },
                "defaultAudioLanguage": "es"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "xgv1ERw74Sm_E7Wro55gG0dHwF8",
              "id": "c8O01OhpdhU",
              "snippet": {
                "publishedAt": "2021-12-31T19:12:26Z",
                "channelId": "UC7i94bTxxuZBrllSxXHyFxg",
                "title": "The St. Louis Blues lookalike cam is too much 😅 | #shorts",
                "description": "The St. Louis Blues lookalike cam is too much 😅\n\n✔️ Subscribe to ESPN+ https://plus.espn.com/\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔️Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️Watch ESPN on YouTube TV: http://es.pn/YouTubeTV",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/c8O01OhpdhU/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/c8O01OhpdhU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/c8O01OhpdhU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "NHL on ESPN",
                "tags": [
                  "nhl",
                  "nhl espn",
                  "nhl on espn",
                  "espn nhl",
                  "#nhlonespn",
                  "nhl highlights",
                  "hockey",
                  "st louis blue",
                  "st. louis blues",
                  "st. louis",
                  "columbus blue jackets",
                  "national hockey league",
                  "look alike cam",
                  "kiss cam",
                  "look alike",
                  "espn",
                  "nhl on espn theme",
                  "nhl news",
                  "#nhl",
                  "#espn",
                  "espn the point",
                  "the point espn",
                  "sports",
                  "nhl 2021"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "The St. Louis Blues lookalike cam is too much 😅 | #shorts",
                  "description": "The St. Louis Blues lookalike cam is too much 😅\n\n✔️ Subscribe to ESPN+ https://plus.espn.com/\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔️Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️Watch ESPN on YouTube TV: http://es.pn/YouTubeTV"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "R-Ruu2ac9v7rxtveOOrZL1o5aAA",
              "id": "Zn7ZeuMHCsA",
              "snippet": {
                "publishedAt": "2022-01-22T02:19:01Z",
                "channelId": "UC6FWi94fxOC1LCwx61-xXcw",
                "title": "Boca vs U de Chile (3-2) Resumen Completo - Torneo Internacional de Verano",
                "description": "Boca le Ganó a la U de Chile por 3-2 y acá te traigo el resumen completo \nLogo del Vídeo: @hansen_design",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/Zn7ZeuMHCsA/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/Zn7ZeuMHCsA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/Zn7ZeuMHCsA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/Zn7ZeuMHCsA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  }
                },
                "channelTitle": "SANGRE AZUL Y ORO",
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "Boca vs U de Chile (3-2) Resumen Completo - Torneo Internacional de Verano",
                  "description": "Boca le Ganó a la U de Chile por 3-2 y acá te traigo el resumen completo \nLogo del Vídeo: @hansen_design"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "u4fP5E7eVwu8OGncFo_K5lSmGMU",
              "id": "nqpfVtlBXtY",
              "snippet": {
                "publishedAt": "2022-01-19T14:17:13Z",
                "channelId": "UCeJQ-3Bs7AAN5m8HUbHG4-g",
                "title": "Rating strangers football fail’s ⚽️ #shorts",
                "description": "",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/nqpfVtlBXtY/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/nqpfVtlBXtY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/nqpfVtlBXtY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Tuvok12",
                "categoryId": "23",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "Rating strangers football fail’s ⚽️ #shorts",
                  "description": ""
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "0uA8K621ShLj0wzUayAG6CL1rVo",
              "id": "1O0i0jqbQJs",
              "snippet": {
                "publishedAt": "2022-01-21T19:20:58Z",
                "channelId": "UCI5RY8G0ar-hLIaUJvx58Lw",
                "title": "🗣️ Presentación de Pipa Benedetto, nuevo refuerzo de Boca 🔵🟡",
                "description": "El delantero fue anunciado oficialmente en el “Xeneize”. Es su segundo ciclo en el club luego de su primer paso entre 2016 y 2019. ¿Es el mejor refuerzo del mercado de pases del fútbol argentino?\n\n#TNTSports\nTodo es fútbol, vivilo a la manera de TNT Sports  👉 Suscribite en https://bit.ly/34gs8Hr\n \n¡Suscribite a nuestro Canal! https://goo.gl/LnMJaL\nVisitá nuestro sitio: http://www.tntsports.com.ar\nTwitter: https://twitter.com/TNTSportsAR\nInstagram: https://www.instagram.com/TNTSportsAR/\nFacebook: https://www.facebook.com/TNTSportsAR/\nTikTok: https://www.tiktok.com/@tntsportsar\nTwitch: https://www.twitch.tv/tntsportsar\nTikTok: https://www.tiktok.com/@tntsportsar\nTwitch: https://www.twitch.tv/tntsportsar",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/1O0i0jqbQJs/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/1O0i0jqbQJs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/1O0i0jqbQJs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/1O0i0jqbQJs/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/1O0i0jqbQJs/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "TNT Sports Argentina",
                "tags": [
                  "TNT Sports",
                  "#TNTSports",
                  "boca",
                  "boca juniors",
                  "el xeneize",
                  "boca 2022",
                  "refuerzos boca",
                  "pretemporada boca",
                  "boca hoy",
                  "benedetto",
                  "dario benedetto",
                  "el pipa benedetto",
                  "declaraciones de benedetto",
                  "conferencia de benedetto",
                  "el pipa benedetto vuelve a boca",
                  "dario benedetto vuelve a boca",
                  "benedetto boca 2022",
                  "boca benedetto",
                  "benedetto hablo con riquelme para volver a boca",
                  "benedetto refuerzo de boca 2022",
                  "el pipa benedetto goleador de boca",
                  "boca refuerzos 2022",
                  "Conferencia de Benedetto"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "🗣️ Presentación de Pipa Benedetto, nuevo refuerzo de Boca 🔵🟡",
                  "description": "El delantero fue anunciado oficialmente en el “Xeneize”. Es su segundo ciclo en el club luego de su primer paso entre 2016 y 2019. ¿Es el mejor refuerzo del mercado de pases del fútbol argentino?\n\n#TNTSports\nTodo es fútbol, vivilo a la manera de TNT Sports  👉 Suscribite en https://bit.ly/34gs8Hr\n \n¡Suscribite a nuestro Canal! https://goo.gl/LnMJaL\nVisitá nuestro sitio: http://www.tntsports.com.ar\nTwitter: https://twitter.com/TNTSportsAR\nInstagram: https://www.instagram.com/TNTSportsAR/\nFacebook: https://www.facebook.com/TNTSportsAR/\nTikTok: https://www.tiktok.com/@tntsportsar\nTwitch: https://www.twitch.tv/tntsportsar\nTikTok: https://www.tiktok.com/@tntsportsar\nTwitch: https://www.twitch.tv/tntsportsar"
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "yepyWRVQYzoKGCHHlMJlIQUgAiY",
              "id": "uKKOP3I0_es",
              "snippet": {
                "publishedAt": "2022-01-21T16:05:23Z",
                "channelId": "UCd9Kef1ZgvV9VR3yf4T6jgQ",
                "title": "ASI JUEGA ESEQUIEL BARCO / NUEVO REFUERZO de RIVER",
                "description": "Gracias nuevamente a @Esar  por tremendo video de como juega el nuevo refuerzo de River \"Esequiel Barco\".\n\nDALE LIKE,COMPARTILO Y SUSCRIBITE QUE ES GRATIS \n\nDONACIONES PARA EL CANAL\nPaypal: https://www.paypal.me/ezequielrp14​​​...\nMercado Pago: https://ceneka.net/EzequielRP​​​​​​\n\nINSTAGRAM: https://www.instagram.com/ezequielrp14/",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/uKKOP3I0_es/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/uKKOP3I0_es/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/uKKOP3I0_es/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/uKKOP3I0_es/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/uKKOP3I0_es/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Ezequiel RP",
                "tags": [
                  "ezequiel barco",
                  "ezequiel barco a river"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "ASI JUEGA ESEQUIEL BARCO / NUEVO REFUERZO de RIVER",
                  "description": "Gracias nuevamente a @Esar  por tremendo video de como juega el nuevo refuerzo de River \"Esequiel Barco\".\n\nDALE LIKE,COMPARTILO Y SUSCRIBITE QUE ES GRATIS \n\nDONACIONES PARA EL CANAL\nPaypal: https://www.paypal.me/ezequielrp14​​​...\nMercado Pago: https://ceneka.net/EzequielRP​​​​​​\n\nINSTAGRAM: https://www.instagram.com/ezequielrp14/"
                },
                "defaultAudioLanguage": "es"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "kU2TVg6UeJa8d7_CykVlvAbws1Q",
              "id": "ZWevcrYY63U",
              "snippet": {
                "publishedAt": "2022-01-20T16:00:17Z",
                "channelId": "UCtFanqiLodEW0ZQEshO1gyw",
                "title": "BENEDETTO LLEGÓ Y FIRMA con BOCA! ► Boca Juniors ABROCHÓ a POL FERNANDEZ ► Refuerzo SORPRESA a BOCA?",
                "description": "DESCARGA GRATIS LA APP DE ONEFOOTBALL: https://tinyurl.com/3b5n6m29\nBenedetto llegó y firma con Boca! + Boca Juniors abrochó a Pol Fernandez como nuevo refuerzo! + El refuerzo sorpresa que tendria en carpeta Boca ante la posible baja de Angel Romero! + La decision que tomó Boca con un refuerzo + Atencion Boca: Salvio empezó a escuchar ofertas para irse, Boca prepara una oferta + Wanchope Abila dió el OK para irse de Boca y llegar a un grande de Argentina + Pastore y su llegada a Boca: habló el jugador acerca de los rumores + Battaglia recuperó a 2 jugadores y empieza a definir al 11 titular ante la U de Chile y muchas noticias más del Mundo Boca!\n\n\n▶️ HACETE MIEMBRO DEL CANAL!  https://www.youtube.com/channel/UCtFanqiLodEW0ZQEshO1gyw/join\n▶️ SUSCRIBITE Y ACTIVÁ LA CAMPANITA!\n▶️ DALE LIKE Y COMENTÁ!\n▶️ COMPARTILO CON TUS AMIGOS!",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/ZWevcrYY63U/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/ZWevcrYY63U/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/ZWevcrYY63U/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/ZWevcrYY63U/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/ZWevcrYY63U/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "MundoBocaTV",
                "tags": [
                  "boca",
                  "boca juniors",
                  "boca hoy",
                  "boca noticias"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "BENEDETTO LLEGÓ Y FIRMA con BOCA! ► Boca Juniors ABROCHÓ a POL FERNANDEZ ► Refuerzo SORPRESA a BOCA?",
                  "description": "DESCARGA GRATIS LA APP DE ONEFOOTBALL: https://tinyurl.com/3b5n6m29\nBenedetto llegó y firma con Boca! + Boca Juniors abrochó a Pol Fernandez como nuevo refuerzo! + El refuerzo sorpresa que tendria en carpeta Boca ante la posible baja de Angel Romero! + La decision que tomó Boca con un refuerzo + Atencion Boca: Salvio empezó a escuchar ofertas para irse, Boca prepara una oferta + Wanchope Abila dió el OK para irse de Boca y llegar a un grande de Argentina + Pastore y su llegada a Boca: habló el jugador acerca de los rumores + Battaglia recuperó a 2 jugadores y empieza a definir al 11 titular ante la U de Chile y muchas noticias más del Mundo Boca!\n\n\n▶️ HACETE MIEMBRO DEL CANAL!  https://www.youtube.com/channel/UCtFanqiLodEW0ZQEshO1gyw/join\n▶️ SUSCRIBITE Y ACTIVÁ LA CAMPANITA!\n▶️ DALE LIKE Y COMENTÁ!\n▶️ COMPARTILO CON TUS AMIGOS!"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "XL0rKwJt_0blA2U-APTUMnpO1Kk",
              "id": "VpNWpWC6mb8",
              "snippet": {
                "publishedAt": "2022-01-22T02:14:29Z",
                "channelId": "UCnElnqbzsIYI8d6P_z7SLvA",
                "title": "Previa Boca Jrs Vs U de Chile Alineaciones Confirmadas | 2022",
                "description": "Suscribete Para Mas Contenido Deportivo",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/VpNWpWC6mb8/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/VpNWpWC6mb8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/VpNWpWC6mb8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/VpNWpWC6mb8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/VpNWpWC6mb8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "DR LOBO",
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "defaultLanguage": "es-419",
                "localized": {
                  "title": "Previa Boca Jrs Vs U de Chile Alineaciones Confirmadas | 2022",
                  "description": "Suscribete Para Mas Contenido Deportivo"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "JJo4lRfBN8qWaFNS2ydyVosZX2c",
              "id": "ogtUmC33l-I",
              "snippet": {
                "publishedAt": "2022-01-17T19:46:50Z",
                "channelId": "UCpcTrCXblq78GZrTUTLWeBw",
                "title": "The Best FIFA Football Awards 2021 | Full Show",
                "description": "Show starts: 00:00 \nTHE Best FIFA Special Award - Christine Sinclair: 05:13\nThe Best FIFA Women’s Goalkeeper Award - Christiane Endler: 14:35\nThe Best FIFA Men’s Goalkeeper Award - Edouard Mendy: 19:14\nThe FIFA Puskas Award – Erik Lamela: 24:18\nGerd Muller Tribute: 29:45  \nThe FIFA Fair Play Award - Denmark: 32:05\nThe Best FIFA Women’s Coach Award - Emma Hayes: 37:44\nThe Best FIFA Men’s Coach Award – Thomas Tuchel: 42:48\nThe FIFA Fan Award – Denmark & Finland fans: 48:58\nFIFA FIFPRO Women’s World11: 56:45\nFIFA FIFPRO Men’s World11: 1:03:40\nThe Best FIFA Women’s Player Award - Alexia Putellas: 1:10:03\nThe Best FIFA Men’s Player Award – Robert Lewandowski: 1:15:34\nThe Best FIFA Special Award – Cristiano Ronaldo: 1:19:44\nOutro: 1:24:55\n\nThe Best FIFA Football Awards™ 2021 ceremony, held as a virtual TV show from the Home of FIFA in Zurich, crowned two household names, Alexia Putellas and Robert Lewandowski, as the outstanding players in women’s and men’s football respectively.\n\nPoland and FC Bayern München striker Lewandowski was recognised as The Best FIFA Men’s Player for the second year in succession. For her part, Spain midfielder Putellas, who had made The Best FIFA Women’s Player shortlist for the first time, capped her exploits with FC Barcelona and the Spanish national team by winning the prestigious award.  \n\nChelsea FC Women manager Emma Hayes was voted The Best FIFA Women’s Coach for the first time in her career, a feat that was matched by her Chelsea FC counterpart, Thomas Tuchel, who topped the poll for The Best FIFA Men’s Coach. \n\nSenegal shot-stopper Édouard Mendy made it a hat-trick for the London club by being chosen as The Best FIFA Men’s Goalkeeper, becoming the first African to win the accolade, while Chile and Olympique Lyonnais’ Christiane Endler was named The Best FIFA Women’s Goalkeeper on the strength of her sensational displays.\n\nThe Best FIFA Football Awards ceremony also recognised two outstanding performances on the international stage, where landmark goalscoring records have been broken. Christine Sinclair, with 188 goals in 308 caps for Canada, received The Best FIFA Special Award for women’s football, and Cristiano Ronaldo, with 115 goals in 184 appearances for Portugal, received The Best FIFA Special Award for men’s football. \n\nFIFA President Gianni Infantino presented the awards to Christine Sinclair (virtual) and Cristiano Ronaldo (in person) during The Best FIFA Football Awards 2021 ceremony at the Home of FIFA in Zurich.\n\nMore on #TheBest FIFA Football Awards:\nhttps://www.fifa.com/the-best-fifa-football-awards/ \n\nFollow the FIFA Football Awards on Facebook:\nhttps://www.facebook.com/FIFAFootballAwards\n\nFIFA Puskas Award 2021 | The Nominees:\nhttps://www.youtube.com/playlist?list=PLCGIzmTE4d0hnsUdaYxWH_PkkO2Frbvec",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/ogtUmC33l-I/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/ogtUmC33l-I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/ogtUmC33l-I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/ogtUmC33l-I/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/ogtUmC33l-I/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "FIFA",
                "tags": [
                  "Football",
                  "FIFA",
                  "official",
                  "Soccer",
                  "Futbol",
                  "Futebol",
                  "Fußball",
                  "Fussball",
                  "Calcio",
                  "Voetbal",
                  "كرة فوتبول",
                  "गोल",
                  "वर्ल्ड कप",
                  "स्किल्स",
                  "फुटबॉल",
                  "Gol",
                  "Piala Dunia",
                  "Mendribel Bola",
                  "Keterampilan",
                  "ได้ประตู",
                  "ชิงแชมป์โลก",
                  "ฟุตบอล",
                  "ทักษะ",
                  "The Best FIFA Football Awards",
                  "The Best",
                  "FIFA Football Awards",
                  "Live Show",
                  "The Best 2021",
                  "The Best 2022",
                  "Messi",
                  "Ronaldo",
                  "Robery Lewandowski",
                  "Mo Salah",
                  "watch fifa football awards",
                  "fifa football awards live show",
                  "fifatv",
                  "fifatv live",
                  "puskas",
                  "puskas goals",
                  "puskas award"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                  "title": "The Best FIFA Football Awards 2021 | Full Show",
                  "description": "Show starts: 00:00 \nTHE Best FIFA Special Award - Christine Sinclair: 05:13\nThe Best FIFA Women’s Goalkeeper Award - Christiane Endler: 14:35\nThe Best FIFA Men’s Goalkeeper Award - Edouard Mendy: 19:14\nThe FIFA Puskas Award – Erik Lamela: 24:18\nGerd Muller Tribute: 29:45  \nThe FIFA Fair Play Award - Denmark: 32:05\nThe Best FIFA Women’s Coach Award - Emma Hayes: 37:44\nThe Best FIFA Men’s Coach Award – Thomas Tuchel: 42:48\nThe FIFA Fan Award – Denmark & Finland fans: 48:58\nFIFA FIFPRO Women’s World11: 56:45\nFIFA FIFPRO Men’s World11: 1:03:40\nThe Best FIFA Women’s Player Award - Alexia Putellas: 1:10:03\nThe Best FIFA Men’s Player Award – Robert Lewandowski: 1:15:34\nThe Best FIFA Special Award – Cristiano Ronaldo: 1:19:44\nOutro: 1:24:55\n\nThe Best FIFA Football Awards™ 2021 ceremony, held as a virtual TV show from the Home of FIFA in Zurich, crowned two household names, Alexia Putellas and Robert Lewandowski, as the outstanding players in women’s and men’s football respectively.\n\nPoland and FC Bayern München striker Lewandowski was recognised as The Best FIFA Men’s Player for the second year in succession. For her part, Spain midfielder Putellas, who had made The Best FIFA Women’s Player shortlist for the first time, capped her exploits with FC Barcelona and the Spanish national team by winning the prestigious award.  \n\nChelsea FC Women manager Emma Hayes was voted The Best FIFA Women’s Coach for the first time in her career, a feat that was matched by her Chelsea FC counterpart, Thomas Tuchel, who topped the poll for The Best FIFA Men’s Coach. \n\nSenegal shot-stopper Édouard Mendy made it a hat-trick for the London club by being chosen as The Best FIFA Men’s Goalkeeper, becoming the first African to win the accolade, while Chile and Olympique Lyonnais’ Christiane Endler was named The Best FIFA Women’s Goalkeeper on the strength of her sensational displays.\n\nThe Best FIFA Football Awards ceremony also recognised two outstanding performances on the international stage, where landmark goalscoring records have been broken. Christine Sinclair, with 188 goals in 308 caps for Canada, received The Best FIFA Special Award for women’s football, and Cristiano Ronaldo, with 115 goals in 184 appearances for Portugal, received The Best FIFA Special Award for men’s football. \n\nFIFA President Gianni Infantino presented the awards to Christine Sinclair (virtual) and Cristiano Ronaldo (in person) during The Best FIFA Football Awards 2021 ceremony at the Home of FIFA in Zurich.\n\nMore on #TheBest FIFA Football Awards:\nhttps://www.fifa.com/the-best-fifa-football-awards/ \n\nFollow the FIFA Football Awards on Facebook:\nhttps://www.facebook.com/FIFAFootballAwards\n\nFIFA Puskas Award 2021 | The Nominees:\nhttps://www.youtube.com/playlist?list=PLCGIzmTE4d0hnsUdaYxWH_PkkO2Frbvec"
                },
                "defaultAudioLanguage": "en"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "juIAt3eGwdK-iUMuIZ5SqYoLdP8",
              "id": "MIvUv_H6HHQ",
              "snippet": {
                "publishedAt": "2022-01-15T18:32:33Z",
                "channelId": "UCSlpl1nxJMHecU5AETN2jOA",
                "title": "Españoles REACCIONAN a ARGENTINA 🇦🇷 MACHACANDO a ESPAÑA 🇪🇸",
                "description": "Para ser de la banda de SN SUSCRIBIROS 👉 https://cutt.ly/WX8s5e\n\n \nhttps://www.snchallenge.net/\nINSTAGRAM: https://cutt.ly/uX8dkj\nFACEBOOK: https://www.facebook.com/SNchallenge\n---------------------------------------------------\nCONTACTO COMERCIAL: SN.CHALLENGE@HOTMAIL.COM\n----------------------------------------------------\nCORREO POSTAL:\nNuria Calvo\nApartado de correos 98\n28522 Rivas Vaciamadrid (Madrid) ESPAÑA\n\nQue camara utilizo: http://amzn.to/2n9IXgz\nTripode:http://amzn.to/2n9soRZ\nOrdenador con el que editamos: http://amzn.to/2nadZ7X",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/MIvUv_H6HHQ/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/MIvUv_H6HHQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/MIvUv_H6HHQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/MIvUv_H6HHQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/MIvUv_H6HHQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "SN Challenge",
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "Españoles REACCIONAN a ARGENTINA 🇦🇷 MACHACANDO a ESPAÑA 🇪🇸",
                  "description": "Para ser de la banda de SN SUSCRIBIROS 👉 https://cutt.ly/WX8s5e\n\n \nhttps://www.snchallenge.net/\nINSTAGRAM: https://cutt.ly/uX8dkj\nFACEBOOK: https://www.facebook.com/SNchallenge\n---------------------------------------------------\nCONTACTO COMERCIAL: SN.CHALLENGE@HOTMAIL.COM\n----------------------------------------------------\nCORREO POSTAL:\nNuria Calvo\nApartado de correos 98\n28522 Rivas Vaciamadrid (Madrid) ESPAÑA\n\nQue camara utilizo: http://amzn.to/2n9IXgz\nTripode:http://amzn.to/2n9soRZ\nOrdenador con el que editamos: http://amzn.to/2nadZ7X"
                },
                "defaultAudioLanguage": "es"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "Z34yNLB2sFwQcLllgBIO687Z-nc",
              "id": "_ov65lo7o54",
              "snippet": {
                "publishedAt": "2022-01-21T23:05:43Z",
                "channelId": "UCRtB_RAtKH72CgVAKHFgdIw",
                "title": "¡La VUELTA del PIPA! 9️⃣ El VESTUARIO, la BOMBONERA y la PRESENTACIÓN... El día de BENEDETTO en BOCA",
                "description": "¿Seguís manija? Mirá toda la intimidad y lo que todavía no se mostró del regreso de PIPA BENEDETTO a BOCA JUNIORS... en la lente exclusiva de #ElCanalDeBoca. ¡Dale play!\n\nSuscribite al canal oficial de Boca en Youtube en http://bit.ly/2mKwq6z\n\n¡Y seguí a Boca en todas sus plataformas oficiales!\nTwitter: https://www.twitter.com/BocaJrsOficial​​​\nFacebook: https://www.facebook.com/BocaJuniors​​​\nInstagram: https://www.instagram.com/BocaJrsOficial​\nTik Tok: https://www.tiktok.com/@BocaJuniors​​​\nSitio web:  https://www.BocaJuniors.com.ar",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/_ov65lo7o54/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/_ov65lo7o54/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/_ov65lo7o54/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/_ov65lo7o54/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/_ov65lo7o54/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Club Atlético Boca Juniors",
                "tags": [
                  "Boca",
                  "Boca Juniors",
                  "Boca Jrs.",
                  "Club Atlético Boca Juniors",
                  "CABJ",
                  "El canal de Boca",
                  "Boca TV",
                  "Boca Juniors oficial",
                  "Boca Jrs. Oficial",
                  "El canal oficial de Boca",
                  "pipa benedetto",
                  "boca pipa",
                  "pipa",
                  "benedetto",
                  "dario benedetto",
                  "la vuelta del pipa",
                  "volvio benedetto boca",
                  "refuerzos boca",
                  "boca mercado de pases",
                  "presentacion benedetto",
                  "presentacion benedetto boca",
                  "boca 2022",
                  "benedetto conferencia",
                  "benedetto vestuario"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "defaultLanguage": "es-419",
                "localized": {
                  "title": "¡La VUELTA del PIPA! 9️⃣ El VESTUARIO, la BOMBONERA y la PRESENTACIÓN... El día de BENEDETTO en BOCA",
                  "description": "¿Seguís manija? Mirá toda la intimidad y lo que todavía no se mostró del regreso de PIPA BENEDETTO a BOCA JUNIORS... en la lente exclusiva de #ElCanalDeBoca. ¡Dale play!\n\nSuscribite al canal oficial de Boca en Youtube en http://bit.ly/2mKwq6z\n\n¡Y seguí a Boca en todas sus plataformas oficiales!\nTwitter: https://www.twitter.com/BocaJrsOficial​​​\nFacebook: https://www.facebook.com/BocaJuniors​​​\nInstagram: https://www.instagram.com/BocaJrsOficial​\nTik Tok: https://www.tiktok.com/@BocaJuniors​​​\nSitio web:  https://www.BocaJuniors.com.ar"
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "bXFYGW1EtNpPOgdjSOyVGfDzhgg",
              "id": "PNkmt2Y8umM",
              "snippet": {
                "publishedAt": "2022-01-18T22:00:15Z",
                "channelId": "UC8zczApNuos0CUUC8kX0RJQ",
                "title": "¿CUÁNTO SABE DE FÚTBOL ANGELA LERENA?",
                "description": "La periodista deportiva participó de este segmento en donde el participante se somete a un difícil cuestionario de preguntas para determinar cuanto sabe de futbol.\n.\nSUSCRIBITE y dale ME GUSTA si te gustó el video! COMENTÁ que otra persona querés que lo haga.\n.\nSEGUINOS en Instagram:\n→https://www.instagram.com/ezzequiel/\n→ https://instagram.com/angela.lerena/",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/PNkmt2Y8umM/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/PNkmt2Y8umM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/PNkmt2Y8umM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/PNkmt2Y8umM/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/PNkmt2Y8umM/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "EZZEQUIEL",
                "tags": [
                  "angela lerena",
                  "cuanto sabe de futbol",
                  "test de futbol",
                  "preguntas de futbol",
                  "quiz de futbol",
                  "cuestionario de futbol"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "¿CUÁNTO SABE DE FÚTBOL ANGELA LERENA?",
                  "description": "La periodista deportiva participó de este segmento en donde el participante se somete a un difícil cuestionario de preguntas para determinar cuanto sabe de futbol.\n.\nSUSCRIBITE y dale ME GUSTA si te gustó el video! COMENTÁ que otra persona querés que lo haga.\n.\nSEGUINOS en Instagram:\n→https://www.instagram.com/ezzequiel/\n→ https://instagram.com/angela.lerena/"
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "QaxIHNQE8fahm9_c-7d5ERkDvV8",
              "id": "SRk4zo-jarA",
              "snippet": {
                "publishedAt": "2022-01-23T01:22:25Z",
                "channelId": "UC3M7efaO9uxT0LTl3BSKvGg",
                "title": "Transmision en Vivo del Hipodromo de San Isidro",
                "description": "¡Bienvenidos a otra jornada en el HSI! 🐎 🏆🍀\n¿Sabías que podes hacer tu jugada por #TeleTurf?📲\n👉Hacé click y registrate acá: https://bit.ly/3hSb2nH\n👉Suscribite a YouTube acá: https://bit.ly/SuscripciónYTHSI\n👉Más información ingresando acá: https://bit.ly/infoHSI",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/SRk4zo-jarA/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/SRk4zo-jarA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/SRk4zo-jarA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/SRk4zo-jarA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/SRk4zo-jarA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Hipódromo San Isidro",
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "Transmision en Vivo del Hipodromo de San Isidro",
                  "description": "¡Bienvenidos a otra jornada en el HSI! 🐎 🏆🍀\n¿Sabías que podes hacer tu jugada por #TeleTurf?📲\n👉Hacé click y registrate acá: https://bit.ly/3hSb2nH\n👉Suscribite a YouTube acá: https://bit.ly/SuscripciónYTHSI\n👉Más información ingresando acá: https://bit.ly/infoHSI"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "Tmv-RWe-BaTGLSBxex4EAbjhDAE",
              "id": "D7ycKOrazaI",
              "snippet": {
                "publishedAt": "2022-01-12T22:24:24Z",
                "channelId": "UCQBxzdEPXjy05MtpfbdtMxQ",
                "title": "RESUMEN | FC Barcelona 2-3 Real Madrid CF | Supercopa de España 2022 | Primera semifinal",
                "description": "⚽ 0-1 | Vinicius Jr (25').\n⚽ 1-1 | L. De Jong (41').\n⚽ 1-2 | Benzema (72').\n⚽ 2-2 | Ansu Fati (83').\n⚽ 3-2 | Valverde (98').\n\nUn Clásico soberbio coloca la vitola de finalista al Real Madrid. \n\nEl conjunto blanco peleará por su duodécima Supercopa de España en el King Fahd de Riyadh. \n\n-SUSCRÍBETE al canal de la RFEF ⚽\nhttp://bit.ly/RealFederacionEspañolaFutbol\n\nVISITA nuestra página web oficial \n👉🏻 https://www.rfef.es/\n\nSÍGUENOS en nuestras redes sociales📲\n- FACEBOOK: https://www.facebook.com/RFEF/\n- TWITTER: https://twitter.com/rfef\n- INSTAGRAM: https://www.instagram.com/somosrfef/",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/D7ycKOrazaI/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/D7ycKOrazaI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/D7ycKOrazaI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/D7ycKOrazaI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/D7ycKOrazaI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Real Federación Española Fútbol",
                "tags": [
                  "rfef",
                  "real federación española fútbol",
                  "fútbol español",
                  "football",
                  "fútbol",
                  "superSupercopa",
                  "Riyadh",
                  "Riad",
                  "Arabia Saudi",
                  "Real Madrid",
                  "FC Barcelona",
                  "Benzema",
                  "Ansu Fati",
                  "Valverde",
                  "De Jong",
                  "King Fahd",
                  "Vinicius"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "RESUMEN | FC Barcelona 2-3 Real Madrid CF | Supercopa de España 2022 | Primera semifinal",
                  "description": "⚽ 0-1 | Vinicius Jr (25').\n⚽ 1-1 | L. De Jong (41').\n⚽ 1-2 | Benzema (72').\n⚽ 2-2 | Ansu Fati (83').\n⚽ 3-2 | Valverde (98').\n\nUn Clásico soberbio coloca la vitola de finalista al Real Madrid. \n\nEl conjunto blanco peleará por su duodécima Supercopa de España en el King Fahd de Riyadh. \n\n-SUSCRÍBETE al canal de la RFEF ⚽\nhttp://bit.ly/RealFederacionEspañolaFutbol\n\nVISITA nuestra página web oficial \n👉🏻 https://www.rfef.es/\n\nSÍGUENOS en nuestras redes sociales📲\n- FACEBOOK: https://www.facebook.com/RFEF/\n- TWITTER: https://twitter.com/rfef\n- INSTAGRAM: https://www.instagram.com/somosrfef/"
                },
                "defaultAudioLanguage": "es"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "sZrGOiCuRXz8XKaKu5oQ8AZvMMw",
              "id": "xTu5SKoPaL8",
              "snippet": {
                "publishedAt": "2022-01-22T05:45:13Z",
                "channelId": "UChjg411BTXq5PwgUj5yDBTw",
                "title": "Boca 3 U de Chile 2 - Reacciones de Hinchas de Boca y de River - Torneo de verano 2022",
                "description": "Entra y registrate a 1xBet aqui : http://1xbonus.site/mNQKPT\nCODIGO PROMOCIONAL : frankobonetto\n\nPodes donar por Mercado Pago aqui : https://ceneka.net/frankucho79\n*************************************************\nPodes Donar por Pay Pal - sin Obligacion solo para que el canal crezca ! aqui https://paypal.me/frankobonetto\n***************\nTwitch : https://www.twitch.tv/frankuchobonetto\n\nPrimero en Reacciones desde el hincha en You Tube - Desde el 2010 - mira el primer video https://www.youtube.com/watch?v=MNhRDKBePwM&t= \n\n*********************** \nMUSICA INTRO : QUE TE PASA SQUASH Y JUANJO CECCON \n\nFACEBOOK\nhttps://www.facebook.com/FrankuchoRiverPlate/\n\n***********************\nTWITTER\nhttps://twitter.com/FrankoBonetto\n\n*****************************************\nINSTAGRAM\nhttps://www.instagram.com/frankucho79/\n\n*****************************************\nBLOG\nhttp://frankuchovideos.blogspot.com.ar/\n\n****************************\nFRANKUCHO + DE 11 AÑOS EN YOUTUBE\n#reacciones #hinchas #frankucho",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/xTu5SKoPaL8/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/xTu5SKoPaL8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/xTu5SKoPaL8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "FRANKO BONETTO",
                "tags": [
                  "FAN",
                  "HINCHADA DE RIVER",
                  "ARGENTINA",
                  "VIDEOREACCIONES",
                  "REACCIONES",
                  "HINCHAS",
                  "FAMILIA",
                  "MATIAS BONETTO",
                  "GOL",
                  "frankucho",
                  "francucho",
                  "hincha de argentina",
                  "video reaccion",
                  "resumen",
                  "franco bonetto",
                  "aficionado",
                  "seleccion argentina",
                  "boca juniors",
                  "boca",
                  "reacciones hinchas de boca",
                  "reacciones hinchas de river",
                  "reaccion u de chile vs boca",
                  "reaccion boca vs u de chile",
                  "reaccuion chile",
                  "reaccion hinchas de boca",
                  "reaccion hinchas de river",
                  "u de chile",
                  "universidad de chile",
                  "frankucho bonetto",
                  "pia bonetto",
                  "3-2"
                ],
                "categoryId": "23",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "Boca 3 U de Chile 2 - Reacciones de Hinchas de Boca y de River - Torneo de verano 2022",
                  "description": "Entra y registrate a 1xBet aqui : http://1xbonus.site/mNQKPT\nCODIGO PROMOCIONAL : frankobonetto\n\nPodes donar por Mercado Pago aqui : https://ceneka.net/frankucho79\n*************************************************\nPodes Donar por Pay Pal - sin Obligacion solo para que el canal crezca ! aqui https://paypal.me/frankobonetto\n***************\nTwitch : https://www.twitch.tv/frankuchobonetto\n\nPrimero en Reacciones desde el hincha en You Tube - Desde el 2010 - mira el primer video https://www.youtube.com/watch?v=MNhRDKBePwM&t= \n\n*********************** \nMUSICA INTRO : QUE TE PASA SQUASH Y JUANJO CECCON \n\nFACEBOOK\nhttps://www.facebook.com/FrankuchoRiverPlate/\n\n***********************\nTWITTER\nhttps://twitter.com/FrankoBonetto\n\n*****************************************\nINSTAGRAM\nhttps://www.instagram.com/frankucho79/\n\n*****************************************\nBLOG\nhttp://frankuchovideos.blogspot.com.ar/\n\n****************************\nFRANKUCHO + DE 11 AÑOS EN YOUTUBE\n#reacciones #hinchas #frankucho"
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "CKytRaaDn1s7Ti8IFyfFA1jvEl8",
              "id": "NkpbgmFSU2U",
              "snippet": {
                "publishedAt": "2022-01-21T20:58:05Z",
                "channelId": "UCQ07Yja_DRbv6tV_c7HTMBw",
                "title": "💥 ¡RIVER ROMPE el MERCADO! | Así BOCA PRESENTÓ a BENEDETTO | ¡GALLARDO LLAMÓ a BARCO! ✅ + NOTICIAS",
                "description": "🔥 River rompió todo el Mercado de pases con llegadas y ventas; ¿Julian Alvarez al Manchester City? Además esta vez Gallardo llamó a Ezequiel Barco; mientras que en el lado de Boca llego el Pipa Benedetto y se fue un jugador... Todo esto y mas noticias ✅\n\nVideos que te van a INTERESAR 👇👇\n\n😲 BENEDETTO SORPRENDIÓ con su RESPUESTA👉https://bit.ly/3KuOqs9\n✅ OFICIAL: ¡BOCA tiene NUEVO REFUERZO!👉https://bit.ly/3rFbuvT\n🤣 GALLARDO \"HUMILLÓ\" a ARMANI 👉https://bit.ly/3ImRpAS\n¿Cuánto se GANA en YOUTUBE en 2021? 💲👉https://bit.ly/3pqjtx0\nMI CANAL SECUNDARIO 👉👉 https://bit.ly/2Y4XYXt\n\n✅Este canal se destacó SIEMPRE por haber sido el PRIMERO en subir esta clase de contenidos y siempre hacerla los mas SIMPLE posible para que el espectador pueda entender RAPIDO y SENCILLO las noticias del Futbol Argentino.  No solo de Boca y de River, si no de todos los equipos!. 🚀\n\nMe ayudarías muchísimo si me regalas un LIKE al video y si se SUSCRIBIS si no lo estas. Me motivas mucho para seguir subiendo este contenido 💞\nGracias :)\n\n➡️ Contacto para propuestas: Futbolactivo1@gmail.com",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/NkpbgmFSU2U/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/NkpbgmFSU2U/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/NkpbgmFSU2U/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/NkpbgmFSU2U/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/NkpbgmFSU2U/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Futbol Activo",
                "tags": [
                  "Boca noticias",
                  "River noticias",
                  "Boca hoy",
                  "River hoy",
                  "Noticias de Boca",
                  "Noticias de River",
                  "Noticias del Futbol Argentino",
                  "Noticias",
                  "Futbol",
                  "boca refuerzos",
                  "river refuerzos",
                  "mercado de pases",
                  "marcelo gallardo",
                  "juan roman riquelme",
                  "pipa benedetto",
                  "presentacion benedetto",
                  "esequiel barco",
                  "ezequel barco river",
                  "juanfer quintero",
                  "benedetto vuelve a boca",
                  "conferencia de prensa benedetto",
                  "julian alvarez",
                  "julian alvarez al manchester city",
                  "julian alvarez al city",
                  "boca",
                  "Castellanos river"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "💥 ¡RIVER ROMPE el MERCADO! | Así BOCA PRESENTÓ a BENEDETTO | ¡GALLARDO LLAMÓ a BARCO! ✅ + NOTICIAS",
                  "description": "🔥 River rompió todo el Mercado de pases con llegadas y ventas; ¿Julian Alvarez al Manchester City? Además esta vez Gallardo llamó a Ezequiel Barco; mientras que en el lado de Boca llego el Pipa Benedetto y se fue un jugador... Todo esto y mas noticias ✅\n\nVideos que te van a INTERESAR 👇👇\n\n😲 BENEDETTO SORPRENDIÓ con su RESPUESTA👉https://bit.ly/3KuOqs9\n✅ OFICIAL: ¡BOCA tiene NUEVO REFUERZO!👉https://bit.ly/3rFbuvT\n🤣 GALLARDO \"HUMILLÓ\" a ARMANI 👉https://bit.ly/3ImRpAS\n¿Cuánto se GANA en YOUTUBE en 2021? 💲👉https://bit.ly/3pqjtx0\nMI CANAL SECUNDARIO 👉👉 https://bit.ly/2Y4XYXt\n\n✅Este canal se destacó SIEMPRE por haber sido el PRIMERO en subir esta clase de contenidos y siempre hacerla los mas SIMPLE posible para que el espectador pueda entender RAPIDO y SENCILLO las noticias del Futbol Argentino.  No solo de Boca y de River, si no de todos los equipos!. 🚀\n\nMe ayudarías muchísimo si me regalas un LIKE al video y si se SUSCRIBIS si no lo estas. Me motivas mucho para seguir subiendo este contenido 💞\nGracias :)\n\n➡️ Contacto para propuestas: Futbolactivo1@gmail.com"
                },
                "defaultAudioLanguage": "es"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "xYYMYUVThn5a81ZIbaFTvItChCE",
              "id": "XQajGoF8hEc",
              "snippet": {
                "publishedAt": "2022-01-20T23:33:46Z",
                "channelId": "UCgLBmUFPO8JtZ1nPIBQGMlQ",
                "title": "AZZARO SINCERO / ZARATE A RACING? / CENTURIÓN / RIVER",
                "description": "DESCARGÁ ONE FOOTBALL\nhttps://tinyurl.com/2p9rvk7e\n\n➤ CONVERTITE EN MIEMBRO: https://www.youtube.com/channel/UCgLBmUFPO8JtZ1nPIBQGMlQ\n\n➤ MIS REDES \nInstagram: https://www.instagram.com/flavioazzaro\nTwitter: https://twitter.com/FlavioAzzaro\n\n---------------------------------------------------------------------\n\n¡MIRÁ MÁS VIDEOS MÍOS! \n\n➤ ¿BOCA O RIVER? ¿QUIÉN FUE EL MEJOR DE 2021? 🐔🔷🔶🔷 // https://www.youtube.com/watch?v=zh4kKBjQOl4\n➤ 💣 LOS PRIMEROS 2 AÑOS EN BOCA: ¿CÓMO LE FUE A ANGELICI EN COMPARACIÓN CON RIQUELME? 🔹🔶🔷\n// https://www.youtube.com/watch?v=W_FDvcXjRnw&t=312s\n➤ QUÉ SE JUEGA EN LAS ELECCIONES DE RIVER 2022? ⚽️\n// hhttps://www.youtube.com/watch?v=YjOyoUipOEY&t\n---------------------------------------------------------------------\n\nTOP 5️⃣ MÁS VISTOS \n\n➤ LLORAN LOS CONTRA // ¡Argentina a la final de la Copa América 2021! // https://www.youtube.com/watch?v=jvm_PYExRJ4\n➤ ¿POR QUÉ ESPN ES ANTI-BOCA? // https://www.youtube.com/watch?v=KKmt1Ux22yk&t\n➤ ARGENTINA CAMPEÓN, PROHIBIDO OLVIDAR // https://www.youtube.com/watch?v=zyYpbYuul6U\n➤ 💣 AZZARO LE RESPONDE A RUGGERI ☄️ // https://www.youtube.com/watch?v=ApEwA17dbec&t\n➤ ¿DE QUÉ CUADRO SON LOS PERIODISTAS? // AZZARO SINCERO, CAIGA QUIÉN CAIGA // https://www.youtube.com/watch?v=B4GOZ4rPfk8",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/XQajGoF8hEc/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/XQajGoF8hEc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/XQajGoF8hEc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/XQajGoF8hEc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  }
                },
                "channelTitle": "Flavio Azzaro",
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "AZZARO SINCERO / ZARATE A RACING? / CENTURIÓN / RIVER",
                  "description": "DESCARGÁ ONE FOOTBALL\nhttps://tinyurl.com/2p9rvk7e\n\n➤ CONVERTITE EN MIEMBRO: https://www.youtube.com/channel/UCgLBmUFPO8JtZ1nPIBQGMlQ\n\n➤ MIS REDES \nInstagram: https://www.instagram.com/flavioazzaro\nTwitter: https://twitter.com/FlavioAzzaro\n\n---------------------------------------------------------------------\n\n¡MIRÁ MÁS VIDEOS MÍOS! \n\n➤ ¿BOCA O RIVER? ¿QUIÉN FUE EL MEJOR DE 2021? 🐔🔷🔶🔷 // https://www.youtube.com/watch?v=zh4kKBjQOl4\n➤ 💣 LOS PRIMEROS 2 AÑOS EN BOCA: ¿CÓMO LE FUE A ANGELICI EN COMPARACIÓN CON RIQUELME? 🔹🔶🔷\n// https://www.youtube.com/watch?v=W_FDvcXjRnw&t=312s\n➤ QUÉ SE JUEGA EN LAS ELECCIONES DE RIVER 2022? ⚽️\n// hhttps://www.youtube.com/watch?v=YjOyoUipOEY&t\n---------------------------------------------------------------------\n\nTOP 5️⃣ MÁS VISTOS \n\n➤ LLORAN LOS CONTRA // ¡Argentina a la final de la Copa América 2021! // https://www.youtube.com/watch?v=jvm_PYExRJ4\n➤ ¿POR QUÉ ESPN ES ANTI-BOCA? // https://www.youtube.com/watch?v=KKmt1Ux22yk&t\n➤ ARGENTINA CAMPEÓN, PROHIBIDO OLVIDAR // https://www.youtube.com/watch?v=zyYpbYuul6U\n➤ 💣 AZZARO LE RESPONDE A RUGGERI ☄️ // https://www.youtube.com/watch?v=ApEwA17dbec&t\n➤ ¿DE QUÉ CUADRO SON LOS PERIODISTAS? // AZZARO SINCERO, CAIGA QUIÉN CAIGA // https://www.youtube.com/watch?v=B4GOZ4rPfk8"
                },
                "defaultAudioLanguage": "es-419"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "AHNsIccTFzPfPKTBFBgGXXt47lk",
              "id": "8wSE1uypejk",
              "snippet": {
                "publishedAt": "2022-01-20T12:58:12Z",
                "channelId": "UCZFhYCVsAzEXdmJRPiKdMaA",
                "title": "🛑Locura en la llegada del Pipa Benedetto!!!! llame a Román,le dije que queria volver\"",
                "description": "#boca #mercadodepases",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/8wSE1uypejk/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/8wSE1uypejk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/8wSE1uypejk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/8wSE1uypejk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/8wSE1uypejk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "AX",
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "🛑Locura en la llegada del Pipa Benedetto!!!! llame a Román,le dije que queria volver\"",
                  "description": "#boca #mercadodepases"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "oNy03UNj6Bn5LHIzrseRmSzh9y8",
              "id": "qvoEYP5jwiM",
              "snippet": {
                "publishedAt": "2022-01-17T15:15:26Z",
                "channelId": "UCXN1Ap4A1bOfNX3O4tIY_gQ",
                "title": "ÁRBITROS vs FUTBOLISTAS *momentos INCREÍBLES del FUTBOL*",
                "description": "Mi Instagram: http://instagram.com/xbuyer\nInstagram de Eric: https://instagram.com/ericruiiz/\nCompra y Vende Tus Juegos: https://www.eneba.com/es/?af_id=buyer\n\n\nConviértete en miembro de este canal para disfrutar de ventajas:\nhttps://www.youtube.com/channel/UCXN1Ap4A1bOfNX3O4tIY_gQ/join\n\n\n------------------------------------------------------------------------------------\n\nSeguidme en Twitter: https://twitter.com/1996Javi\n\nSeguidme en Facebook: https://www.facebook.com/xBuyerHD\n\nSeguidme en Twitch: http://es.twitch.tv/xBuyer\n\n------------------------------------------------------------------------------------\n\nDescubre LOOTBOY y consigue skins y loot de tus juegos favoritos: https://link-to.app/XBUYER",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/qvoEYP5jwiM/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/qvoEYP5jwiM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/qvoEYP5jwiM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/qvoEYP5jwiM/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/qvoEYP5jwiM/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "xBuyer",
                "tags": [
                  "respeto",
                  "momentos mas graciosos del futbol",
                  "momentos antideportivos",
                  "futbol",
                  "mundial",
                  "fifa",
                  "jugadores",
                  "futbolistas",
                  "deporte",
                  "respect",
                  "celebraciones del futbol",
                  "goles",
                  "mejores goles",
                  "penales",
                  "tiros libres",
                  "disrespectful actions of fans",
                  "football",
                  "football fans",
                  "fans vs players",
                  "actions of fans in football",
                  "football stars",
                  "pitch",
                  "pitch invader",
                  "pitch invader vs player",
                  "football moments",
                  "xbuyer",
                  "buyer"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "ÁRBITROS vs FUTBOLISTAS *momentos INCREÍBLES del FUTBOL*",
                  "description": "Mi Instagram: http://instagram.com/xbuyer\nInstagram de Eric: https://instagram.com/ericruiiz/\nCompra y Vende Tus Juegos: https://www.eneba.com/es/?af_id=buyer\n\n\nConviértete en miembro de este canal para disfrutar de ventajas:\nhttps://www.youtube.com/channel/UCXN1Ap4A1bOfNX3O4tIY_gQ/join\n\n\n------------------------------------------------------------------------------------\n\nSeguidme en Twitter: https://twitter.com/1996Javi\n\nSeguidme en Facebook: https://www.facebook.com/xBuyerHD\n\nSeguidme en Twitch: http://es.twitch.tv/xBuyer\n\n------------------------------------------------------------------------------------\n\nDescubre LOOTBOY y consigue skins y loot de tus juegos favoritos: https://link-to.app/XBUYER"
                },
                "defaultAudioLanguage": "es"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "0Pb9i2ZSnOXwpCPTE_STKfBVIgI",
              "id": "uIBEGP-KAgA",
              "snippet": {
                "publishedAt": "2022-01-21T19:09:44Z",
                "channelId": "UCAryK8vqYoR3EOSYNjVMS0A",
                "title": "La verdad sobre la ruina del FC Barcelona #shorts",
                "description": "",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/uIBEGP-KAgA/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/uIBEGP-KAgA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/uIBEGP-KAgA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Adri Contreras",
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "La verdad sobre la ruina del FC Barcelona #shorts",
                  "description": ""
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "H3dGjOvgw7g_M58V0i0ly85UXvk",
              "id": "cQTaWmZ2avY",
              "snippet": {
                "publishedAt": "2022-01-22T03:39:17Z",
                "channelId": "UCigMtQPA1eB3pAa1ri78syg",
                "title": "BOCA JUNIORS vs U DE CHILE EN VIVO - Relato EMOCIONANTE desde La Plata con ROBERTO LETO",
                "description": "📲 Descargá ONEFOOTBALL GRATIS: https://tinyurl.com/yckvsucf\n\n[NUESTRAS REDES SOCIALES]\nhttps://www.instagram.com/futboldelosgrandes/\nhttps://twitter.com/futbol_grandes\nhttps://www.la990.com.ar/\n\n Hacete MIEMBRO del Show de Boca y obtene grandes beneficios 👇 https://www.youtube.com/channel/UCigMtQPA1eB3pAa1ri78syg/join\n\nboca vs u de chile en vivo,\nboca vs u de chile 2021,\nboca vs u de chile tv,\nboca vs u de chile canal,\nboca vs u de chile ver,\nboca vs u de chile donde lo pasan,\nboca vs u de chile,\nboca vs u de chile,  \nboca vs u de chile en vivo,\nboca vs u de chile en vivo por internet,\nboca vs u de chile en directo,\nboca vs u de chile,\nboca vs u de chile hoy en vivo,\nboca vs u de chile online,\nboca vs u de chile en vivo online,\nboca vs u de chile ver online,\nboca vs u de chile partido,\nboca vs u de chile,\nboca en vivo,\nu de chile en vivo\nboca u de chile en vivo,\nboca u de chile en vivo,\nboca u de chile en vivo 2021,\nboca vs u de chile en vivo,\nboca vs u de chile,\nboca vs u de chile en directo,\nBOCA JUNIORS vs UNIVERSIDAD DE CHILE EN VIVO TORNEO DE VERANO 2022\n\n#BOCAJUNIORS #BOCA #BOCAJRS #UNIVERSIDAD #CHILE #ESPN #FOX #PREMIUM #TNTSPORTS #XENEIZE #LPF #AMISTOSO #LIBERTADORES #GRATIS #ENVIVO #CopaLibertadores #Libertadores #ROBERTOLETO #LETO #SHOWDEBOCA #BocaJuniors #Russo #FoxSports #UDECHILE\nboca vs u de chile ver,\nboca vs u de chile  donde lo pasan,\nboca vs u de chile ,\nboca vs u de chile ,  \nboca vs u de chile  en vivo,\nboca vs u de chile  en vivo por internet,\nboca vs u de chile  en directo,\nboca vs u de chile ,\nboca vs u de chile  hoy en vivo,\nboca vs u de chile  online,\nboca vs u de chile  en vivo online,\nboca vs u de chile  ver online,\nboca vs u de chile  partido,\nU de Chile\nUniversidad de Chile\nAgustín Rossi\nRossi\nSelección Argentina\nRusso\nRiquelme\nRoman Riquelme\n\nCentral\nRosario Central\nTato Aguilera\nboca vs river en vivo\nver boca vs river en vivo \nboca vs river gratis  2021\nver boca vs river en vivo \nboca vs river en hd\nver boca vs river en directo\nf90 boca vs river\nboca river en vivo\nriver plate\nboca vs river en vivo hoy \ncomo ver boca vs river en vivo\ndonde ver boca vs river en directo\nRadio La Red AM 910\n\n\n\nBoca vs San Lorenzo en vivo - Liga Profesional\nÁrbitro: Echenique F. (Arg)\n, \nEstadio: Estadio Alberto J. Armando (Buenos Aires)\nARGENTINA: Liga Profesional - Jornada 3\n\nJuan Ramirez\nSebastian Villa\n\n#BOCAJUNIORS #BOCA #SanLorenzo #Casla #BOCAJRS #ESPN #FOX #PREMIUM #TNTSPORTS #XENEIZE #LPF #FUTBOL #LIBERTADORES #GRATIS #ENVIVO #CopaLibertadores #Libertadores #ROBERTOLETO #LETO #SHOWDEBOCA #BocaJuniors #FoxSports \n\nPARTIDO EN VIVO\nEN VIVO\nFÚTBOL ARGENTINO\nCadena Xeneize\nLIGA PROFESIONAL\nLos Displicentes\nRadio La Red AM 910\nShow de Boca\n\nClub Atlético Boca Juniors\nClub Atlético Boca Juniors\nSebastian Villa\nVilla\nBrujas\nEL SUPER BOCA TV\ntyc sports\ntyc sports play\nLeto\nShow de Boca\nVignolo\nEspn\nTato Aguilera\n\nTato Aguilera",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/cQTaWmZ2avY/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/cQTaWmZ2avY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/cQTaWmZ2avY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/cQTaWmZ2avY/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/cQTaWmZ2avY/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Fútbol de los Grandes",
                "tags": [
                  "Boca",
                  "BocaJuniors",
                  "Xeneize",
                  "Futbol",
                  "ENVIVO",
                  "futbol gratis",
                  "Boca Newell's",
                  "Newells",
                  "Newell's",
                  "Rosario",
                  "Futbol argentino",
                  "Argentina",
                  "Fox",
                  "TNT",
                  "Tevez",
                  "Leto",
                  "Show de Boca",
                  "COPA ARGENTINA",
                  "ROBERTO LETO",
                  "TYC SPORTS",
                  "TYCSPORTS",
                  "Boca River",
                  "Superclasico",
                  "River",
                  "River Plate",
                  "ShowdeBoca",
                  "Roberto Leto",
                  "Boca Jrs",
                  "Boca River Plate",
                  "River Boca",
                  "Boca Juniors River",
                  "Bombonera",
                  "Espn",
                  "En vivo",
                  "Talleres de Cordoba",
                  "Atletico Tucuman",
                  "Boca Atletico",
                  "Tucuman",
                  "Boca Atletico Tucuman",
                  "leto",
                  "Pavoni",
                  "Boca Juniors"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "BOCA JUNIORS vs U DE CHILE EN VIVO - Relato EMOCIONANTE desde La Plata con ROBERTO LETO",
                  "description": "📲 Descargá ONEFOOTBALL GRATIS: https://tinyurl.com/yckvsucf\n\n[NUESTRAS REDES SOCIALES]\nhttps://www.instagram.com/futboldelosgrandes/\nhttps://twitter.com/futbol_grandes\nhttps://www.la990.com.ar/\n\n Hacete MIEMBRO del Show de Boca y obtene grandes beneficios 👇 https://www.youtube.com/channel/UCigMtQPA1eB3pAa1ri78syg/join\n\nboca vs u de chile en vivo,\nboca vs u de chile 2021,\nboca vs u de chile tv,\nboca vs u de chile canal,\nboca vs u de chile ver,\nboca vs u de chile donde lo pasan,\nboca vs u de chile,\nboca vs u de chile,  \nboca vs u de chile en vivo,\nboca vs u de chile en vivo por internet,\nboca vs u de chile en directo,\nboca vs u de chile,\nboca vs u de chile hoy en vivo,\nboca vs u de chile online,\nboca vs u de chile en vivo online,\nboca vs u de chile ver online,\nboca vs u de chile partido,\nboca vs u de chile,\nboca en vivo,\nu de chile en vivo\nboca u de chile en vivo,\nboca u de chile en vivo,\nboca u de chile en vivo 2021,\nboca vs u de chile en vivo,\nboca vs u de chile,\nboca vs u de chile en directo,\nBOCA JUNIORS vs UNIVERSIDAD DE CHILE EN VIVO TORNEO DE VERANO 2022\n\n#BOCAJUNIORS #BOCA #BOCAJRS #UNIVERSIDAD #CHILE #ESPN #FOX #PREMIUM #TNTSPORTS #XENEIZE #LPF #AMISTOSO #LIBERTADORES #GRATIS #ENVIVO #CopaLibertadores #Libertadores #ROBERTOLETO #LETO #SHOWDEBOCA #BocaJuniors #Russo #FoxSports #UDECHILE\nboca vs u de chile ver,\nboca vs u de chile  donde lo pasan,\nboca vs u de chile ,\nboca vs u de chile ,  \nboca vs u de chile  en vivo,\nboca vs u de chile  en vivo por internet,\nboca vs u de chile  en directo,\nboca vs u de chile ,\nboca vs u de chile  hoy en vivo,\nboca vs u de chile  online,\nboca vs u de chile  en vivo online,\nboca vs u de chile  ver online,\nboca vs u de chile  partido,\nU de Chile\nUniversidad de Chile\nAgustín Rossi\nRossi\nSelección Argentina\nRusso\nRiquelme\nRoman Riquelme\n\nCentral\nRosario Central\nTato Aguilera\nboca vs river en vivo\nver boca vs river en vivo \nboca vs river gratis  2021\nver boca vs river en vivo \nboca vs river en hd\nver boca vs river en directo\nf90 boca vs river\nboca river en vivo\nriver plate\nboca vs river en vivo hoy \ncomo ver boca vs river en vivo\ndonde ver boca vs river en directo\nRadio La Red AM 910\n\n\n\nBoca vs San Lorenzo en vivo - Liga Profesional\nÁrbitro: Echenique F. (Arg)\n, \nEstadio: Estadio Alberto J. Armando (Buenos Aires)\nARGENTINA: Liga Profesional - Jornada 3\n\nJuan Ramirez\nSebastian Villa\n\n#BOCAJUNIORS #BOCA #SanLorenzo #Casla #BOCAJRS #ESPN #FOX #PREMIUM #TNTSPORTS #XENEIZE #LPF #FUTBOL #LIBERTADORES #GRATIS #ENVIVO #CopaLibertadores #Libertadores #ROBERTOLETO #LETO #SHOWDEBOCA #BocaJuniors #FoxSports \n\nPARTIDO EN VIVO\nEN VIVO\nFÚTBOL ARGENTINO\nCadena Xeneize\nLIGA PROFESIONAL\nLos Displicentes\nRadio La Red AM 910\nShow de Boca\n\nClub Atlético Boca Juniors\nClub Atlético Boca Juniors\nSebastian Villa\nVilla\nBrujas\nEL SUPER BOCA TV\ntyc sports\ntyc sports play\nLeto\nShow de Boca\nVignolo\nEspn\nTato Aguilera\n\nTato Aguilera"
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "bfo7wAYtKM5BBs2tKgsyRDJ7_3g",
              "id": "lSMjM3UDIOQ",
              "snippet": {
                "publishedAt": "2022-01-20T23:27:00Z",
                "channelId": "UCmSXIvSkiWU_4Eg1HXdJ9vw",
                "title": "TyC llegó JUANFER y dió clases de humildad",
                "description": "",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/lSMjM3UDIOQ/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/lSMjM3UDIOQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/lSMjM3UDIOQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "FUTBOL Y MENUDENCIAS",
                "tags": [
                  "llegó Juanfer",
                  "llegó Benedetto",
                  "juanfer Quintero",
                  "river plate",
                  "Benedetto",
                  "boca juniors",
                  "fútbol y Menudencias"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "TyC llegó JUANFER y dió clases de humildad",
                  "description": ""
                }
              }
            },
            {
              "kind": "youtube#video",
              "etag": "9IuOQH_GWRA3UroBoLOkKiZquyw",
              "id": "WIAjNK5o1EE",
              "snippet": {
                "publishedAt": "2022-01-15T03:00:12Z",
                "channelId": "UCXEZrUc8zI1khA7Eri3GAwA",
                "title": "Leyendas que el Barcelona NO VALORÓ y dejó ir | HISTORIA",
                "description": "La impactante historia de aquellas Leyendas que el Barcelona desprecio y no supo valorar dejándolas ir, este desprecio le saldría caro al equipo.\nDescarga OneFootball GRATIS: https://tinyurl.com/yc6hce77\n\r\n\r\nSuscríbete y activa la campana de notificaciones!\r\n\r\nCONTACTO: EmmaHavok123@gmail.com\r\nInstagram Oficial: https://instagram.com/emmahavok\r\nFacebook Oficial: https://www.facebook.com/EmmaHavok\r\nTwitter Oficial : https://twitter.com/EmmaHavokRock\r\n\r\nInstrumental de fondo libre de derechos de autor con el permiso cedido de: \r\nhttps://www.youtube.com/user/KieranZRoberts\r\n\r\n#Messi #Ronaldinho #Fútbol",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/WIAjNK5o1EE/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/WIAjNK5o1EE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/WIAjNK5o1EE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/WIAjNK5o1EE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/WIAjNK5o1EE/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "EmmaHavokOscuro",
                "tags": [
                  "barcelona",
                  "barcelona messi",
                  "salida de messi",
                  "ronaldinho",
                  "barcelona no valora a las leyendas",
                  "barcelona despide a sus jugadores",
                  "rivaldo",
                  "etoo",
                  "eto",
                  "eto'o",
                  "zlatan",
                  "zlatan ibrahimovic",
                  "suarez",
                  "messi",
                  "ronaldo",
                  "ronaldo nazario",
                  "ronaldo fenomeno",
                  "ronaldo brasil",
                  "maradona",
                  "maradona predice la salida de messi",
                  "hablan mal del barcelona",
                  "dani alves",
                  "figo",
                  "romario",
                  "barca",
                  "barza",
                  "fc barcelona",
                  "barcelona debacle",
                  "crisis barcelona",
                  "xavi",
                  "guardiola",
                  "mbappe",
                  "psg",
                  "real madrid",
                  "cristiano ronaldo",
                  "futbol",
                  "deporte"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "defaultLanguage": "es",
                "localized": {
                  "title": "Leyendas que el Barcelona NO VALORÓ y dejó ir | HISTORIA",
                  "description": "La impactante historia de aquellas Leyendas que el Barcelona desprecio y no supo valorar dejándolas ir, este desprecio le saldría caro al equipo.\nDescarga OneFootball GRATIS: https://tinyurl.com/yc6hce77\n\r\n\r\nSuscríbete y activa la campana de notificaciones!\r\n\r\nCONTACTO: EmmaHavok123@gmail.com\r\nInstagram Oficial: https://instagram.com/emmahavok\r\nFacebook Oficial: https://www.facebook.com/EmmaHavok\r\nTwitter Oficial : https://twitter.com/EmmaHavokRock\r\n\r\nInstrumental de fondo libre de derechos de autor con el permiso cedido de: \r\nhttps://www.youtube.com/user/KieranZRoberts\r\n\r\n#Messi #Ronaldinho #Fútbol"
                },
                "defaultAudioLanguage": "es"
              }
            },
            {
              "kind": "youtube#video",
              "etag": "bVF1aWx1IfWLoTsvcDxkXAJJsX0",
              "id": "HY7m-iwf-z4",
              "snippet": {
                "publishedAt": "2022-01-16T04:27:23Z",
                "channelId": "UCppQkPPqEiwcui1sLDlJH8A",
                "title": "NBA | Facundo Campazzo (9 puntos y 5 asistencias) Vs. Lakers",
                "description": "Los Denver Nuggets sumaron una nueva victoria, en esta oportunidad ante los Angeles Lakers por 133 a 96. Facundo Campazzo volvió a tener una buena participación con:\n\n9 puntos\n(1/4 3p, 2/2 2p y 2/2 TL)\n3 rebotes\n5 asistencias\n1 robo\n+/-  34\n26:20\n\n🎥 NBA\n🎬 FaltaTécnica\n\n🐦Twitter 👉 https://twitter.com/falta_tecnica\n📱Instagram 👉 https://instagram.com/falta_tecnica\nWEB OFICIAL 💻 https://faltatecnica.com.ar\n\nPodés colaborar con nuestro proyecto con una donación voluntaria en este link 👉 https://cafecito.app/faltatecnica\n\n►COPYRIGHT DISCLAIMER◄\nTitle 17, US Code (Sections 107-118 of the copyright law, Act 1976):\nAll media in this video is used for purpose of review & commentary under terms of fair use. All footage, & images used belong to their respective companies. (©NBA | ©Altitude TV) \nFair use is a use permitted by copyright statute that might otherwise be infringing.",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/HY7m-iwf-z4/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/HY7m-iwf-z4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/HY7m-iwf-z4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  }
                },
                "channelTitle": "Falta Técnica",
                "tags": [
                  "Highlights",
                  "Básquetbol",
                  "basketball",
                  "baloncesto",
                  "Falta Técnica",
                  "Facundo",
                  "Campazzo",
                  "Denver",
                  "Nuggets",
                  "NBA",
                  "Argentina"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "localized": {
                  "title": "NBA | Facundo Campazzo (9 puntos y 5 asistencias) Vs. Lakers",
                  "description": "Los Denver Nuggets sumaron una nueva victoria, en esta oportunidad ante los Angeles Lakers por 133 a 96. Facundo Campazzo volvió a tener una buena participación con:\n\n9 puntos\n(1/4 3p, 2/2 2p y 2/2 TL)\n3 rebotes\n5 asistencias\n1 robo\n+/-  34\n26:20\n\n🎥 NBA\n🎬 FaltaTécnica\n\n🐦Twitter 👉 https://twitter.com/falta_tecnica\n📱Instagram 👉 https://instagram.com/falta_tecnica\nWEB OFICIAL 💻 https://faltatecnica.com.ar\n\nPodés colaborar con nuestro proyecto con una donación voluntaria en este link 👉 https://cafecito.app/faltatecnica\n\n►COPYRIGHT DISCLAIMER◄\nTitle 17, US Code (Sections 107-118 of the copyright law, Act 1976):\nAll media in this video is used for purpose of review & commentary under terms of fair use. All footage, & images used belong to their respective companies. (©NBA | ©Altitude TV) \nFair use is a use permitted by copyright statute that might otherwise be infringing."
                },
                "defaultAudioLanguage": "es"
              }
            }
          ]

        try {
            const mostPopularVideosList = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=ar&videoCategoryId=17&key=${API_KEY}`)
            // return mostPopularVideosList.data.items
            return objetoparanogastarticketsxd
        } catch (error) {
            console.log("err", error) 
        }
    }

    const getHomeData = async () => {
        const mostPopularVideosList = await getMostPopularVideos()
        setMostPopularVideos(mostPopularVideosList)
    }

    const getCorrectTime = (time) => {
        const timeInSeconds = new Date(time).getSeconds()
        if(timeInSeconds >= timeList.second && timeInSeconds < timeList.minute) return checkPlural(timeInSeconds, ' segundos')
        if(timeInSeconds >= timeList.minute && timeInSeconds < timeList.hour) return checkPlural(Math.floor(timeInSeconds/60), ' minutos')
        if(timeInSeconds >= timeList.hour && timeInSeconds < timeList.day) return checkPlural(Math.floor(timeInSeconds/3600), ' horas')
        if(timeInSeconds >= timeList.day && timeInSeconds < timeList.week) return checkPlural(Math.floor(timeInSeconds/86400), ' dias')
        if(timeInSeconds >= timeList.week && timeInSeconds < timeList.month) return checkPlural(Math.floor(timeInSeconds/604800), ' semanas')
        if(timeInSeconds >= timeList.month && timeInSeconds < timeList.year) return checkPlural(Math.floor(timeInSeconds/2592000), ' meses') 
        if(timeInSeconds >= timeList.year) return checkPlural(Math.floor(timeInSeconds/31536000), ' años')
    }

    const checkPlural = (timeInSeconds, stringTime) => {
        if(timeInSeconds === 1) return timeInSeconds + reverseAndRemoveSFromString(stringTime)
        else return timeInSeconds + stringTime
    }

    const reverseAndRemoveSFromString = (string) => {
        return string.split("").reverse().join("").replace('s','').split("").reverse().join("")
    }

    return { mostPopularVideos, userChannelIcons, getCorrectTime }
};
