import { useState } from 'react';
import { jsPDF } from 'jspdf';

const usePDF = () => {
    const [pdfData, setPdfData] = useState(null);

    const generatePDF = (data) => {
        const doc = new jsPDF();
        doc.text("Inventory Report", 20, 20);
        
        // Assuming data is an array of objects
        let y = 30;
        data?.forEach((item, index) => {
            doc.text(`${index + 1}. ${item.name} - ${item.price}`, 20, y);
            y += 10;
        });

        setPdfData(doc);
    };

    const downloadPDF = (filename) => {
        if (pdfData) {
            pdfData.save(filename);
        }
    };

    return { generatePDF, downloadPDF };
};

export default usePDF;