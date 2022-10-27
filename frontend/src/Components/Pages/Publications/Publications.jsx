import PublicationsList from "./PublicationsList/PublicationsList";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CustomInput from "../../UI/CustomInput/CustomInput";
import CustomInputFile from "../../UI/CustomInputFile/CustomInputFile";
import api from "../../../Services/api";
import CustomPagination from "../../UI/CustomPagination/CustomPagination";

function Publications() {
  const [show, setShow] = useState(false);
  const [searchValueByTitle, setSearchValueByTitle] = useState("");
  const [searchValueByCaption, setSearchValueByCaption] = useState("");
  const [file, setFile] = useState();
  const [publications, setPublications] = useState([]);
  const [pages, setPages] = useState([]);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPublications(searchValueByTitle, searchValueByCaption, page).then(
      (Publications) => {
        setPublications(Publications);
        setPages(
          Array.from(
            { length: Math.ceil(Publications.count / limit) },
            (_, i) => i + 1
          )
        );
      }
    );
  }, [page]);

  const search = () => {
    getPublications(searchValueByTitle, searchValueByCaption).then((Publications) => {
      console.log(Publications);
      setPublications(Publications);
      setPages(
        Array.from(
          { length: Math.ceil(Publications.count / limit) },
          (_, i) => i + 1
        )
      );
      setPage(1);
    });
  };

  const resetSearch = (event) => {
    if(event.keyCode === 8 || event.keyCode === 46){
      getPublications().then((Publications)=>{
        setPublications(Publications)
        setPages(
          Array.from(
            { length: Math.ceil(Publications.count / limit) },
            (_, i) => i + 1
          )
        );
      })
    }
    
  }
  
  const handleShow = () => setShow(!show);
  const getPublications = async (title, caption, page=1) => {
    const { data: Publications } = await api.News.getNews({
      title: title,
      caption: caption,
      page: page,
    });
    return Publications;
  };
  const next = () => {
    if (publications.next) {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (publications.previous) {
      setPage(page - 1);
    }
  };

  async function createPublication(event) {
    console.log(page);
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("image_url", file);
    const { data: result } = api.News.createNews(formData).then(() => {
      getPublications(page).then((Publications) =>
        setPublications(Publications)
      );
      setPages(
        Array.from(
          { length: Math.ceil(publications.count / limit) },
          (_, i) => i + 1
        )
      );
    });
    setShow(false);
  }

  function onChangeFile(event) {
    setFile(event.target.files[0]);
  }

  return (
    <>
      <ModalWindow
        titleButton="Отправить на проверку"
        title="Публикация новости"
        show={show}
        handleClose={handleShow}
        body={
          <>
            <CustomInput
              type={"text"}
              title={"Название"}
              maxLength={"80"}
              name={"title"}
            />
            <CustomInput
              maxLength={"3000"}
              type={"text"}
              title={"Описание"}
              name={"caption"}
              typeInput={"textarea"}
            />
            <CustomInputFile name={"image"} onChange={onChangeFile} />
          </>
        }
        functionForModalWindow={createPublication}
      />
      <div class="container mt-4">
        <Button className="btn btn-success" onClick={handleShow}>
          Опубликовать новость
        </Button>
        <form class="d-flex flex-column">
          <div class="mb-3">
            <CustomInput
              onKeyDown={resetSearch} 
              value={searchValueByTitle}
              onChange={(ev) => setSearchValueByTitle(ev.target.value)}
              type={"text"}
              title={"Поиск по месторождению"}
              name={"title"}
            />
          </div>
          <div class="mb-3">
            <CustomInput
              onKeyDown={resetSearch} 
              value={searchValueByCaption}
              onChange={(ev) => setSearchValueByCaption(ev.target.value)}
              type={"text"}
              title={"Поиск по совпадению в тексте"}
              name={"title"}
            />
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              onClick={search}
              class="btn btn-success d-flex justify-content-center m-2 w-25"
            >
              Поиск
            </button>
          </div>
        </form>
      </div>
      <PublicationsList publications={publications?.results}>
        <CustomPagination
          currentPage={page}
          setPage={setPage}
          NextFunction={next}
          PrevFunction={prev}
          Pages={pages}
        />
      </PublicationsList>
    </>
  );
}

export default Publications;
