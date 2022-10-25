import CustomPagination from "../../../UI/CustomPagination/CustomPagination";
import PublicatonsListItem from "./PublicationsListItem";

function PublicationsList({ Publications, Row=false }) {
  return (
    <>
      {
      !Row &&
      <section class="bg-light text-secondary">
      <div class="container">
        <div class="ps-3 pe-3">
          {Publications?.map((publication) => (
            <PublicatonsListItem Publiction={publication} />
          ))}
          <CustomPagination Pages={[1, 2, 3, 4, 5, 6]} />
        </div>
      </div>
    </section>
    }
    {
      Row && 
          Publications?.map((publication) => (
            <PublicatonsListItem Row={Row} Publiction={publication} />
          ))
    }
    </>
    
  );
}

export default PublicationsList;
