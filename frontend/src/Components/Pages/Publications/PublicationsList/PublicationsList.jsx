import CustomPagination from "../../../UI/CustomPagination/CustomPagination";
import PublicatonsListItem from "./PublicationsListItem";

function PublicationsList({publications, Row = false}) {
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
                            <CustomPagination Pages={[1, 2, 3, 4, 5, 6]}/>
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
