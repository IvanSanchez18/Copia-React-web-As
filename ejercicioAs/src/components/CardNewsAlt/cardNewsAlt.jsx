import "./cardNewsAlt.css"

function CardNewsAlt({ col, image, category, title, footer }) {
    return (
        <div className={`${col} card-news-container-alt`}>
            <div className="card-image-container">
                <a href="#">
                    <div style={{ backgroundImage: `url("${image}")` }}></div>
                </a>
            </div>
            <div className="card-news-alt-content">
                <div className="card-category-container">
                    <a href="#">{category}</a>
                </div>
                <div className="card-text-container">
                    <a href="#">{title}</a>
                </div>
                <div className="card-footer-container">
                    <span>{footer}</span> <i className="bi bi-chat-right"></i>
                </div>
            </div>
        </div>
    );
}

export default CardNewsAlt;
