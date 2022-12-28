document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState = "Complete"){
        console.log("readyState:Complete"); 
         initApp();
    }
    }, false)
    
    
    const initApp =()=>{
    const form = document.getElementById('form')
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
    
        validateInputs();
    });
    
    }
const validEmail =(email)=>{
    const emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailvalid.test(String(email).toLowerCase());
    }
    
    const setError = (element, message)=>{
        const inputControl = element.parentElement;
        const displayError = inputControl.querySelector(".error");
        
    displayError.innerText= message
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
    
    
    } 
    const setSuccess = (element)=>{
        const inputControl = element.parentElement;
        const displayError = inputControl.querySelector(".error");
        
        displayError.innerText=""
        inputControl.classList.remove("error");
        inputControl.classList.add("success");
        
        
        } 
                    
    const emailAddress=document.getElementById("emailAddress");
    
    const validateInputs = ()=>{
    const emailAddressValue = emailAddress.value.trim();

        if(emailAddressValue ===""){
            setError(emailAddress, "Email cannot be empty")
     
        }else if(!validEmail(emailAddressValue)){
         setError(emailAddress, "Please provide a valid email address")
     
        }else{
            setSuccess(emailAddress);
        }
    }