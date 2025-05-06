const ListComics = (props) => {
    return (
        <div className="com-thumbnail">
            <div className="thumbnail-img">
                <img src={props.src} alt="" />
            </div>
                <h3>{props.title}</h3>
        </div>
    )
}

export default ListComics;