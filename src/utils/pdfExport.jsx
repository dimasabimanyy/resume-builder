export const exportToPDF = async (elementId, filename) => {
  try {
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.textContent = 'Generating PDF...';
    loadingDiv.style.position = 'fixed';
    loadingDiv.style.top = '50%';
    loadingDiv.style.left = '50%';
    loadingDiv.style.transform = 'translate(-50%, -50%)';
    loadingDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    loadingDiv.style.color = 'white';
    loadingDiv.style.padding = '20px';
    loadingDiv.style.borderRadius = '5px';
    loadingDiv.style.zIndex = '9999';
    document.body.appendChild(loadingDiv);
    
    // Get the resume container
    const element = document.getElementById(elementId);
    const resumeContainer = element.querySelector('.resume-container');
    
    if (!resumeContainer) {
      throw new Error('Resume container not found');
    }
    
    // Import libraries
    const jspdfModule = await import('jspdf');
    const html2canvasModule = await import('html2canvas');
    
    // Create instances
    const jsPDF = jspdfModule.jsPDF;
    const html2canvas = html2canvasModule.default;
    
    // Create a clone of the resume container with clean styling
    const clonedContainer = resumeContainer.cloneNode(true);
    clonedContainer.style.width = '210mm';
    clonedContainer.style.backgroundColor = 'white';
    clonedContainer.style.position = 'absolute';
    clonedContainer.style.left = '-9999px';
    clonedContainer.style.boxShadow = 'none';
    document.body.appendChild(clonedContainer);
    
    try {
      // Create canvas
      const canvas = await html2canvas(clonedContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: 'white'
      });
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Convert canvas to image
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      // A4 dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate scaled dimensions
      const ratio = canvas.height / canvas.width;
      const width = pdfWidth;
      const height = width * ratio;
      
      // Add image to PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      
      // Handle multiple pages if needed
      if (height > pdfHeight) {
        let remainingHeight = height - pdfHeight;
        let position = -pdfHeight;
        
        while (remainingHeight > 0) {
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, width, height);
          position -= pdfHeight;
          remainingHeight -= pdfHeight;
        }
      }
      
      // Save the PDF
      pdf.save(filename);
      
    } finally {
      // Clean up the cloned container
      if (document.body.contains(clonedContainer)) {
        document.body.removeChild(clonedContainer);
      }
    }
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert(`Error generating PDF: ${error.message}`);
  } finally {
    // Remove loading indicator
    const loadingElement = document.body.querySelector('div[style*="position: fixed"]');
    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }
  }
};