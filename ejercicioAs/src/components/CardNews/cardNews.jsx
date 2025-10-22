import "./CardNews.css"

function CardNews(props) {

    /*
        let col;

        if(props.col != undefined && props.col != null){
            col = props.col;
        } else {
            col = "col-12";
        }

        ES IGUAL A :
    */

    /* 
        Parcialmente igual a :

        let col = props.col != undefined && props.col != null ? props.col : "col-12";
        let col = props.col ? props.col : "col-12";
    */
    let isVideo = props.isVideo != undefined && props.isVideo != null ? props.isVideo : false;
    let col = props.col ? props.col : "col-12";
    let category = props.category != undefined && props.category != null ? props.category : "sociedad";
    let title = props.title != undefined && props.title != null ? props.title : "Título";
    let footer = props.footer != undefined && props.footer != null ? props.footer : "AS Actualidad";
    let image = props.image != undefined && props.image != null ? props.image : "https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true";
    let alt = props.alt != undefined && props.alt != null ? props.alt : "false";

    col += props.alt === "true" ? " card-news-container-alt" : " card-news-container";

    let aux = "";

    if(alt === "true"){
      aux += "card-image-container"

    }


    return (
        
        <div className={col}>
            <div className="card-image-container">
                <a href="#">
                    <div style={{ backgroundImage: `url("${image}")` }}>
                        {isVideo ? 
                            (
                                <div className="play-button">
                                    <i className="bi bi-play-fill"></i>
                                </div>
                            ) 
                            : ""
                        }
                    </div>
                </a>
            </div>
            <div className="card-news-alt-content">

            
            <div className="card-category-container">
                <a href="#">
                    {category}
                </a>
            </div>
            <div className="card-text-container">
                <a href="#">
                    {title} 
                </a>
            </div>
            <div className="card-footer-container">
                <span>{footer}</span> <i className="bi bi-chat-right"></i> 
            </div>
        </div>
        </div>

    );

}

export default CardNews;