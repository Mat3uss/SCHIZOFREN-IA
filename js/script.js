const button = document.getElementById('botao-enviar')

//chave do professor vitor
const consultaGemini = async (question) => {

    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;


    //Estrutura para mandar pergunta (encontrada no gemini)
    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(requestData)
    }

    await fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const responseTextIa = data.candidates[0].content.parts[0].text
        respostaIa(responseTextIa)
    })
    .catch(error => console.error('Error: ', error))
}


const respostaIa = (responseTextIa) => {
    const textAreaPt = document.getElementById('retpt')
    console.log(responseTextIa);
    
    textAreaPt.textContent = responseTextIa
}


button.addEventListener('click', () => {
    const question = document.getElementById('secao-escrita').value
    console.log(question);
    
    consultaGemini(question)
})