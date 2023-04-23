function updateTime() {
  // PARIS
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    // let parisDateElement = document.querySelector("#paris .date");
    let parisTimeElement = parisElement.querySelector(".time");
    // let parisTimeElement = parisElement.querySelector("#paris .time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // JOHANNESBURG
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    // let johannesburgDateElement = document.querySelector("#johannesburg .date");
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");
    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // ASMARA
  let asmaraElement = document.querySelector("#asmara");
  if (asmaraElement) {
    // let asmaraDateElement = document.querySelector("#asmara .date");
    let asmaraDateElement = asmaraElement.querySelector(".date");
    let asmaraTimeElement = asmaraElement.querySelector(".time");
    let asmaraTime = moment().tz("Africa/Asmara");
    asmaraDateElement.innerHTML = asmaraTime.format("MMMM Do YYYY");
    asmaraTimeElement.innerHTML = asmaraTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
       `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
