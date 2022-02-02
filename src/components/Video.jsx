import { useParams, Link } from "react-router-dom"
import { useVideo } from "../hooks/useVideo"
import { useHome } from "../hooks/useHome"
import Visualizations from "./promises/Visualizations"
import { useEffect, useRef, useState } from "react"

export default function Video() {
    const { id } = useParams()
    const [expandDescription, setExpandDescription] = useState(false);
    const {video, channel, comments, relatedVideos, formatDate, visualizationsLoader, urlify} = useVideo()
    const {formatNumberWithDots, getCorrectTime} = useHome()
    const descriptionText = useRef()
    console.log("id", id)

    useEffect(() => {
        video && channel && comments && relatedVideos && urlify(descriptionText)
    }, [video, channel, comments, relatedVideos])
    

    return (
        video && channel && comments && relatedVideos ?
        <div className="video">
            <div className="left">
                <iframe
                    width="1280"
                    height="720"
                    src={`https://www.youtube.com/embed/${id}?&autoplay=1&mute=1&modestbranding=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="player"
                />
                <div className="video-info">
                    <div className="title-container">
                        <span className="video__title">{video.snippet.localized.title}</span>
                    </div>
                    <div className="info">
                        <div className="statistics">
                            <span className="views">{video.statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} visualizaciones  </span>
                            <span className="date">{formatDate(video.snippet.publishedAt)}</span>
                        </div>
                        <div className="actions">
                            <div className="likes">
                                <svg className="likes__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></g></svg>
                                <span className="likes__data">{video.statistics.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                            </div>
                            <div className="dislikes">
                                <svg className="dislikes__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></g></svg>
                                <span className="dislikes__title">NO ME GUSTA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="meta">
                    <div className="channel-icon-container">
                        <img className="channel-icon" src={channel.snippet.thumbnails.high.url} alt="channelIcon" />
                    </div>
                    <div className={expandDescription ? "meta-info expanded" : "meta-info"}>
                        <div className="channel-info">
                            <div className="channel">
                                <span className="channel__name">{channel.snippet.title}</span>
                                <span className="channel__suscribers">{formatNumberWithDots(channel.statistics.subscriberCount)} de suscriptores</span>
                            </div>
                            <div className="channel-options">
                                <button className="channel-options__suscribe">
                                    <span className="channel-options__text">SUSCRIBIRME</span>
                                </button>
                            </div>
                        </div>
                        <div className="description">
                            <p ref={descriptionText} className={expandDescription ? "description__text expanded" : "description__text"}></p> 
                            <button className="description__button" onClick={() => {expandDescription ? setExpandDescription(false) : setExpandDescription(true)}}>{expandDescription ? 'MOSTRAR MENOS' : 'MOSTRAR MÁS'}</button>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <span className="total-comments">4795 comentarios</span>
                    <div className="create-comment">
                        <img className="user-icon" src="https://yt3.ggpht.com/yti/APfAmoFpVtcb0GhsT8w_ftVTphuY9oPHZ7PbNV4Em-mGgA=s48-c-k-c0x00ffffff-no-rj" alt="userIcon" />
                        <input className="create-comment__input" type="text" placeholder="Añade un comentario público..."/>
                    </div>
                    <ul className="list">
                        {comments.map((comment, id) => {
                            return (
                                <li className="list__item" key={id}>
                                    <img className="list__icon" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="userIcon" />
                                    <div className="data">
                                        <span className="data__channel">{comment.snippet.topLevelComment.snippet.authorDisplayName}<span className="data__timeago"> hace {getCorrectTime(comment.snippet.topLevelComment.snippet.publishedAt)}</span>
                                        </span>
                                        <span className="list__comment">{comment.snippet.topLevelComment.snippet.textOriginal}</span>
                                        <div className="options">
                                            <div className="like">
                                                <svg className="likes__icon" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"></path></g></svg>
                                                <span className="like__count">{comment.snippet.topLevelComment.snippet.likeCount}</span>
                                            </div>
                                            <div className="dislike">
                                                <svg className="dislikes__icon" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z"></path></g></svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="related-videos">
                    <ul className="list">
                        {
                            relatedVideos.map((video, id) => {
                                return (
                                    video.snippet && 
                                    <li className="list__item" key={id}>
                                        <Link className="list__link" to={`/watch/${video.id.videoId}`}>
                                            <img className="list__thumbnail" src={video.snippet.thumbnails.high.url} alt="thumbnail" />
                                            <div className="data">
                                                <span className="list__title">{video.snippet.title}</span>
                                                <span className="list__channel-name">{video.snippet.channelTitle}</span>
                                                <div className="statistics">
                                                    <Visualizations id={video.id.videoId} />
                                                    <span className="list__timeago"> hace {getCorrectTime(video.snippet.publishedAt)}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        : <></>  
    )
}
