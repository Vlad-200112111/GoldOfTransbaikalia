import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import publicationDetailsImg from "../../../Assets/Images/publication-details.jpg";
import CreateComment from "../../UI/CreateComment/CreateComment";
import PublicationsList from "../Publications/PublicationsList/PublicationsList";
import PublicationComments from "./PublicationComments/PublicationComments";
import api from "../../../Services/api";
import { useState } from "react";
import CustomPagination from "../../UI/CustomPagination/CustomPagination";
function PublicationDetails() {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [Publication, setPublication] = useState([]);
  const [pages, setPages] = useState([]);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const getComments = async (id, page) => {
    const { data: Comments } = await api.Comments.getCommentsByNewsId(id, page);
    return Comments;
  };
  const getNews = async (id) => {
    const { data: News } = await api.News.getNewsById(id);
    return News;
  };
  useEffect(() => {
    getComments(params.id, page).then((comments) => {
      setComments(comments);
      setPages(
        Array.from(
          { length: Math.ceil(comments.count / limit) },
          (_, i) => i + 1
        )
      );
    });
    getNews(params.id).then((news) => {
      setPublication(news);
    });
  }, [params.id, page]);

  const next = () => {
    if (comments.next) {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (comments.previous) {
      setPage(page - 1);
    }
  };

  return (
    <section class="bg-light container d-lg-flex flex-lg-row text-secondary">
      <div class="col-lg-12 d-lg-flex flex-lg-column ps-4">
        <section class="text-center">
          <div class="container pt-3">
            <div class="align-items-center justify-content-center g-0 row">
              <div>
                <div class="bg-light rounded text-secondary">
                  <h4 class="bg-gradient bg-success fw-bold mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">
                    {Publication?.title}
                  </h4>
                  <p class="text-dark">{Publication?.creation_date}</p>
                  <div class="ps-3 pe-3">
                    <div class="container pb-4">
                      <div class="row">
                        <div class="col-lg-12">
                          <p style={{ textAlign: "justify" }}>
                            <img
                              src={Publication?.image_url}
                              style={{
                                float: "left",
                                margin: "7px 50px 7px 0",
                              }}
                              class="img-fluid"
                              alt="..."
                              width="540"
                              height="360"
                            />
                            {Publication?.caption}
                          </p>
                        </div>
                      </div>
                      <div class="align-items-center row">
                        <div class="order-lg-1 pb-3 pt-3">
                          <div class="fs-6 pb-3 pt-3 text-dark">
                            <p class="fw-light mb-0 text-start"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section class="bg-light">
                    <div class="container d-flex d-lg-flex flex-column flex-lg-row pb-4">
                      <PublicationComments Comments={comments.results}>
                        {pages.length>0 && (
                          <CustomPagination
                            currentPage={page}
                            setPage={setPage}
                            NextFunction={next}
                            PrevFunction={prev}
                            Pages={pages}
                          />
                        )}
                      </PublicationComments>
                      <CreateComment Publication={Publication} />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-light pb-5 text-secondary">
          <div class="container">
            <div class="justify-content-center row">
              <h4 class="bg-gradient bg-success fw-bold mb-0 text-center text-uppercase text-white">
                К другим новостям
              </h4>

              <PublicationsList Row />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PublicationDetails;
