import { Link } from "react-router-dom"
import { useHome } from "../hooks/useHome"
import { useSearchResults } from "../hooks/useSearchResults"
import Icon from "./promises/Icon"
import Visualizations from "./promises/Visualizations"

export default function SearchResults() {

    const {searchResults} = useSearchResults()
    const {getCorrectTime} = useHome()

    return (
        <div className="search-results">
            <ul className="list">
                {
                    searchResults && searchResults.map((result, id) => {
                        {console.log("reuslts", searchResults)}
                        return (
                            <li className="list__item" key={id}>
                                <Link className="list__link" to={`/watch/${result.id.videoId}`}>
                                    <img className="list__thumbnail" src={result.snippet.thumbnails.high.url} alt="thumbnail" />
                                    <div className="data">
                                        <span className="list__title">{result.snippet.title}</span>
                                        <div className="statistics">
                                            <Visualizations id={result.id.videoId} />
                                            <span className="list__timeago"> hace {getCorrectTime(result.snippet.publishedAt)}</span>
                                        </div>
                                        <div className="channel">
                                            <Icon id={result.snippet.channelId} />
                                            <span className="list__channel-name">{result.snippet.channelTitle}</span>
                                        </div>
                                        <p className="list__description">{result.snippet.description}</p>
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
