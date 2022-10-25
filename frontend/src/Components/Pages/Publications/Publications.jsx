import PublicationsList from "./PublicationsList/PublicationsList";

function Publications() {
  const Publications = [
    {
      id: 0,
      name: "Верхне-Алиинское месторождение",
      created: "10 сентября 2022",
      link: "/link",
      description:
        " Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.",
      preview:
        "https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg",
    },
    {
      id: 1,
      name: "Верхне-Алиинское месторождение",
      created: "12 сентября 2022",
      link: "/link",
      description:
        " Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.",
      preview:
        "https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg",
    },
    {
      id: 2,
      name: "Верхне-Алиинское месторождение",
      created: "13 сентября 2022",
      link: "/link",
      description:
        " Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.",
      preview:
        "https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg",
    },
    {
      id: 3,
      name: "Верхне-Алиинское месторождение",
      created: "14 сентября 2022",
      link: "/link",
      description:
        " Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.",
      preview:
        "https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg",
    },
    {
      id: 4,
      name: "Верхне-Алиинское месторождение",
      created: "15 сентября 2022",
      link: "/link",
      description:
        " Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.",
      preview:
        "https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg",
    },
    {
      id: 5,
      name: "Верхне-Алиинское месторождение",
      created: "16 сентября 2022",
      link: "/link",
      description:
        " Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.",
      preview:
        "https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg",
    },
  ];
  return (
    <>
      <div class="container mt-4">
        <form class="d-flex flex-column">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Поиск по месторождению
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Дарасунский"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlSelect1" class="form-label">
              Поиск по совпадению в тексте
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlSelect1"
              placeholder="реки"
            />
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-success d-flex justify-content-center m-2 w-25"
            >
              Поиск
            </button>
          </div>
        </form>
      </div>
      <PublicationsList Publications={Publications} />
    </>
  );
}

export default Publications;
