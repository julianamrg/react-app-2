import React, { useContext, useState } from 'react'
// Asegúrate de importar el contexto

export const Product = ({ element, handleDeleteProduct, setIsActiveModalUpdate, isActiveModalUpdate }) => {

localStorage.getItem('USER_ROLE');



  return (
    <>
      <tr>
        {/*renderizando las filas de los productos de la tabla */}
        <th> {element.id} </th>
        <td> {element.code} </td>
        <td> {element.name} </td>
        <td> {element.descrip} </td>
        <td> {element.amount} </td>
        
           {'USER_ROLE' === 'admin' && (
        <td>
            <button className='button is-light'
              onClick={() => handleDeleteProduct(element.id)}
            >
              <strong> Eliminar </strong>
            </button>
        </td>
          )}
         
      </tr>
    </>
  )
}
