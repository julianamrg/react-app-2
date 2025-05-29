import React, { useContext, useState, useEffect } from 'react';
import { Product } from './Product';
import '../assets/styles/products.css'
import {  useGlobalState } from '../contexts/GlobalStateContext';
import ProductForm from '../components/organisms/ProductForm';
import Swal from 'sweetalert2';
import { updateCompany } from '../services/api';
import { ModalEditProduct } from '../components/organisms/ModalEditProduct';

export const ProductsTable = () => {
 
   
const [isActiveModalRegister, setIsActiveModalRegister] =  useState(false); // estado inicial del modal cuando está cerrado es falso
const {getProducts, products, setProducts }= useGlobalState();
const [isActiveModalUpdate, setIsActiveModalUpdate] =  useState(false);


 // función para abril el modal para crear un nuevo producto del botón de (+)
 const buttonRegisterProduct = () => {
  setIsActiveModalRegister(true);
}
 
useEffect(() => {
      getProducts()
  }, [])
 
 

const handleDeleteProduct = (id) => {
 
    Swal.fire({
      title: '¿Estás seguro de eliminar este producto?',
      text: "Esta acción no puede revertirse",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: ' #408ecf',
      cancelButtonText: 'Cancelar',
    }).then(async(result) => {
      if (result.isConfirmed) {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        Swal.fire({
          title: 'Eliminado',
          text: 'El producto ha sido eliminado.',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Ok'
        });
      }
    });
  };


 // Enviar solicitud PUT para actualizar empresa
    const handleUpdateCompany = async (e) => {
        e.preventDefault();
        try {
            await updateCompany(companyId, companyData);
            setIsActiveModalUpdate(false); // Cerrar modal
            showSuccessfulUpdate(); // Mostrar mensaje de éxito
        } catch (error) {
            showErrorUpdate(); // Mostrar mensaje de error
        }
    };

    // Alerta de actualización exitosa
    const showSuccessfulUpdate = () => {
        Swal.fire({
            title: "Actualización exitosa",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    };

    // Alerta de error en la actualización
    const showErrorUpdate = () => {
        Swal.fire({
            title: "No se pudo actualizar :(",
            text: "Inténtalo de nuevo",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    };


localStorage.getItem('USER_ROLE');



    return (
    <>
  
<div className="hero halfheight fondo-company">
     
    <div className='hero-body' >
        <div className='nueva '>
            <div>
              <h1 className='is-size-2 title-color'> LISTA DE PRODUCTOS </h1>
            </div>
            <div>
              {'USER_ROLE' === 'admin' && (
                <button className="button  is-right is-info is-size-8 addUser-btn"
                  onClick={buttonRegisterProduct}
                >
                  <strong> Crear producto + </strong>
                </button>
              )}
            </div>
      </div>
     <div className='table-container is-centered margin-top'>
 
       <table className="table is-striped is-fullwidth is-bordered mb-2 is-hoverable">
         <thead className='is-size-3 is-narrow'>
             <tr>
               <th className='is-info'>N. </th>
               <th className='is-info'> CODIGO </th>
               <th className='is-info'> NOMBRE DEL PRODUCTO </th>
               <th className='is-info'> CARACTERISTICAS </th>
               <th className='is-info'> PRECIO </th>
              
               {'USER_ROLE' === 'admin' && (
               <th className='is-info'> ACCIÓN </th>
              )}
             </tr>
         </thead>
  
   <tbody className='is-size-4'>

 {/*Si la data existe,  trae el componente de fila de la tabla  */}
    
      {products?.map(element => (
        
         (    

          <Product
           key={element.id}
           element= {element}
           handleDeleteProduct={handleDeleteProduct}
           handleUpdateCompany={handleUpdateCompany}
           setIsActiveModalUpdate={setIsActiveModalUpdate}
           isActiveModalUpdate={isActiveModalUpdate}
          />
      )
      ))}

          
     </tbody>
   </table>
         
      </div>
    </div>
  </div>
     
  <ProductForm
     isActiveModalRegister={isActiveModalRegister}
      setIsActiveModalRegister={setIsActiveModalRegister}
  />

  <ModalEditProduct
    isActiveModalUpdate={isActiveModalUpdate}
    setIsActiveModalUpdate={setIsActiveModalUpdate}
    />

    
    </>
  )
}
