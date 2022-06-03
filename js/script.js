

const h1 = document.querySelector("section.data h1.data");
const hours = document.querySelector("section.hora article.horas");
const minutes = document.querySelector("section.hora article.minutos");
const seconds = document.querySelector("section.hora article.segundos");

function toFormate(unit){
    return `${String(unit).length === 1? `0${unit}`: unit }`;
}
function weekDays(day){
    let vet = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return vet[day];
}
function months(unit){
    let vet = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return vet[unit];
}
function dateCurrent(){
    const date = new Date();
    const weekDay = weekDays( date.getDay() );
    const dayMonth = toFormate( date.getDate() );
    const month = months( date.getMonth() );
    const year = date.getFullYear();

    h1.innerHTML = ` ${weekDay}, ${dayMonth} de ${month} de ${year} `;    
}
setInterval(dateCurrent, 1000);

function timeCurrent(){
    const time = new Date();
    const timeHours = toFormate(time.getHours());
    const timeMinutes = toFormate(time.getMinutes());
    const timeSeconds = toFormate(time.getSeconds());

    hours.innerHTML = timeHours;
    minutes.innerHTML = timeMinutes;
    seconds.innerHTML = timeSeconds;
}
setInterval(timeCurrent,1000)

