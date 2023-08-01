const form=document.querySelector('form');
const input=document.getElementById('temp');
const select=document.getElementById('temp_diff');
const resultcontainer=document.getElementById('resultcontainer');
form.addEventListener('submit',(event)=>{
    event.preventDefault();

const temperature=input.value;
const temperatureType=select.value;

let convertedtemperature;
if( temperatureType==='cel'){
    convertedtemperature=(temperature*1.8)+32;
    resultcontainer.textContent=`${temperature}°C = ${convertedtemperature}°F`;
}
else
{
    convertedtemperature=(temperature-32)/1.8;
    resultcontainer.textContent=`${temperature}°C = ${convertedtemperature}°F`;
}
input.value='';
});