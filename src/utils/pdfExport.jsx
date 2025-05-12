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
    
    // Use window.print() as a simple alternative
    const printWindow = window.open('', '_blank');
    
    if (!printWindow) {
      throw new Error('Unable to open print window. Please check your popup blocker settings.');
    }
    
    // Get the resume container
    const element = document.getElementById(elementId);
    const resumeContainer = element.querySelector('.resume-container');
    
    if (!resumeContainer) {
      throw new Error('Resume container not found');
    }
    
    // Clone the resume container
    const clonedContent = resumeContainer.cloneNode(true);
    
    // Create print document
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${filename}</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              background-color: white;
            }
            .resume-container {
              width: 210mm;
              min-height: 297mm;
              padding: 0;
              margin: 0;
              background-color: white;
              box-shadow: none;
            }
            /* This is the key style that hides the buttons when printing */
            @media print {
              .no-print {
                display: none !important;
              }
            }
            /* Only show buttons on screen */
            .print-controls {
              position: fixed;
              top: 20px;
              right: 20px;
              display: flex;
              gap: 10px;
              z-index: 1000;
              background-color: rgba(255, 255, 255, 0.9);
              padding: 10px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .print-btn {
              background-color: #4f46e5;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-family: system-ui, -apple-system, sans-serif;
              font-size: 14px;
            }
            .print-btn:hover {
              background-color: #4338ca;
            }
            .close-btn {
              background-color: #6b7280;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-family: system-ui, -apple-system, sans-serif;
              font-size: 14px;
            }
            .close-btn:hover {
              background-color: #4b5563;
            }
          </style>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          <div class="resume-container">${clonedContent.innerHTML}</div>
          <div class="print-controls no-print">
            <button onclick="window.print()" class="print-btn">
              Print / Save as PDF
            </button>
            <button onclick="window.close()" class="close-btn">
              Close
            </button>
          </div>
          <script>
            // Prompt to print automatically after loading
            window.addEventListener('load', function() {
              // Small delay to ensure styles are loaded
              setTimeout(function() {
                // Uncomment the next line if you want automatic print dialog
                // window.print();
              }, 1000);
            });
          </script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Remove loading indicator
    document.body.removeChild(loadingDiv);
    
  } catch (error) {
    console.error('Error preparing document for print:', error);
    alert(`Error preparing document for print: ${error.message}`);
    
    // Remove loading indicator
    const loadingElement = document.body.querySelector('div[style*="position: fixed"]');
    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }
  }
};