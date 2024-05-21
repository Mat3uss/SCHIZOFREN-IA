const button = document.getElementById('login')


const validarLogin = async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const urlLogin = 'https://back-login.vercel.app/usuarios'

    const listUsers = await fetch(urlLogin)

    const objUsers = await listUsers.json()

    if (email == '' || password == ''){
        alert('Por Favor Preencha todos os Campos !!')
    } else {

        let validaUser = false

        console.log(objUsers)
        objUsers.forEach(user => {
        
            if(user.email == email && user.senha == password){
                alert('funciona')
                validaUser = true
                window.location.href = './telaprincipal.html'
                console.log(email)
                console.log(password)
            }
        });

        if (!validaUser){
            alert('Por favor verifique o email e senha !!')
        }

    }

}




button.addEventListener('click', () => {
    validarLogin()
})