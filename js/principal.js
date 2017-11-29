var Pacientes = document.querySelectorAll(".paciente");
var Nome, Peso ,Altura , imc, element, continua,salvar ; 

salvar = document.querySelector("#adicionar-paciente");

for (var index = 0; index < Pacientes.length; index++) {
    
    continua = true;
    Paciente = Pacientes[index];
    Nome = Paciente.querySelector(".info-nome").textContent;
    Peso = Paciente.querySelector(".info-peso").textContent;
    Altura = Paciente.querySelector(".info-altura").textContent;

    //Peso
    if (Peso < 0 || Peso >= 1000 ) {
        console.log(Nome + " (Peso invalido.)");
        continua = false;
        Paciente.classList.add("peso-invalido"); 
    }
    // Altura
    if (Altura < 0 || Altura >= 3 ) {
        console.log(Nome + " (Altura invalida.)");
        continua = false;
        Paciente.classList.add("altura-invalida");
    }

    //Atribui IMC
    if (continua) {
        imc = calculaIMC(Peso,Altura);
        Paciente.querySelector(".info-imc").textContent = imc;    
    }
    else{
        Paciente.querySelector(".info-imc").textContent = "Invalido";
    }
}

salvar.addEventListener("click",Adicionar);

function Adicionar(event){ç
    event.preventDefault();
    var form,pacienteTr,nome,peso,altura,gordura,nomeTd,pesoTd,alturaTd,imcTd,gorduraTd,tabela ;
    
    form = document.querySelector("#form-adiciona");
        
    nome = form.nome.value;
    peso = form.peso.value;
    altura = form.altura.value;
    gordura = form.gordura.value;
    
    pacienteTr = document.createElement("tr");
   
    nomeTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");
    

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaIMC(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    console.log(imcTd);
        
}

function calculaIMC(var1,var2){

    return (var1/Math.pow(var2,2)).toFixed(2);

}
