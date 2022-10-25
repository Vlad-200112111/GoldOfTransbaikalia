function CustomWhiteCard({CardItem, children}) {
    return ( 
        <div class="container"> 
                    <div> 
                        <div class="m-3"> 
                            <div class="bg-white row shadow"> 
                                <div class="p-3"> 
                                    <h3 class="fw-bold h5 text-dark">{CardItem?.name}</h3> 
                                    <p class="mb-0">{CardItem?.description}</p> 
                                </div>                                 
                                <div class="d-flex justify-content-between mt-2" role="group" aria-label="Vertical button group">
                                    <h4 class="fw-bold h6 small text-secondary">{CardItem?.created}</h4>
                                    {children}
                                </div>
                            </div>                             
                        </div>                         
                    </div>                     
                </div>
     );
}

export default CustomWhiteCard;