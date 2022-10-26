import CustomPagination from "../../../UI/CustomPagination/CustomPagination";
import HomeNewsItem from "./HomeNewsItem";

function HomeNews({ publications }) {
  return (
    <div>
      <div className="bg-light rounded text-secondary">
        <h5 className="bg-gradient bg-success fw-bold mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">
          новости
        </h5>
        <div className="ps-3 pe-3">
          {publications?.map((publicationsItem) => (
            <HomeNewsItem publicationsItem={publicationsItem} />
          ))}

        </div>
      </div>
    </div>
  );
}

export default HomeNews;
