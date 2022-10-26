import CustomPagination from "../../../UI/CustomPagination/CustomPagination";
import PublicationCommentsItem from "./PublicationCommentsItem";

function PublicationComments({Comments, children}) {
  return (
        <div class="col-12 col-lg-6 p-3">
          <h3>Комментарии</h3>
          {
            Comments?.map(comment=>
                    <PublicationCommentsItem Comment={comment} />
                )
          }
          {children}
        </div>
  );
}

export default PublicationComments;
