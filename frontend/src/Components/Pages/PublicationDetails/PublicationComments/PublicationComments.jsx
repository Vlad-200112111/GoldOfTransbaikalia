import CustomPagination from "../../../UI/CustomPagination/CustomPagination";
import PublicationCommentsItem from "./PublicationCommentsItem";

function PublicationComments({Comments}) {
  return (
        <div class="col-12 col-lg-6 p-3">
          <h3>Комментарии</h3>
          {
            Comments.map(comment=>
                    <PublicationCommentsItem Comment={comment} />
                )
          }
          <CustomPagination Pages={[1,2,3]} />
        </div>
  );
}

export default PublicationComments;
