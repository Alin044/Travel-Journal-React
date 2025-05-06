export default function Entry(props){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt} 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png"
                />
            </div>
        </article>
    )
}