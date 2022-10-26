import {Link} from 'react-router-dom'


function HomeNewsItem({publicationsItem}) {
    return (
        <div className="d-lg-flex flex-lg-row pb-3 pt-3">
            <div className="bg-white w-100 d-lg-flex flex-lg-row shadow">
                <img
                    src={'http://127.0.0.1:8000'+publicationsItem.image_url}
                    alt="..."
                    style={{maxWidth:'50%', maxHeight:'250px'}}
                    className="image-fit-center-center img-fluid w-50"
                />
                <div className="p-3">
                    <a href="#" className="text-dark text-decoration-none">
                        <h3 className="fw-bold h5">{publicationsItem.title}</h3>
                    </a>
                    <h4 className="fw-bold h6 small text-secondary">{publicationsItem.created}</h4>
                    <p className="mb-0">
                        {publicationsItem.caption}
                    </p>
                    <button type="button" className="btn btn-success m-2">
                        <Link className='baseLink' to={`/publication-details/${publicationsItem.id}`}>
                            Подробнее
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeNewsItem;
