import {Link} from 'react-router-dom'
function HomeCommentsItem({Comment}) {
  return (
    <div className="m-2 p-3 shadow">
      <p className="fs-6">{Comment?.content}</p>
      <Link to={`/publication-details/${Comment?.new}`} className="alert-link fs-6 link-success">
      Перейти к новости
      </Link>
      
    </div>
  );
}

export default HomeCommentsItem;
