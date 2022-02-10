//compound calci
calculate=document.querySelector(".sip button");
calculate.addEventListener("click",()=>{
  principle= document.getElementById("principle").value;
interest=document.getElementById("interest").value;
periods=document.getElementById("periods").value;
resultsip=document.getElementById("resultsip");
let i= interest/100/12;
let total=0;
total= principle * ((Math.pow(1+i, periods)-1)/i)*(1+i);
resultsip.innerText=total;
})
