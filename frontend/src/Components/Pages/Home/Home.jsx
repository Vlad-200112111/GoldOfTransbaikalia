import HomeBanner from '../../../Assets/Images/HomeBanner.jpg'
import HomeComments from './Comments/HomeComments';
import HomeNews from './News/HomeNews';
import logo8 from '../../../Assets/Images/logo-8.svg'
import logo7 from '../../../Assets/Images/logo-7.svg'
import logo6 from '../../../Assets/Images/logo-6.svg'
import logo5 from '../../../Assets/Images/logo-5.svg'
import logo3 from '../../../Assets/Images/logo-3.svg'
import logo2 from '../../../Assets/Images/logo-2.svg'
import logo4 from '../../../Assets/Images/logo-4.svg'
import logo1 from '../../../Assets/Images/logo-1.svg'
function Home() {
    const Comments = [
        {id: 0, user:{userId:1, name:"UserName", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        {id: 1, user:{userId:12, name:"UserName12", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        {id: 2, user:{userId:13, name:"UserName13", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        {id: 3, user:{userId:11, name:"UserName11", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        {id: 4, user:{userId:12, name:"UserName12", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        {id: 5, user:{userId:1, name:"UserName", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"}
    ]
    const News = [
        {id:0, name: "Верхне-Алиинское месторождение", created: "10 сентября 2022", link:"/publication-details/0", description:" Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.", preview:"https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg"},
        {id:1, name: "Верхне-Алиинское месторождение", created: "12 сентября 2022", link:"/publication-details/1", description:" Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.", preview:"https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg"},
        {id:2, name: "Верхне-Алиинское месторождение", created: "13 сентября 2022", link:"/publication-details/2", description:" Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.", preview:"https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg"},
        {id:3, name: "Верхне-Алиинское месторождение", created: "14 сентября 2022", link:"/publication-details/3", description:" Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.", preview:"https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg"},
        {id:4, name: "Верхне-Алиинское месторождение", created: "15 сентября 2022", link:"/publication-details/4", description:" Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.", preview:"https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg"},
        {id:5, name: "Верхне-Алиинское месторождение", created: "16 сентября 2022", link:"/publication-details/5", description:" Верхне-Алиинское золоторудное месторождение расположено на территории Балейского района в 30 км восточнее города Балей.", preview:"https://nedradv.ru/_files/db.biznes-gazeta.ru/8cfab8ca24e0d950ab29a01d55ca77fb/images/1C089B4B-C019-4FB0-B3114C5A3246DE7E.jpg"},
    ]
  return (
    <>
      <column>
        <section
          className="background-cover position-relative text-white-50"
          style={{backgroundImage: `url(${HomeBanner})`}}
          // style="background-image:url('images/1.jpg');"
        >
          <div className="container position-relative">
            <div className="mb-5 pb-5 row">
              <div className="col-md-10 col-xl-7 col-xxl-7 offset-md-1 offset-xl-1 pb-5 pt-5">
                <div className="overflow-hidden p-5 position-relative rounded">
                  <div style={{opacity:"85%"}} className="bg-white end-0 h-100 position-absolute top-0 w-100"></div>
                  <div className="position-relative">
                    <h1 className="display-3 fw-bold mb-4 text-dark">
                      Золото Забайкалья
                    </h1>
                    <p className="fs-3 text-dark">
                      История развития добычи золота в Забайкальском крае
                    </p>
                    <a
                      href="#"
                      className="btn btn-success pe-3 ps-4 pt-2 text-uppercase"
                    >
                      <span className="p-2">ЧИТАТь</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="ms-2 pb-1"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 50"
            className="d-block m-2 position-relative pt-3 text-white"
            fill="#f8f9fa"
          >
            <path d="M90 20h1260l40 80H50Z"></path>
          </svg>
        </section>
      </column>
      <section className="bg-light container d-lg-flex flex-lg-row text-secondary">
        <div className="col-lg-3">
          <section className="text-center">
            <div className="container pb-4 pt-3">
              <div className="align-items-center justify-content-center g-0 row">
                <HomeComments Comments={Comments} />
              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-9 d-lg-flex flex-lg-column ps-4">
          <section className="text-center">
            <div className="container pt-3">
              <div className="align-items-center justify-content-center g-0 row">
                <HomeNews News={News}/>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="bg-light pb-5 text-center">
            <div class="container"> 
                <h2 class="fw-bold mb-4">Ведомства</h2>
                <div class="justify-content-center row"> 
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo8} alt="" />
                        </div>                         
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo7} alt="" />
                        </div>                         
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo6} alt="" />
                        </div>                         
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo5} alt="" />
                        </div>                         
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo4} alt="" />
                        </div>                         
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo3} alt="" />
                        </div>                         
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo2} alt="" />
                        </div>                         
                    </div>
                    <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                        <div class="bg-white pb-4 ps-3 pe-3 pt-4">
                            <img src={logo1} alt="" />
                        </div>                         
                    </div>                     
                </div>                 
            </div>
        </section>
    </>
  );
}

export default Home;
