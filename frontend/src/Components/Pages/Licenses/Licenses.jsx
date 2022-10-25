import CustomTable from "../../UI/CustomTable/CustomTable";

function Licenses() {
    const TableHead = ['# лицензии', 'Название организации', '']
  return (
    <>
      <h2 class="text-center">Лицензии</h2>
      <div class="container">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <form class="d-flex">
              <input
                class="border-success form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div class="container">
        <main class="col-lg-12 col-md-9 ms-sm-auto px-md-4">
          <div class="chartjs-size-monitor">
            <div class="chartjs-size-monitor-expand">
              <div class=""></div>
            </div>
            <div class="chartjs-size-monitor-shrink">
              <div class=""></div>
            </div>
          </div>
          <div class="table-responsive">
            <CustomTable THead={TableHead}/>
          </div>
        </main>
      </div>
    </>
  );
}

export default Licenses;
