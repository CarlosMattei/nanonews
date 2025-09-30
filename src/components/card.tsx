export default function Card() {
    return (
        <div className="card">
            <div className="thumbnail">
            </div>
            <div className="content-card flex flex-column gap-4">
                <div className="tags-container-card">
                    <div className="tag base">Startups</div>
                </div>
                <h4 className="titulo text-md medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
                <p className="postagem-tempo text-xs thin text-gray-5">Publicado a 2 minutos</p>
            </div>
        </div>
    )
}