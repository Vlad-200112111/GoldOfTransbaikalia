function HomeCommentsItem({Comment}) {
  return (
    <div className="m-2 p-3 shadow">
      <p className="fs-5 text-dark">{Comment.user.name}</p>
      <p className="fs-6">{Comment.comment}</p>
      <a href={Comment.link} className="alert-link fs-6 link-success">
        Перейти к новости
      </a>
    </div>
  );
}

export default HomeCommentsItem;
