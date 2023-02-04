
    // Pra homem
    // let resultado = 1.725 * (66 + ((13.7 * parseInt(peso)) + (5 * parseInt(altura)) - (6.8 * parseInt(idade))))

    //     Taxa de atividade:
    // Sedentários (pouco ou nenhum exercício) fator = 1.2
    // Levemente ativo (exercício leve 1 a 3 dias por semana) fator = 1.375
    // Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana) fator = 1.55
    // Altamente ativo (exercício pesado de 5 a 6 dias por semana) fator = 1.725
    // Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia) fator = 1.9
    

let resultado
let modGenero
let genSelecionado
let peso, altura, idade

function attVal() {
    let radioBtn = document.querySelectorAll('input[name="genero"]')

    for(radioBtn of radioBtn) {
        if (radioBtn.checked) {
            genSelecionado = radioBtn.value
            break;
        
        }
    }
    console.log(genSelecionado)


    if(peso == 0 || idade == 0 || altura == 0 || genSelecionado == undefined) {
        document.getElementById("resultado").innerHTML = ""
    } else {
        if (genSelecionado == "masculino") {
            resultado = 1.2 * (66 + ((13.7 * parseInt(peso)) + (5 * parseInt(altura)) - (6.8 * parseInt(idade))))
        } else if (genSelecionado == "feminino") {
            resultado = 1.2 * (655 + ((9.6 * parseInt(peso)) + (1.8 * parseInt(altura)) - (4.7 * parseInt(idade))))
        }

    }
    document.getElementById("resultado").innerHTML = parseInt(resultado) + "Kcal"
}

function getVal() {
    peso = document.getElementById("peso").value
    idade = document.getElementById("idade").value
    altura = document.getElementById("altura").value
    //{66 + [(13,7 x Peso(kg)) + ( 5 x Altura(cm)) – (6,8 x Idade(anos))]}



    // if (altura > 10) {
    //     document.getElementById("resultado").innerHTML = altura
    // } else {
    //     document.getElementById("resultado").innerHTML = altura
    // }
    
}