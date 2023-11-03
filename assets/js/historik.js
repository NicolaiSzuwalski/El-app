
let currentDate = new Date();
let day = currentDate.getDate().toString().padStart(2, "0");
let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); 
let year = currentDate.getFullYear().toString();
const myUpdatedApiUrl = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_DK2.json`;

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
};


myFetchFunction();



// function displayCurrentDate() {
//     const dateElement = document.getElementById("date");
//     const date2Element = document.getElementById("date2");
//     const currentDate = new Date();
//     const day = currentDate.getDate().toString().padStart(2, "0");
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//     const year = currentDate.getFullYear();
//     const dateString = day + "-" + month + "-" + year;
//     dateElement.innerText = dateString;
//     date2Element.innerText = `Elpriserne D. ${dateString}`;
//     console.log(date2);
//   }

  
  // Initial call to display the current date
  displayCurrentDate();


