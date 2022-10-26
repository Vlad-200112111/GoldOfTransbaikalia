import { Children } from "react";
import CustomPagination from "../../../UI/CustomPagination/CustomPagination";
import PublicatonsListItem from "./PublicationsListItem";

function PublicationsList({publications, Row = false, children }) {
    return (
        <>
            {
                !Row &&
                <section class="bg-light text-secondary">
                    <div class="container">
                        <div class="ps-3 pe-3">
                            {
                                publications?.map((publication) => (
                                        <PublicatonsListItem publiction={publication}/>
                                    )
                                )
                            }
                            {children}
                        </div>
                    </div>
                </section>
            }
            {
                Row && publications?.map((publication) => (
                    <PublicatonsListItem
                        Row={Row}
                        Publiction={publication}
                    />
                ))
            }
        </>

    );
}

export default PublicationsList;
