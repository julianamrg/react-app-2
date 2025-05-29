import React, { useState } from 'react';
import { useGlobalState } from '../../contexts/GlobalStateContext';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { createCompany, fetchCompanies } from '../../services/api';
import Swal from "sweetalert2";

const CompanyForm = ({isActiveModalRegister, setIsActiveModalRegister}) => {
  

  // función para cerrar el modal con el botón de la x o el botón de Cancelar 
  const handleCloseModal = () => {
    setIsActiveModalRegister(false);
    // cambiando el estado del modal a falso
  }

  // Formulario inicial
  const initialForm = {
    nit: '',
    name: '',
    address: '',
    phone: '',
   }


   // estado inicial de la nueva empresa
   const [newCompany, setNewCompany] = useState(initialForm);

// función para capturar la información de las empresas de los inputs 
   const handleChange = ({target}) => {
      const { name, value } = target;
      setNewCompany((prevCompany) => 
        ({
        ...prevCompany,
        [name]: value,
      }));
  }

  // añadir una nueva empresa
const handleAddCompany = async (e) => {
        e.preventDefault();
        try {
            await createCompany(newCompany);
            setIsActiveModalRegister(false); // Cerrar modal
            showSuccessfulRegister(); // Mostrar modal de éxito
            fetchCompanies()
        } catch (error) {
            showErrorRegister(); // Mostrar alerta de error
        }
    };


 
// Alerta que muestra el registro existoso de una empresa
const showSuccessfulRegister =() =>{
 Swal.fire({
    title: "Registro exitoso",
    icon: "success",
    button: "Aceptar",
  });
}

// Alerta que muestra que hubo un error al registrar una empresa
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
      <p className="modal-card-title is-size-3 title-new-color"><strong> Creación de empresas </strong> </p>
      <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
    </header>

    <section className="modal-card-body">
      <form>
        <div className="field">
          <p className="modal-card-title"> NIT:</p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: 898989899-1"
                value={newCompany.nit}
                name="nit"
                onChange={handleChange}            
                />

            </div>
        </div>
      
      <div className="field">
        <p className="modal-card-title"> Nombre de la empresa: <br/> </p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: Empresa ABC"
                value={newCompany.name}
                name="name"
                onChange={handleChange}            
                />

            </div>
        
      </div>

      <div className="field">
        <p className="modal-card-title"> Dirección:  </p>
            <input 
            className="input" 
            type="text" 
            placeholder="ejemplo: carrera 12 #52-89"
            value={newCompany.address}
            name="address"
            onChange={handleChange}
            />
      </div>

      <div className="field">
        <p className="modal-card-title"> Telefono: <br/> </p>
            <div className='control'>
                <input 
                className="input" 
                type="text" 
                placeholder="Ejemplo: +57 315 204 4186"
                value={newCompany.phone}
                name="phone"
                onChange={handleChange}            
                />
            </div>
        
      </div>
      </form>
    </section>
    <footer className="modal-card-foot">
      <button className="button is-info is-size-6 addUser-btn" 
        onClick={handleAddCompany}
      > Crear empresa </button>

      <button className="button" onClick={handleCloseModal}> Cancelar </button>
    </footer>
  </div>
</div>

    );
};

export default CompanyForm;