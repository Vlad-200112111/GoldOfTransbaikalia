import {Link} from 'react-router-dom'


function HomeNewsItem({publicationsItem}) {
    return (
        <div className="d-lg-flex flex-lg-row pb-3 pt-3">
            <div className="bg-white w-100 d-lg-flex flex-lg-row shadow">
                <div className='News-Img'style={{
                        backgroundImage: `url("${publicationsItem.image_url}")`,
                }} 
                        ></div>
                
                <div className="p-3 w-50" style={{display:'flex', flexDirection:'column', alignItems:'start'}}>
                    <a href="#" className="text-dark text-decoration-none">
                        <h3 className="fw-bold h5 m-2 text-start">{publicationsItem.title}</h3>
                    </a>
                    <h4 className="fw-bold h6 small text-secondary">{publicationsItem.created}</h4>
                    <p className="mb-0 text-start m-2">
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
