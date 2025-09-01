import { DateTime } from "luxon";

 const birthInput = document.getElementById("birthDate");
const button = document.querySelector(".button");
const result = document.getElementById("result")

button.addEventListener("click", getBirtDate)

function getBirtDate() {
  const birtDateStr = birthInput.value 
  
  // console.log(birtDateStr);
  
  if  (!birtDateStr) {
    result.textContent = "please enter your birtdate"
    result.style.color = "red"
    
    setTimeout(() => {
      result.textContent = ""
    }, 2000)
  } else {
    const birtDate = DateTime.fromISO(birtDateStr)
    const dateNow = DateTime.now()

    // Caculate

    const years = dateNow.diff(birtDate, "years").years;
    const months = dateNow.diff(birtDate, "months").months;
    const days = dateNow.diff(birtDate, "days").days;


    result.textContent = `${Math.floor(years)} years, ${Math.floor(months)} months, ${Math.floor(days)} days old`
    
  }


}
