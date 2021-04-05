import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units

function donePdf() {
  const doc = new jsPDF();
  alert("funciona");
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
}
