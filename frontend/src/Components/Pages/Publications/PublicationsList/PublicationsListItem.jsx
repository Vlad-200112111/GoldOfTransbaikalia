import {Link} from "react-router-dom";

function PublicatonsListItem({publication, Row}) {
    console.log(publication)
    return (
        <>
            {!Row && (
                <div class="d-lg-flex flex-lg-row pb-3 pt-3">
                    <div  class="bg-white w-100 d-lg-flex flex-lg-row shadow">
                        <img
                            src={publication?.image_url}
                            alt="..."
                            style={{maxWidth:'50%', maxHeight:'250px'}}
                            class="image-fit-center-center img-fluid"
                        />
                        <div class="p-3">
                            {" "}
                            <a href="#" class="text-dark text-decoration-none">
                                <h3 class="fw-bold h5">{publication?.title}</h3>
                            </a>
                            <h4 class="fw-bold h6 small text-secondary">
                                {publication?.creation_date}
                            </h4>
                            <p class="mb-0">{publication?.caption?.slice(0,150)}{publication?.caption?.length > 150? '...' : ''}</p>
                            <button type="button" class="btn btn-success m-2">
                                <Link className="baseLink" to={`/publication-details/${publication.id}`}>
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
                            <Link className="baseLink" to={`/publication-details/${publication?.id}`}>
                                <img
                                    src={'http://127.0.0.1:8000'+publication?.image_url}
                                    class="img-fluid w-100"
                                    alt="..."
                                    width="700"
                                    height="480"
                                />
                            </Link>

                            <div class="p-3">
                                {" "}
                                <a href="#" class="text-dark text-decoration-none">
                                    <h3 class="fw-bold h5">{publication?.title}</h3>
                                </a>
                                <h4 class="fw-bold h6 small text-secondary">
                                    {publication?.creation_date}
                                </h4>
                                <p class="mb-0">{publication?.caption}</p>
                                <button type="button" class="btn btn-success m-2">
                                    <Link className="baseLink" to={`/publication-details/${publication?.id}`}>
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
