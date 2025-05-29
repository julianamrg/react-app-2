import React, { useState, useContext } from 'react';
import { GlobalStateContext, useGlobalState } from '../../contexts/GlobalStateContext';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { createProduct, fetchProducts } from '../../services/api';
import Swal from "sweetalert2";

const ProductForm = ({isActiveModalRegister, setIsActiveModalRegister}) => {
    

// función para cerrar el modal con el botón de la x o el botón de Cancelar 
  const handleCloseModal = () => {
    setIsActiveModalRegister(false);
    // cambiando el estado del modal a falso
  }

  // Formulario inicial
  const initialForm = {
    code: '',
    name: '',
    descrip: '',
    amount: "",
   }



   // estado inicial del nuevo producto
   const [newProduct, setNewProduct] = useState(initialForm);

// función para capturar la información de los productos de los inputs 
   const handleChange = ({target}) => {
      const { name, value } = target;
      setNewProduct((prevProduct) => 
        ({
        ...prevProduct,
        [name]: value,
      }));
  }

  // añadir al nuevo producto
  const handleAddProduct = async (e) => {
          e.preventDefault();
          try {
              await createProduct(newProduct);
              setIsActiveModalRegister(false); // Cerrar modal
              showSuccessfulRegister(); // Mostrar modal de éxito
              fetchProducts()
          } catch (error) {
              showErrorRegister(); // Mostrar alerta de error
          }
      };


// Alerta que muestra el registro existoso de un producto
const showSuccessfulRegister =() =>{
 Swal.fire({
    title: "Registro exitoso",
    icon: "success",
    button: "Aceptar",
  });
}

// Alerta que muestra que hubo un error al registrar un producto
const showErrorRegister =() =>{
  Swal.fire({
    title: "No se pudo registrar :(",
    text: "Intentalo de nuevo",
    icon: "error",
    button: "Aceptar",
  });
}



    return (
      


        <div className={isActiveModalRegister ? 'is-active modal' : 'modal'}>
  <div className="modal-background"></div>
    <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title is-size-3 title-new-color"><strong> Creación de productos </strong> </p>
      <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
    </header>

    <section className="modal-card-body">
      <form>
        <div className="field">
          <p className="modal-card-title"> Código:</p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: 1234"
                value={newProduct.code}
                name="code"
                onChange={handleChange}            
                />

            </div>
        </div>
      
      <div className="field">
        <p className="modal-card-title"> Nombre del producto: <br/> </p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: Camiseta X"
                value={newProduct.name}
                name="name"
                onChange={handleChange}            
                />

            </div>
        
      </div>

      <div className="field">
        <p className="modal-card-title"> Caracteristicas:  </p>
            <input 
            className="input" 
            type="text" 
            placeholder="Hombre, hecha de algodón"
            value={newProduct.descrip}
            name="descrip"
            onChange={handleChange}
            />
      </div>

      <div className="field">
        <p className="modal-card-title"> Precio: <br/> </p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: $4"
                value={newProduct.amount}
                name="amount"
                onChange={handleChange}            
                />
            </div>
        </div>

      </form>
    </section>
    <footer className="modal-card-foot">
      <button className="button is-info is-size-6 addUser-btn" 
        onClick={handleAddProduct}
      > Crear producto </button>

      <button className="button" onClick={handleCloseModal}> Cancelar </button>
    </footer>
  </div>
</div>

    );
};

export default ProductForm;