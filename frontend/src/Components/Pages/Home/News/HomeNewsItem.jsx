import {Link} from 'react-router-dom'
function HomeNewsItem({NewsItem}) {
  return (
    <div className="d-lg-flex flex-lg-row pb-3 pt-3">
      <div className="bg-white d-lg-flex flex-lg-row shadow">
        <img
          src={NewsItem.preview}
          alt="..."
          className="image-fit-center-center img-fluid w-50"
        />
        <div className="p-3">
          <a href="#" className="text-dark text-decoration-none">
            <h3 className="fw-bold h5">{NewsItem.name}</h3>
          </a>
          <h4 className="fw-bold h6 small text-secondary">{NewsItem.created}</h4>
          <p className="mb-0">
            {NewsItem.description}
          </p>
          <button type="button" className="btn btn-success m-2">
            <Link className='baseLink' to={NewsItem.link}>
                Подробнее
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeNewsItem;
