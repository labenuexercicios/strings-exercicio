// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    const nomeDoUsuario = prompt("qual seu nome?")
    const comida1 = prompt("diga uma comida")
    const comida2 = prompt("diga outra comida")
    const comida3 = prompt("diga uma ultima comida")
    const tresComidas = comida1
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    console.log("Estas são as comidas favoritas de " +nomeDoUsuario,"\n",comida1,"\n",comida2,"\n",comida3)
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>
    