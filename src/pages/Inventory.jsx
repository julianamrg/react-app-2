import React from 'react'

export const Inventory = ({element}) => {
  return (
    <>
    <tr>
      {/*renderizando las filas de los inventarios de la tabla */ }
        <th> {element.id} </th>
        <td> {element.producto} </td>
        <td> {element.cantidad} </td>
        <td> {element.empresa} </td>
        
    </tr>
    
    
    
    </>
  )
}
