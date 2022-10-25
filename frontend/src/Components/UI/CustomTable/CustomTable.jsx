function CustomTable({THead, TRows}) {
    return ( 
        <table class="table table-striped table-sm">
              <thead>
                <tr>
                    {
                        THead?.map(th=>
                              <th>{th}</th>  
                            )
                    }
                 
                </tr>
              </thead>
              <tbody>
                {
                    TRows?.map(tr=>
                        <tr>
                            {tr.map(td=>
                                    <td>{td}</td>
                                )}
                        </tr>
                        )
                }
                <tr>
                  <td>1,001</td>
                  <td>Рога и копыта</td>
                  <td>
                    <button type="button" class="btn btn-success">
                      Подробнее
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>Золото ПРО</td>
                  <td>
                    <button type="button" class="btn btn-success">
                      Подробнее
                    </button>{" "}
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>Золото Заб</td>
                  <td>
                    <button type="button" class="btn btn-success">
                      Подробнее
                    </button>{" "}
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
     );
}

export default CustomTable;