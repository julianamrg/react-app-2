import Company from './Company';
import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/company.css'
import CompanyForm from '../components/organisms/CompanyForm';
import { GlobalStateProvider, useGlobalState } from '../contexts/GlobalStateContext';
import Swal from 'sweetalert2';


export const CompanyTable = () => {
  


const [isActiveModalRegister, setIsActiveModalRegister] =  useState(false); // estado inicial del modal cuando está cerrado es falso
const {getCompanies, companies, setCompanies }= useGlobalState(); 
localStorage.getItem('USER_ROLE');


 // función para abril el modal para crear un nuevo usuario del botón de (+)
 const buttonRegisterCompany = () => {
  setIsActiveModalRegister(true);
}



useEffect(() => {
  
    getCompanies()
  }, [])



const handleDeleteCompany = (id) => {
 
    Swal.fire({
      title: '¿Estás seguro de eliminar esta empresa?',
      text: "Esta acción no puede revertirse",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: ' #408ecf',
      cancelButtonText: 'Cancelar',
    }).then(async(result) => {
      if (result.isConfirmed) {
        const updatedCompanies = companies.filter(company => company.id !== id);
        setCompanies(updatedCompanies);
        Swal.fire({
          title: 'Eliminado',
          text: 'La empresa ha sido eliminada.',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Ok'
        });
      }
    });
  };


  
    return (
  <>
  
  
<div className="hero halfheight">
     
    <div className='hero-body fondo-company' >
        <div className='nueva '>
            <div>
              <h1 className='is-size-2 title-color'> LISTA DE EMPRESAS </h1>
            </div>
            <div>  
              {'USER_ROLE' === 'admin' && (
              <button className="button  is-right is-info is-size-8 addUser-btn"
                onClick={buttonRegisterCompany}
              >
                <strong> Crear empresa + </strong> 
              </button>
              )}
            
            </div>
      </div>
     <div className='table-container is-centered margin-top'>
 
       <table className="table is-striped is-fullwidth is-bordered mb-2 is-hoverable">
         <thead className='is-size-3 is-narrow'>
             <tr>
               <th className='is-info'>N. </th>
               <th className='is-info'> NIT </th>
               <th className='is-info'> NOMBRE DE LA EMPRESA </th>
               <th className='is-info'> DIRECCIÓN </th>
               <th className='is-info'> TELÉFONO </th>
              {'USER_ROLE' === 'admin' && (
               <th className='is-info'> ACCIÓN </th>
              )}
             
             </tr>
         </thead>
  
   <tbody className='is-size-4'>

 {/*Si la data existe,  trae el componente de fila de la tabla  */}
     {companies?.map(element => (
        
       (    

        <Company
            key={element.id}
            element= {element}
            handleDeleteCompany={handleDeleteCompany}
        />
         
      )
      ))}
    
     </tbody>
   </table>
         
      </div>
    </div>
  </div>
  
  <CompanyForm
   isActiveModalRegister={isActiveModalRegister}
    setIsActiveModalRegister={setIsActiveModalRegister}
    
  />

  
  </>
  
  
       
  )
}

  
