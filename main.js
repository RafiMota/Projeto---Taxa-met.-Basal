
    let resultado
    let modGenero
    let genSelecionado, atvSelecionada
    let peso, altura, idade

    function attVal() {
        peso = document.getElementById("peso").value
        idade = document.getElementById("idade").value
        altura = document.getElementById("altura").value
    
        let radioBtnGen = document.querySelectorAll('input[name="genero"]')
        let radioBtnAtv = document.querySelectorAll('input[name="atividade"]')
    
        for(radioBtnAtv of radioBtnAtv) {
            if (radioBtnAtv.checked) {
                atvSelecionada = radioBtnAtv.value
                break;
            }
        }
    
        for(radioBtnGen of radioBtnGen) {
            if (radioBtnGen.checked) {
                genSelecionado = radioBtnGen.value
                break;
            
            }
        }

        /*  DEBUG
        console.log(genSelecionado)
        console.log(idade)
        console.log(atvSelecionada)
        */

        // Fórmula mais antiga

        // if(peso == 0 || idade == 0 || altura == 0 || genSelecionado == undefined || atvSelecionada == undefined) {
        //     document.getElementById("resultado").innerHTML = ""
        // } else {
        //     if (genSelecionado == "masculino") {
        //         resultado = parseFloat(atvSelecionada) * (66 + ((13.7 * parseInt(peso)) + (5 * parseInt(altura)) - (6.8 * parseInt(idade))))
        //     } else if (genSelecionado == "feminino") {
        //         resultado = parseFloat(atvSelecionada) * (655 + ((9.6 * parseInt(peso)) + (1.8 * parseInt(altura)) - (4.7 * parseInt(idade))))
        //     }
        //     document.getElementById("resultado").innerHTML = "Seu consumo diário é de " + parseInt(resultado) + "Kcal"
        // }

        // Fórmula Mifflin St Jeor

        if(peso == 0 || idade == 0 || altura == 0 || genSelecionado == undefined || atvSelecionada == undefined) {
            document.getElementById("resultado").innerHTML = ""
        } else {
            if (genSelecionado == "masculino") {
                resultado = parseFloat(atvSelecionada) * (5 + ((10 * parseInt(peso)) + (6.25 * parseInt(altura)) - (5 * parseInt(idade))))
            } else if (genSelecionado == "feminino") {
                resultado = parseFloat(atvSelecionada) * (-161 + ((10 * parseInt(peso)) + (6.25 * parseInt(altura)) - (5 * parseInt(idade))))
            }
            document.getElementById("resultado").innerHTML = "Seu consumo diário é de " + parseInt(resultado) + "Kcal"
        }
    }
    