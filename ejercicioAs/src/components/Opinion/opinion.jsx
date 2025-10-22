import "./opinion.css";

function Opinion({ title, author, image }) {
  return (
    <div className="col-12 opinion-container">
      <div className="row">
        <div className="col-12 opinion-title">
          <a href="#">
            <h3>OPINIÓN</h3>
            <hr />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4 opinion-element-container">
          <a href="#" className="opinion-element-title">
            {title}
          </a>
          <div className="opinion-image-container">
            <div className="opinion-element-text">
              <span className="author-pre">POR</span>
              <span className="author">{author}</span>
              <span className="comments"></span>
            </div>
            <div className="opinion-image">
              <div
                className="opinion-image-div"
                style={{
                  backgroundImage:
                    `url("${image}")`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 opinion-element-container">
          <a href="#" className="opinion-element-title">
            {title}
          </a>
          <div className="opinion-image-container">
            <div className="opinion-element-text">
              <span className="author-pre">POR</span>
              <span className="author">{author}</span>
              <span className="comments"></span>
            </div>
            <div className="opinion-image">
              <div
                className="opinion-image-div"
                style={{
                  backgroundImage:
                    `url("${image}")`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 opinion-element-container">
          <a href="#" className="opinion-element-title">
            {title}
          </a>
          <div className="opinion-image-container">
            <div className="opinion-element-text">
              <span className="author-pre">POR</span>
              <span className="author">{author}</span>
              <span className="comments"></span>
            </div>
            <div className="opinion-image">
              <div
                className="opinion-image-div"
                style={{
                  backgroundImage:
                    `url("${image}")`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opinion;