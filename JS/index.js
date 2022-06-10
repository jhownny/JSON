



function dataNascMinima(){
    let hoje = new Date()
    let dia = String(hoje.getDate()).padStart(2,'0')
    let mes = String(hoje.getMonth()+1).padStart(2,'0')
    let ano = hoje.getFullYear()
    return `${ano-16}-${mes}-${dia}`
}
let data = document.querySelector(`input[type="date"]`) 
data.value = dataNascMinima()
console.log(dataNascMinima())