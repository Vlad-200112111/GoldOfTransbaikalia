import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import publicationDetailsImg from '../../../Assets/Images/publication-details.jpg'
import CreateComment from '../../UI/CreateComment/CreateComment';
import PublicationsList from '../Publications/PublicationsList/PublicationsList';
import PublicationComments from './PublicationComments/PublicationComments';
function PublicationDetails({Publication}) {
    const params = useParams()
    const Comments = [
        {id: 0, user:{userId:1, name:"UserName", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        {id: 1, user:{userId:12, name:"UserName12", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        {id: 2, user:{userId:13, name:"UserName13", lastName:"UserLastName", potronymic: "UserPotronymic"}, comment:"comment", link:"/link"},
        
    ]
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
      ];

      Publication = Publications.filter(el=>el.id === Number(params.id))[0]
      return ( 
        <section class="bg-light container d-lg-flex flex-lg-row text-secondary">
            <div class="col-lg-12 d-lg-flex flex-lg-column ps-4">
                <section class="text-center"> 
                    <div class="container pt-3"> 
                        <div class="align-items-center justify-content-center g-0 row"> 
                            <div> 
                                <div class="bg-light rounded text-secondary"> 
                                    <h4 class="bg-gradient bg-success fw-bold mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">{Publication?.name}</h4>
                                    <p class="text-dark">{Publication?.created}</p> 
                                    <div class="ps-3 pe-3">
                                        <div class="container pb-4"> 
                                            <div class="row"> 
                                                <div class="col-lg-12"> 
                                                    
                                                    <p style={{textAlign:"justify"}} >
                                                        <img src={Publication?.preview} style={{float:"left", margin: "7px 50px 7px 0"}} class="img-fluid" alt="..." width="540" height="360"/>
                                                         {Publication?.description}
                                                        </p>
                                                         
                                                </div>                                                 
                                                                                           
                                            </div>                                             
                                            <div class="align-items-center row">                                                  
                                                <div class="order-lg-1 pb-3 pt-3"> 
                                                    <div class="fs-6 pb-3 pt-3 text-dark">                                                          
                                                        <p class="fw-light mb-0 text-start"></p> 
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                                                                          
                                        </div>                                         
                                    </div>
                                    <section class="bg-light">
                                        <div class="container d-flex d-lg-flex flex-column flex-lg-row pb-4">
                                            <PublicationComments Comments={Comments} />
                                            <CreateComment Publication={Publication} />                                                                                         
                                        </div>                                         
                                    </section>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>                     
                </section>
                <section class="bg-light pb-5 text-secondary">
                    <div class="container"> 
                        <div class="justify-content-center row">                              
                            <h4 class="bg-gradient bg-success fw-bold mb-0 text-center text-uppercase text-white">К другим новостям</h4>
                            
                            <PublicationsList Row Publications={Publications}/>                                              
                        </div>                         
                    </div>                     
                </section>
            </div>
        </section>
     );
}

export default PublicationDetails;