import { useHome } from "../hooks/useHome"
import { Link } from "react-router-dom"
import Categories from "./Categories"
import Icon from "./promises/Icon"
import { useContext } from "react"
import SidebarContext from "../contexts/SidebarContext"
import Loader from "react-loader-spinner";

export default function Home() {
    const {mostPopularVideos, getCorrectTime, setMostPopularVideos, formatNumberWithDots} = useHome()
    const {expandSidebar} = useContext(SidebarContext);

    return (
        <div className={window.innerWidth >= 320 && window.innerWidth <= 900 ? "home left" : expandSidebar ? "home right" : "home left"}>
            {mostPopularVideos ?
                <>
                    <Categories setMostPopularVideos={setMostPopularVideos} />
                    <ul className="list">
                        {
                            mostPopularVideos.map((video, id) => {
                                return (
                                    <li className="list__item" key={id}>
                                        <Link className="list__link" to={`/watch/${video.id}`}>
                                            <img className="list__thumbnail" src={video.snippet.thumbnails.high.url} alt="thumbnail" />
                                        </Link>
                                        <div className="data">
                                            <Icon id={video.snippet.channelId} />
                                            <div className="details">
                                                <a className="data__title" href="">{video.snippet.title}</a>
                                                <div className="metadata">
                                                    <span className="metadata__user-name">{video.snippet.channelTitle}</span>
                                                    <div className="video-data">
                                                        <span className="video-data__visualizations">{formatNumberWithDots(video.statistics.viewCount)} visualizaciones</span>
                                                        <span className="video-data__time-ago">hace {getCorrectTime(video.snippet.publishedAt)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            : <Loader className="loader" type="Oval" color="#ffffff" height={100} width={100} />}
        </div>
    )
}
