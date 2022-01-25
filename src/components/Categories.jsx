import { useCategories } from "../hooks/useCategories"

export default function Categories({setMostPopularVideos}) {
    const { categories, getCategoryById } = useCategories(setMostPopularVideos)

    return ( 
        <div className="categories">
            <ul className="list">
                {
                    categories && categories.slice(0, 12).map((category) => {
                        return (
                            <li className="list__item" key={category.id} onClick={() => getCategoryById(category.id)}>
                                <span className="list__category">{category.snippet.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
