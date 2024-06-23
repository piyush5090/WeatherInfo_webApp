let data = document.querySelector("#holder");
let btn = document.querySelector("#btn");
let res = document.querySelector("#res");
let result = document.querySelector("#result");

let urlLoc1="https://geocode.maps.co/search?q";
let urlLoc2="api_key=665b78a97cfa3456965500cbaed795c";
;
btn.addEventListener("click",async function(){
    let value=data.value;
    data.value ="";
    const newUrlLoc = `${urlLoc1}=${value}&${urlLoc2}`;
    let res = await fetch(newUrlLoc);
    let data2=await res.json();
   result.innerText="";
   let urlW1 = "https://api.open-meteo.com/v1/forecast?latitude";
   let urlW2 = "longitude";
   let urlW3 = "&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
   const urlWF = `${urlW1}=${data2[0].lat}&${urlW2}=${data2[0].lon}&${urlW3}`;
   let res2 = await fetch(urlWF);
   let data3= await res2.json();
   console.log(data3);
   let tem = data3.current.temperature_2m;
    let wSpeed = data3.current.wind_speed_10m;
   console.log(tem);
   //console.log(wSpeed)cd;
    let result2 = document.createElement("p");
    result2.innerText = `Temperature in ${value} is ${tem} degree celcius`;
    result.append(result2);
    
})
