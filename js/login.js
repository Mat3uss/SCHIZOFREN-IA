const button = document.getElementById('login')

const validarLogin = () =>{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value


    const url = 'https://back-login.vercel.app/usuarios'
    const ListUsers = await fetch(url)


    const users = await ListUsers.json()

    if(email == '' || password == ''){
        alert('Preencha os campos corretamente!!')
    }else{
        


    users.forEach(user => {

        if(user.email == email && user.senha == password)
        validaUser = true
        window.Location.href = '../src/screens/home.html'
        
    })
    if(!validaUser){
        alert('Usuario não cadastrado!!')
    }
    
    }
}




button.addEventListener('click', () =>{
    validarLogin()
})