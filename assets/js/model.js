const myApiUrl = "https://www.elprisenligenu.dk/api/v1/prices/2023/11-01_DK2.json";


let currentDate = new Date();
let day = currentDate.getDate().toString().padStart(2, "0");
let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); 
let year = currentDate.getFullYear().toString();
const myUpdatedApiUrl = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_DK2.json`;

const ligenu = document.getElementById("ligenu");
const oversigt = document.getElementById("oversigt");
const historik = document.getElementById("historik");
const prisLigenu = document.getElementById("prisLigenu");

// fetch function ********************************
async function myFetchFunction() {
    try {
        const response = await fetch(myUpdatedApiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Data conversion function ****************************
function convertData(data) {
    for (const key in data) {
        console.log(data[key])
    }
}

// View function ************************************************************ 
const prisLigenuTemplate = `KR` + ` PR. KWH`;

function view(SpecificData, viewID) {
    viewID.innerText = SpecificData[0].DKK_per_kWh + `${prisLigenuTemplate}`;
}



//timestamp function ************************************************************

function updateTime() {
    const timestampElement = document.getElementById("timestamp");
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const nextHour = currentHour + 1;
    const timeString = `${currentHour}:00-${nextHour}:00`;
    timestampElement.innerText = timeString;
  }
  
  // Initial call to display the current time
  updateTime();
  
  // Update the time every minute
  setInterval(updateTime, 60000);




// initialize function ********************************
async function initApp() {
    console.log("App running...");
    try {
        const data = await myFetchFunction();
        convertData(data)
        view(data, prisLigenu);
        updateTime();
    } catch (error) {
        console.error(error);
    }

}

// Call the function to initialize the app
initApp();




ligenu.addEventListener('click', (e) => {
    ligenu.classList.add("active");
    e.preventDefault();
});