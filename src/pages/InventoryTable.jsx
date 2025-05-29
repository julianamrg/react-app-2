import React from 'react'
import { Inventory } from './Inventory'

export const InventoryTable = () => {
  
const fakeData = [
{
    id: 1,
    producto: 'producto 2',
    cantidad: 4,
    empresa: "empresa 1"
  },
{
    id: 2,
    producto: 'producto 3',
    cantidad: 3,
    empresa: "empresa 2"
  },
{
    id: 3,
    producto: 'producto 3',
    cantidad: 6,
    empresa: "empresa 3"
  },
{
    id: 4,
    producto: 'producto 5',
    cantidad: 8,
    empresa: "empresa 4"
  },
]
  
  
  
    return (
    <>

<div className="hero halfheight fondo-company">
     
    <div className='hero-body' >
        <div className='nueva '>
            <div>
              <h1 className='is-size-2 title-color'> LISTA DE INVENTARIOS </h1>
            </div>
        </div>
     <div className='table-container is-centered margin-top'>
 
       <table className="table is-striped is-fullwidth is-bordered mb-2 is-hoverable">
         <thead className='is-size-3 is-narrow'>
             <tr>
               <th className='is-info'>N. </th>
               <th className='is-info'> PRODUCTO </th>
               <th className='is-info'> CANTIDAD </th>
               <th className='is-info'> EMPRESA </th>
             </tr>
         </thead>
  
   <tbody className='is-size-4'>

 {/*Si la data existe,  trae el componente de fila de la tabla  */}
    
      {fakeData?.map(element => (
        
         (    
            <Inventory
           key={element.id}
           element= {element} 
            />
      )
      ))}

          
     </tbody>
   </table>
         
      </div>
    </div>
  </div>

    </>
  )
}
