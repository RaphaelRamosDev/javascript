var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if( hora >=5 && hora <=12){
    console.log('Bom dia!')
} else if (hora >= 13 && hora <=18){
    console.log('Boa Tarde!')
}else if ( hora <=4) {
    console.log('Boa Madrugada!')
}else{
    console.log('Boa Noite!')
}