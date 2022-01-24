import { useHome } from "../hooks/useHome"
import Icon from "./Icon"

export default function Home() {
    const {mostPopularVideos, userChannelIcons, getCorrectTime} = useHome()

    return (
    <div className="home">
        {console.log("estadoactualdetodo", userChannelIcons)}
        <ul className="list">
            {
                mostPopularVideos  && mostPopularVideos.map((video, pos) => {
                    return (
                        <li className="list__item" key={video.id}>
                            <a className="list__link" href="">
                                {console.log(video)}
                                <img className="list__thumbnail" src={video.snippet.thumbnails.high.url} alt="thumbnail" />
                            </a>
                            <div className="data">
                                {/* <Icon id={video.snippet.channelId} /> */}
                                <div className="details">
                                    <a className="data__title" href="">{video.snippet.title}</a>
                                    <div className="metadata">
                                        <span className="metadata__user-name">{video.snippet.channelTitle}</span>
                                        <div className="video-data">
                                            <span className="video-data__visualizations">34.100 visualizaciones</span>
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
    </div>
    )
}
