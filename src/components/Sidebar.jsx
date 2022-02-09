import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import CurrentSectionContext from "../contexts/CurrentSectionContext";
import SubscriptionsContext from "../contexts/SubscriptionsContext";
import SidebarContext from "../contexts/SidebarContext";

export default function Sidebar() {
    const {currentSection} = useContext(CurrentSectionContext)
    const {subscriptions} = useContext(SubscriptionsContext)
    const {expandSidebar} = useContext(SidebarContext)
    useSidebar()
    
    return (
        <div className={expandSidebar ? "sidebar expanded" : "sidebar contracted"}>
            {
                expandSidebar
                ?
                    <div className="sections">
                        <div className="primary">
                            <ul className="list">
                                <Link className={currentSection === 'subscriptions' ? "list__link" : "list__link active"} to={`/`}>
                                    <li className="list__item">
                                        {
                                            currentSection === 'subscriptions'
                                            ? <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"></path></g></svg>
                                            : <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path></g></svg>
                                        }
                                        <span className="list__title">Inicio</span>
                                    </li>
                                </Link>
                                <a className="list__link">
                                    <li className="list__item">
                                        <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path></g></svg>                    
                                        <span className="list__title">Explorar</span>
                                    </li>
                                </a>
                                <Link className={currentSection === 'subscriptions' ? "list__link active" : "list__link"} to={`/feed/subscriptions`}>
                                    <li className="list__item">
                                        {
                                            currentSection === 'subscriptions'
                                            ? <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"></path></g></svg>
                                            : <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path></g></svg>
                                        }
                                        <span className="list__title">Suscripciones</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="secundary">
                            <ul className="list">
                                <a className="list__link">
                                    <li className="list__item">
                                        <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path></g></svg>                            
                                        <span className="list__title">Biblioteca</span>
                                    </li>
                                </a>
                                <a className="list__link">
                                    <li className="list__item">
                                        <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path></g></svg>
                                        <span className="list__title">Historial</span>
                                    </li>
                                </a>
                                <a className="list__link">
                                    <li className="list__item">
                                    <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path></g></svg>
                                        <span className="list__title">Mis videos</span>
                                    </li>
                                </a>
                                <a className="list__link">
                                    <li className="list__item">
                                    <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path></g></svg>
                                        <span className="list__title">Ver más tarde</span>
                                    </li>
                                </a>
                                <a className="list__link">
                                    <li className="list__item">
                                    <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></g></svg>
                                        <span className="list__title">Videos que me gustan</span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <div className="subscriptions">
                            <ul className="list">
                                <span className="list__title">SUSCRIPCIONES</span>
                                    {
                                        subscriptions && subscriptions.map((subscription, id) => {
                                            return (
                                                <a className="list__link" key={id}>
                                                    <li className="list__item">
                                                        <img className="list__avatar" src={subscription.snippet.thumbnails.high.url} alt="avatar" />
                                                        <span className="list__name">{subscription.snippet.title}</span>
                                                    </li>
                                                </a>
                                            )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                :
                    <div className="sections">
                        <ul className="list">
                            <Link className={currentSection === 'subscriptions' ? "list__link" : "list__link active"} to={`/`}>
                                <li className="list__item">
                                    {
                                        currentSection === 'subscriptions'
                                        ? <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"></path></g></svg>
                                        : <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path></g></svg>
                                    }
                                    <span className="list__title">Inicio</span>
                                </li>
                            </Link>
                            <a className="list__link">
                                <li className="list__item">
                                    <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path></g></svg>                    
                                    <span className="list__title">Explorar</span>
                                </li>
                            </a>
                            <Link className={currentSection === 'subscriptions' ? "list__link active" : "list__link"} to={`/feed/subscriptions`}>
                                <li className="list__item">
                                    {
                                        currentSection === 'subscriptions'
                                        ? <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"></path></g></svg>
                                        : <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path></g></svg>
                                    }                    
                                    <span className="list__title">Suscripciones</span>
                                </li>
                            </Link>
                            <a className="list__link">
                                <li className="list__item">
                                    <svg className="list__icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path></g></svg>                            
                                    <span className="list__title">Biblioteca</span>
                                </li>
                            </a>
                        </ul>
                    </div>
            }
        </div>
    )
}
