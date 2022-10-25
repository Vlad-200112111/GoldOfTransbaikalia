import CustomPagination from "../../UI/CustomPagination/CustomPagination";
import CustomWhiteCard from "../../UI/CustomWhiteCard/CustomWhiteCard";

function Statistics() {
    const statistics = [
        {id:0, name:"Статистика по району 1", description:"Здесь содержится краткая информация об отчете по району с различной статистикой за такой то промежуток", created:"10.01.2022"},
        {id:1, name:"Статистика по району 2", description:"Здесь содержится краткая информация об отчете по району с различной статистикой за такой то промежуток", created:"10.01.2022"},
        {id:2, name:"Статистика по району 3", description:"Здесь содержится краткая информация об отчете по району с различной статистикой за такой то промежуток", created:"10.01.2022"},
        {id:3, name:"Статистика по району 4", description:"Здесь содержится краткая информация об отчете по району с различной статистикой за такой то промежуток", created:"10.01.2022"},
    ]
  return (
    <div class="container">
      <section class="bg-light pb-5 text-secondary">
        <div class="mt-4 pe-3 ps-3 ">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Поиск по статистике
              </label>
              
              <div style={{display:'flex',  gap:15}}>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
              <button
              type="button"
              class="btn btn-success col-2 w-25 "
              style={{ maxWidth: "150px", minWidth: "110px", height:'100%' }}
            >
              Поиск
            </button>  
              </div>
            </div>
          </form>
          <div class="text-end pe-3 ps-3">
            
          </div>
        </div>
        {
            statistics.map(statistic=>
                <CustomWhiteCard CardItem={statistic}>
                    <button
                    type="button"
                    class="btn btn-success mb-2 w-25"
                    style={{ maxWidth: "150px", minWidth: "110px" }}
                    >
                    Скачать
                    </button>
                </CustomWhiteCard>
                )
        }
        
        <CustomPagination Pages={[1,2,3,4]}/>
      </section>
    </div>
  );
}

export default Statistics;
