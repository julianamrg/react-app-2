import React, { useContext } from 'react';
import { GlobalStateContext, useGlobalState } from '../contexts/GlobalStateContext';
import usePDF from '../hooks/usePDF';
import { InventoryTable } from './InventoryTable';

const InventoryPage = () => {
    const { inventory } = useGlobalState();
    const { generatePDF } = usePDF();

    const handleDownloadPDF = () => {
        generatePDF(inventory);
    };

    return (
        <div>
            <InventoryTable/>

            <div className='fix-inventory'>
                <h1 className='is-size-3'>Inventario</h1>
                {/* <button className='button is-info is-size-6 addUser-btn' onClick={handleDownloadPDF}>Descargar PDF</button> */}
            
            </div>
        </div>
    );
};

export default InventoryPage;