import {Link} from "react-router-dom";

function PublicatonsListItem({publiction, Row}) {
    return (
        <>
            {!Row && (
                <div class="d-lg-flex flex-lg-row pb-3 pt-3">
                    <div class="bg-white d-lg-flex flex-lg-row shadow">
                        <img
                            src={publiction.image_url}
                            alt="..."
                            class="image-fit-center-center img-fluid w-50"
                        />
                        <div class="p-3">
                            {" "}
                            <a href="#" class="text-dark text-decoration-none">
                                <h3 class="fw-bold h5">{publiction.title}</h3>
                            </a>
                            <h4 class="fw-bold h6 small text-secondary">
                                {publiction.creation_date}
                            </h4>
                            <p class="mb-0">{publiction.caption}</p>
                            <button type="button" class="btn btn-success m-2">
                                <Link className="baseLink" to={`/publication-details/${publiction.id}`}>
                                    Подробнее
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {
                Row && (
                    <div class="col-lg-4 col-md-6 pb-3 pt-3">
                        <div class="bg-white shadow">
                            <Link className="baseLink" to={`/publication-details/${publiction.id}`}>
                                <img
                                    src={publiction.image_url}
                                    class="img-fluid w-100"
                                    alt="..."
                                    width="700"
                                    height="480"
                                />
                            </Link>

                            <div class="p-3">
                                {" "}
                                <a href="#" class="text-dark text-decoration-none">
                                    <h3 class="fw-bold h5">{publiction.title}</h3>
                                </a>
                                <h4 class="fw-bold h6 small text-secondary">
                                    {publiction.creation_date}
                                </h4>
                                <p class="mb-0">{publiction.caption}</p>
                                <button type="button" class="btn btn-success m-2">
                                    <Link className="baseLink" to={`/publication-details/${publiction.id}`}>
                                        Подробнее
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

export default PublicatonsListItem;
