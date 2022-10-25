import { Link } from "react-router-dom";

function PublicatonsListItem({ Publiction }) {
  return (
    <div class="d-lg-flex flex-lg-row pb-3 pt-3">
      <div class="bg-white d-lg-flex flex-lg-row shadow">
        <img
          src={Publiction.preview}
          alt="..."
          class="image-fit-center-center img-fluid w-50"
        />
        <div class="p-3">
          {" "}
          <a href="#" class="text-dark text-decoration-none">
            <h3 class="fw-bold h5">{Publiction.name}</h3>
          </a>
          <h4 class="fw-bold h6 small text-secondary">{Publiction.created}</h4>
          <p class="mb-0">{Publiction.description}</p>
          <button type="button" class="btn btn-success m-2">
            <Link className="baseLink" to={Publiction.link}>
              Подробнее
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicatonsListItem;
