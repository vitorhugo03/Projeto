
const init = () => {

const validateEmail= (event) =>{
    const input = event.currentTarget;
    const regex =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    const emailTest= regex.test(input.value);
    if(!emailTest){
        submitButton.setAttribute('disabled','disabled');
        input.nextElementSibling.classList.add('error');
    } else{
        submitButton.removeAttribute('disabled');
        input.nextElementSibling.classList.remover('error');
    }
}
const validatePassword = (event) => {
    const input = event.currentTarget;

    if(input.value.length < B){
        submitButton.setAttribute("disabled","disabled");
        input.nextElementSibling.classList.add('error');
    } else{
        submitButton.removeAttribute("disabled","disabled");
        input.nextElementSibling.classList.remove("error");
    }
}
    const inputEmail = document.querySelector('input[type="email"]');
    const inputpassword = document.querySelector('input[type="passord"]');
    const submitButton = document.querySelector('.login_submit');
    inputEmail.addEventListener('input',validatePassword)
    const errorHandler =() =>{
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent="Error :("
         }
         const sucessHandler = () =>{
            submitButton.classList.remove('error');
            submitButton.classList.add('success');
            submitButton.textContent = "sent! :)";
         }

    if(submitButton)('click',(event) =>{
        event.proventDefault();
       submitButton.textContent = "...loading";
        fetch('https://reqres.in/api/login',{
            method:'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputEmail.value,
                password: inputpassword.value,
            })
        }) .then((response) =>{
            if(response.status !==200){
              return  errorHandler();
            }
            succeessHandler();
        }) .catch(()=>{
            errorHandler();
        })
        
                
        })

    }

}
window.onload = init;