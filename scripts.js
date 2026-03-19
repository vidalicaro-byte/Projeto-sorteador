const button = document.querySelector("button");




button.addEventListener("click", function () {


    
    

    const minInput = Math.ceil(Number(document.querySelector(".input1").value));
    const maxInput = Math.floor(Number(document.querySelector(".input2").value));
    const randomNumber = Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;

   if (minInput > maxInput) {
        alert("O primeiro número deve ser menor que o segundo número. Por favor, insira os valores corretamente.");

     }

     else  alert(`O número sorteado é: ${randomNumber}`);

}
)