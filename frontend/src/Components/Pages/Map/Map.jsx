function Map() {
  return (
    <div class="container m-4">
      <section class="bg-light pb-5 pt-5">
        <div class="container pb-4 pt-4">
          <div class="align-items-center row">
            <div class="background-center-center col-lg-6 ms-auto order-lg-2 py-3 text-center">
              <div class="card text-center">
                <div class="card-header">
                  <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                      <a
                        class="active bg-success link-success nav-link"
                        href="#"
                      >
                        Active
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Link
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <img
                    src="Screenshot%202022-09-11%20at%2018-12-15%20%D0%9A%D0%B0%D1%80%D1%82%D0%B0.png"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div></div>
            </div>
            <div class="col-lg-5 order-lg-1 py-3">
              <h3 class="fw-bold h2 mb-1">Наименование района</h3>
              <p class="fw-light mb-4">Информация о районе</p>{" "}
              <a href="#" class="btn btn-success">
                Подробнее
              </a>
              <a href="#" class="btn btn-success ms-2">
                Статистика района
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;
