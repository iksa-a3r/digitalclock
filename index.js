const hourEle=document.getElementById("hour");
const minEle=document.getElementById("min");
const secEle=document.getElementById("sec");
const amEle=document.getElementById("ampm");
const dayEle=document.getElementById("day");
function day(d){
if(d==0){
    let dayName="SUNDAY";
}
return dayName;
}
function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let d=new Date().getDay();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[d];
  
    let ap="AM";
       if(h>12){
        h=h-12;
        ap="PM";
    }
    if(h<10){
        h="0"+h;
    }
    m<10? m="0"+m:m;
    s<10? s="0"+s:s;
hourEle.innerText=h;
minEle.innerText=m;
secEle.innerText=s;
amEle.innerText=ap;
dayEle.innerText=today;


setInterval(updateClock, 1000);

}

updateClock();