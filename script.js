
let arrWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let arrMons = ["Jan" , "Feb" , "Mar" ,"Apr","May","June","Jul","Aug","Sept","Oct","Nov","Dec"];

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let format_24 = false;

function caller(){
  if(format_24){
    formatter_24();
  }

  else{
    formatter_12();
  } 
}

function formatter_12(){
  let date = new Date();
  let digit_date = date.getDate();
  let month_name = arrMons[date.getMonth()];
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridians = "am";
  
  if(minutes < 10){
    minutes = "0"+ minutes;
  }
  let seconds = date.getSeconds();
  
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  
  if(hours == 0){
    hours = 12;
  }
  
  else if(hours > 12){
    hours  = hours - 12;
    meridians = "pm";
  }

  
  let final_format = digit_date.toString()+"-"+month_name.toString()+"-"+year.toString()
  let time_format = hours.toString()+": "+minutes+": "+seconds+" "+meridians;
  document.getElementById('upper').innerText = final_format;
  document.getElementById('lower').innerText = time_format;

}

function formatter_24(){
  let date = new Date();
  let digit_date = date.getDate();
  let month_name = arrMons[date.getMonth()];
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  if(minutes < 10){
    minutes = "0"+ minutes;
  }
  let seconds = date.getSeconds();
  
  if(seconds < 10){
    seconds = "0" + seconds;
  }

  let final_format = digit_date.toString()+"-"+month_name.toString()+"-"+year.toString()
  let time_format = hours.toString()+": "+minutes+": "+seconds;
  document.getElementById('upper').innerText = final_format;
  document.getElementById('lower').innerText = time_format;
}

let Tid = setInterval(caller,1000);

function toggle_12(){
  format_24 = false;
}

function toggle_24(){
  format_24 = true;  
}

btn1.addEventListener("click", toggle_12);
btn2.addEventListener("click",toggle_24);
