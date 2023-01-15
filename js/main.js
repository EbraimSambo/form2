const form = document.querySelector('form');
const inputName = document.querySelector('#name')
const inputEnail = document.querySelector('#email')
const inputCreatd = document.querySelector('#pass-1')
const inputRaepit = document.querySelector('#pass-2')
const erro = document.querySelector('.er-1')
const erro2 = document.querySelector('.er-2')
const erro3 = document.querySelector('.er-3')
const erro4 = document.querySelector('.er-4')
const erroE = document.querySelector('.er-e')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    if(!InputVoid(inputName.value)){
        erro.classList.add('active');
        erro.innerHTML= 'O campo nome deve ser preenchido';
        inputName.classList.add('in-erro')
        return
    }else{
        erro.classList.remove('active');
        erro.innerHTML= '';
        inputName.classList.remove('in-erro')
    }

    if (!InputVoid(inputEnail.value)) {
        erro2.classList.add('active');
        erro2.innerHTML= 'O campo email deve ser preenchido'; 
        inputEnail.classList.add('in-erro')
        return
    }else{
        erro2.classList.remove('active');
        erro2.innerHTML= ''; 
        inputEnail.classList.remove('in-erro')
    }

    if (!CheckEmail(inputEnail.value)) {
        erroE.classList.add('active');
        erroE.innerHTML= 'Formato de Email não reconhecido';
        inputEnail.classList.add('in-erro')
        return
    }else{
        erroE.classList.remove('active');
        erroE.innerHTML= '';   
        inputEnail.classList.remove('in-erro')
    }

    if (!InputVoid(inputCreatd.value)) {
        erro3.classList.add('active');
        erro3.innerHTML= 'O campo senha deve ser preenchido'; 
        inputCreatd.classList.add('in-erro')
        return

    }else{
        erro3.classList.remove('active');
        erro3.innerHTML= ''; 
        inputCreatd.classList.remove('in-erro')
    }

    if (!CheckPass(inputCreatd.value,inputRaepit.value)) {
        erro4.classList.add('active');
        erro4.innerHTML= 'A senha de baixo não condiz com a de cima'; 
        inputRaepit.classList.add('in-erro')
        return

    }else{
        erro4.classList.remove('active');
        erro4.innerHTML= ''; 
        inputRaepit.classList.remove('in-erro')
    }

    alert('Dados em Processamento');
    form.reset();

})


function InputVoid(input) {

    if (input==="") {
       return  false;
    }
    return  true;
    
}

function CheckEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

function CheckPass(pass1,pass2) {
    
    if (pass1 === pass2) {
        return true;
    }

    return false;
}