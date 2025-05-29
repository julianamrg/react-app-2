
const Company = ({element, handleDeleteCompany}) => {
  
const userRole = localStorage.getItem('USER_ROLE');

    
  return (
    <tr>
      {/*renderizando las filas de las empresas de la tabla */ }

        <th> {element.id} </th>
        <td> {element.nit} </td>
        <td> {element.name} </td>
        <td> {element.address} </td>
        <td> {element.phone} </td>
        
          {userRole === 'admin' && (
        <td> 
          <button className='button is-light' 
             onClick={() => handleDeleteCompany(element.id)}
          >
            <strong> Eliminar </strong>      
          </button>
        </td>
        )}
    </tr>
  )
}

export default Company