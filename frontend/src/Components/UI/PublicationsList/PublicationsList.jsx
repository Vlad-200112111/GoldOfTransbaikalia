import { Children } from "react";
import PublicatonsListItem from "./PublicationsListItem";

function PublicationsList({publications, Row = false, children }) {
    console.log(publications)
    return (
        <>
            {
                !Row &&
                <section class="bg-light text-secondary">
                    <div class="container">
                        <div class="ps-3 pe-3">
                            {
                                publications?.map((publication) => (
                                        <PublicatonsListItem publication={publication}/>
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
                        publication={publication}
                    />
                ))
            }
        </>

    );
}

export default PublicationsList;
