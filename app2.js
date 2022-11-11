function TrocarValores() {
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    console.log(valor1, valor2)

    document.getElementById('n1').value = valor2
    document.getElementById('n2').value = valor1
}
function Somar(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
     
    let total = parseFloat(valor1) + parseFloat(valor2)

    document.getElementById('resposta').innerHTML= total
}
