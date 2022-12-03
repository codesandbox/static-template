const generatePdf = async (name)=>{
    const{PDFDocument, rgb} =PDFLib;
    const exBytes = await fetch("./cert.pdf").then((res)=> {return res.arrayBuffer()});
    const exFont=await fetch("./Sanchez-Regular.ttf").then(res=>{return res.arrayBuffer()});
    const pdfDoc= await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);
    const myFont=await pdfDoc.embedFont(exFont);
    const pages = pdfDoc.getPages();
    const FirstPg=pages[0];
    FirstPg.drawText(name,{
        x:270,
        y:270,
        size: 40,
        font: myFont,
        color: rgb(0, 0, 0)
    })
    const uri= await pdfDoc.saveAsBase64({dataUri: true});
    document.querySelector("#mypdf").src= uri;
    // saveAs(uri, "Aditya Mishra Foundation.pdf", {autoBom:true});
    
    const submitButton= document.getElementById("certification");
    const inputVal= document.querySelector(".first_name");
    const input_val=document.querySelector(".last_name");
    const certi=document.querySelector("#mypdf");
    submitButton.addEventListener("click",()=>{
        certi.style.display="block";
        const val= inputVal.value+" "+input_val.value;
        generatePdf(val);        
    })
    // window.open(uri);
    // const val= inputVal.value;
    // submitButton.
};


