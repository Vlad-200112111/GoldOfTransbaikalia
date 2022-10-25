function CustomTable({THead, TRows, TRowsType = 'default', children}) {
    return ( 
        <table class="table table-striped table-sm">
              <thead>
                {<tr>
                    {
                        THead?.map(th=>
                              <th>{th}</th>  
                            )
                    }
                 
                </tr>}
              </thead>
              <tbody>
                {TRowsType === 'list'?
                    TRows?.map(tr=>
                        <tr>
                            {tr.map(td=>
                                    <td>{td}</td>
                                )}
                        </tr>
                        )
                        :
                  TRowsType === 'default'?
                      children:''
                }
              </tbody>
            </table>
     );
}

export default CustomTable;