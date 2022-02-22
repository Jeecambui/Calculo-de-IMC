const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do Peso :c';
        }else if (valorIMC < 25){
            classificacao = 'Com o Peso ideal :D';

        }else if(valorIMC < 30){
            classificacao = 'Um pouco acima do Peso';
        
        }else if(valorIMC < 35){
            classificacao = 'Está com obesidade Grau 1';

        } else if(valorIMC < 40){
            classificacao = 'Está com obesidade Grau 2';

        } else{
            classificacao = 'Está com obesidade Grau 3. Cuidado!';
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha os campos vazios';
    }

}

calcular.addEventListener('click', imc);