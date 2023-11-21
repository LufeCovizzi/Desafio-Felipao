nomeHeroi = prompt ("Digite o nome do seu herói: ")
levelHeroi = prompt ("Qual a quantidade de XP do seu herói? ")

if (levelHeroi <= 1000) {
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Ferro")
} 
if (levelHeroi > 1000 && levelHeroi <=2000){
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Bronze")
} 
if (levelHeroi > 2000 && levelHeroi <=5000){
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Prata")
} 
if (levelHeroi > 5000 && levelHeroi <=7000){
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Ouro")
} 
if (levelHeroi > 7000 && levelHeroi <=8000){
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Platina")
} 
if (levelHeroi >8000 && levelHeroi <=9000){
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Ascendente")
} 
if (levelHeroi >9000 && levelHeroi <=10000){
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Imortal")
} 
if (levelHeroi > 10000) {
    console.log ("O Herói de nome " + nomeHeroi + "está no nível Radiante")
}
