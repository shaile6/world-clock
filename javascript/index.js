function updateTime() {
  // PARIS
  let parisElement = document.querySelector("#paris");
  // let parisDateElement = document.querySelector("#paris .date");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  // JOHANNESBURG
  let johannesburgElement = document.querySelector("#johannesburg");
  // let johannesburgDateElement = document.querySelector("#johannesburg .date");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");
  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // ASMARA
  let asmaraElement = document.querySelector("#asmara");
  // let asmaraDateElement = document.querySelector("#asmara .date");
  let asmaraDateElement = asmaraElement.querySelector(".date");
  let asmaraTimeElement = asmaraElement.querySelector(".time");
  let asmaraTime = moment().tz("Africa/Asmara");
  asmaraDateElement.innerHTML = asmaraTime.format("MMMM Do YYYY");
  asmaraTimeElement.innerHTML = asmaraTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
