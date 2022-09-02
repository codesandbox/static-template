<?php
require('fpdf/fpdf.php');
class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    
    // Arial bold 15
    $this->SetFont('Arial','B',18);
    // Movernos a la derecha
    $this->Cell(60);
    // Título
    $this->Cell(70,10,'Reporte General',0,0,'C');
    // Salto de línea
    $this->Ln(20);

    $this->Cell(100,10,'Nombre',0,0,'C');
    $this->Cell(45,10,'Apellido',0,0,'C');
    $this->Cell(45,10,'DNI',0,0,'C');
    $this->Cell(45,10,'Sede',0,0,'C');
    $this->Cell(45,10,'Codigo',0,0,'C');
    $this->Cell(45,10,'Asistencia',0,0,'C');
    $this->Cell(45,10,'Tardanza',0,0,'C');
    $this->Cell(45,10,'Falta',0,0,'C');
    $this->Cell(45,10,'Justificacion',0,0,'C');
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,utf8_decode('Pagina').$this->PageNo().'/{nb}',0,0,'C');
}
}
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,utf8_decode('¡Hola, Mundo!'));
$pdf->Output();
?>