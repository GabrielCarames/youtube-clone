import { Link } from "react-router-dom"
import { useHome } from "../hooks/useHome"
import { useSubscriptions } from "../hooks/useSubscriptions"
import Icon from "./promises/Icon"
import Visualizations from "./promises/Visualizations"

export default function Subscriptions() {
    const {subscriptionsVideos} = useSubscriptions()
    const {getCorrectTime} = useHome()

    return (
        <div className="subscriptions-videos">
            <ul className="list">
                {
                    subscriptionsVideos && subscriptionsVideos.map((videos, id) => {
                        return (
                            <li className="list__item" key={id}>
                                {console.log("videos.contentDetails", videos.contentDetails)}
                                <Link className="list__link" to={videos.contentDetails.upload && `/watch/${videos.contentDetails.upload.videoId}`}>
                                    <div className="channel">
                                        <Icon id={videos.snippet.channelId} />
                                        <span className="list__channel-name">{videos.snippet.channelTitle}</span>
                                    </div>
                                    <div className="video">
                                        <img className="list__thumbnail" src={videos.snippet.thumbnails.high.url} alt="thumbnail" />
                                        <div className="data">
                                            <span className="list__title">{videos.snippet.title}</span>
                                            <div className="statistics">
                                                <span className="list__channel-name">{videos.snippet.channelTitle}</span>
                                                {/* <Visualizations id={videos.contentDetails.upload && videos.contentDetails.upload.videoId} /> */}
                                                <span className="list__timeago"> hace {getCorrectTime(videos.snippet.publishedAt)}</span>
                                            </div>
                                            <p className="list__description">{videos.snippet.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
