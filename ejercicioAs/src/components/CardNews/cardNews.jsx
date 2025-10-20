import "./cardNews.css"

function CardNews({ cols, image, category, title, footer }) {
  return (
    <div className={`${cols} card-news-container`}>
      <div className="card-image-container">
        <a href="#">
          <div style={{ backgroundImage: `url("${image}")` }}>
            <div className="play-button">
              <i className="bi bi-play-fill"></i>
            </div>
          </div>
        </a>
      </div>
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
  );
}

export default CardNews;
