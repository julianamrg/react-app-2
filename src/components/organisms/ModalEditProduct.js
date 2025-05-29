import React, { useState } from 'react'

export const ModalEditProduct = (productId, setIsActiveModalUpdate, isActiveModalUpdate) => {


const handleCloseModal = () => {
    setIsActiveModalUpdate(false);
    // cambiando el estado del modal a falso
  }


const initialForm = {
    code: "",
    name: "",
    descrip: "",
    amount: "",
};

    const [productsData, setProductsData] = useState(initialForm);

    // Capturar datos del formulario
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProductsData((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // Enviar solicitud PUT para actualizar empresa
    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(productId, productsData);
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



    return (
   
   <>

      <div className={isActiveModalUpdate ? 'is-active modal' : 'modal'}>
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
                value={productsData.code}
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
                value={productsData.name}
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
            value={productsData.descrip}
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
                value={productsData.amount}
                name="amount"
                onChange={handleChange}            
                />
            </div>
        </div>

      </form>
    </section>
    <footer className="modal-card-foot">
      <button className="button is-info is-size-6 addUser-btn" 
        onClick={handleUpdateProduct}
      > Editar producto </button>

      <button className="button" onClick={handleCloseModal}> Cancelar </button>
    </footer>
  </div>
</div>
    </>
  )
}
