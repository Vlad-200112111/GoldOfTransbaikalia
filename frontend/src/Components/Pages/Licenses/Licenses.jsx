import CustomTable from "../../UI/CustomTable/CustomTable";
import {useEffect, useState} from "react";
import api from "../../../Services/api";
import CustomPagination from "../../UI/CustomPagination/CustomPagination";
import { Link } from "react-router-dom";

function Licenses() {

    const TableHead = ['№', 'Название организации', 'Дата окончания', '']
    const [listLicenses, setListLicenses] = useState([])
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);
    const limit = 20

    
    const getLicenses = async (page= 1) => {
        const {data: Licenses} = await api.Licenses.getListLicenses(page)
        return Licenses
    }

    useEffect(() => {
            getLicenses(page).then((Licenses) => {
                    setListLicenses(Licenses)

                    setPages(

                        Array.from(
                            {length: Math.ceil(Licenses.count / limit)},
                            (_, i) => i + 1
                        )
                    );
                }
            )
        }
        , [page])

    const next = () => {
        if (listLicenses.next) {
            setPage(page + 1);
        }
    };
    
    const prev = () => {
        if (listLicenses.previous) {
            setPage(page - 1);
        }
    };


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
                        <CustomTable
                            THead={TableHead}>
                            {
                                listLicenses.results?.map((license, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{license.name}</td>
                                        <td>{license.end_date}</td>
                                        <td>
                                            <Link to={`/licenses-details/${license.id}`}>
                                            <button type="button" className="btn btn-success">Подробнее</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </CustomTable>
                        <CustomPagination
                            currentPage={page}
                            setPage={setPage}
                            NextFunction={next}
                            PrevFunction={prev}
                            Pages={pages}
                        />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Licenses;
