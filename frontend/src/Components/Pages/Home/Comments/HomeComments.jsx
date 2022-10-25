import HomeCommentsItem from "./HomeCommentsItem";

function HomeComments({Comments}) {
  return (
    <div>
      <div className="bg-light rounded text-secondary">
        <h5 className="bg-gradient bg-success fw-bold mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">
          Комментарии
        </h5>
        <div className="container">
            {
                Comments.map(comment=>
                        <HomeCommentsItem Comment={comment} />
                    )
            }
        </div>
      </div>
    </div>
  );
}

export default HomeComments;
