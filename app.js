let userDob = document.getElementById("txtDob");
// console.log(document.getElementById("txtDob"));
// console.log(userDob);

function ageCalculator() {
  //collect input from HTML form and convert into date format
  //   var userDob = new Date(dob.value);
  //   console.log(userDob);

  var userinput = userDob.value;
  var dob = new Date(userinput);

  //check user provide input or not
  // if (userinput == null || userinput == '') {
  // 	document.getElementById("message").innerHTML = "**Choose a date please!";
  // 	return false;
  // }

  //execute if user entered a date
  // else {
  //extract and collect only date from date-time string
  var mdate = userinput.toString();
  var dobYear = parseInt(mdate.substring(0, 4), 10);
  var dobMonth = parseInt(mdate.substring(5, 7), 10);
  var dobDate = parseInt(mdate.substring(8, 10), 10);

  //get the current date from system
  var today = new Date("2023-01-29");
  //date string after broking
  var birthday = new Date(dobYear, dobMonth - 1, dobDate);

  //calculate the difference of dates
  var diffInMillisecond = today.valueOf() - birthday.valueOf();

  //convert the difference in milliseconds and store in day and year variable
  var year_age = Math.floor(diffInMillisecond / 31536000000);
  var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

  //when birth date and month is same as today's date
  // if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
  //   alert("Happy Birthday!");
  // }

  var month_age = Math.floor(day_age / 30);
  day_age = day_age % 30;

  var tMnt = month_age + year_age * 12;
  var tDays = tMnt * 30 + day_age;
  console.log("year :" + year_age);
  console.log("month :" + month_age);
  console.log("days :" + day_age);

  //DOB is greater than today's date, generate an error: Invalid date
  if (dob > today) {
    document.getElementById("result").innerHTML =
      "Invalid date input - Please try again!";
  }
  let totalDays = year_age * 365 + month_age * 30 + day_age;
  //   if (totalDays % 365 === 0) {
  //     console.log("perfect year");
  //   }
  if (totalDays > 1096 && totalDays < 2191) {
    console.log("between 3 to 6");
  }
  if (totalDays > 2191 && totalDays < 3286) {
    console.log("between 6 to 9");
  }
  if (totalDays > 3286 && totalDays < 4748) {
    console.log("between 9 to 13");
  }
  if (totalDays > 4748 && totalDays < 6206) {
    console.log("between 13 to 17");
  }
  console.log("totaldays:" + totalDays);

  if (year_age >= 3 && year_age <= 6) {
    // if (day_age < 1) {
    // console.log("3+ to 6");
    //   function getRandomNumber(min, max) {
    //     let step1 = max - min + 1;
    //     let step2 = Math.random() * step1;
    //     let result = Math.floor(step2) + min;
    //     return result;
    //   }
    //   function createArrayOfNumbers(start, end) {
    //     let myArray = [];
    //     for (let i = start; i <= end; i++) {
    //       myArray.push(i);
    //     }
    //     return myArray;
    //   }
    //   let numbersArray = createArrayOfNumbers(1, 1999);
    //   function randomRegistrationNumber() {
    //     if (numbersArray.length == 0) {
    //       return;
    //     }
    //     let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    //     let randomNumber = numbersArray[randomIndex];
    //     numbersArray.splice(randomIndex, 1);
    //     return "A" + randomNumber;
    //   }
    //   let id = randomRegistrationNumber();
    //   sessionStorage.setItem("RegistrationID", id);
    //   sessionStorage.setItem("ageGroup", "3+ to 6");
    // }
  }
  //   if (year_age > 6 && year_age <= 9) {
  //     if (day_age < 1) {
  //       console.log("6+ to 9");

  //   function getRandomNumber(min, max) {
  //     let step1 = max - min + 1;
  //     let step2 = Math.random() * step1;
  //     let result = Math.floor(step2) + min;
  //     return result;
  //   }

  //   function createArrayOfNumbers(start, end) {
  //     let myArray = [];
  //     for (let i = start; i <= end; i++) {
  //       myArray.push(i);
  //     }
  //     return myArray;
  //   }

  //   let numbersArray = createArrayOfNumbers(1, 1999);
  //   function randomRegistrationNumber() {
  //     if (numbersArray.length == 0) {
  //       return;
  //     }

  //     let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  //     let randomNumber = numbersArray[randomIndex];
  //     numbersArray.splice(randomIndex, 1);

  //     return "A" + randomNumber;
  //   }
  //   let id = randomRegistrationNumber();
  //   sessionStorage.setItem("RegistrationID", id);
  //   sessionStorage.setItem("ageGroup", "3+ to 6");
  // }
  //   }
  // } else {
  //   let ageString =
  //     year_age + " years " + month_age + " months " + day_age + " days";

  //   sessionStorage.setItem("ageString", ageString);
  //   sessionStorage.setItem("userYear", year_age);
  //   if (year_age >= 3 && year_age <= 6) {
  //     // function randomRegistrationNumber(min, max) { // min and max included
  //     //   return 'A' + Math.floor(Math.random() * (max - min + 1) + min)
  //     // }

  //     // let id = randomRegistrationNumber(1, 1999)
  //     function getRandomNumber(min, max) {
  //       let step1 = max - min + 1;
  //       let step2 = Math.random() * step1;
  //       let result = Math.floor(step2) + min;
  //       return result;
  //     }

  //     function createArrayOfNumbers(start, end) {
  //       let myArray = [];
  //       for (let i = start; i <= end; i++) {
  //         myArray.push(i);
  //       }
  //       console.log(myArray);

  //       return myArray;
  //     }

  //     let numbersArray = createArrayOfNumbers(0001, 1999);
  //     function randomRegistrationNumber() {
  //       if (numbersArray.length == 0) {
  //         // output.innerText = 'No More Random Numbers';
  //         return;
  //       }

  //       let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  //       let randomNumber = numbersArray[randomIndex];
  //       numbersArray.splice(randomIndex, 1);

  //       return "A" + randomNumber;
  //     }
  //     let id = randomRegistrationNumber();
  //     var s = document.getElementById("textAgeGroup");
  //     s.value = id;
  //     sessionStorage.setItem("RegistrationID", id);
  //     sessionStorage.setItem("ageGroup", "3+ to 6");
  //   }
  //   if (year_age >6  && year_age <= 9) {
  //     function getRandomNumber(min, max) {
  //       let step1 = max - min + 1;
  //       let step2 = Math.random() * step1;
  //       let result = Math.floor(step2) + min;
  //       return result;
  //     }

  //     function createArrayOfNumbers(start, end) {
  //       let myArray = [];
  //       for (let i = start; i <= end; i++) {
  //         myArray.push(i);
  //       }
  //       console.log(myArray);

  //       return myArray;
  //     }

  //     let numbersArray = createArrayOfNumbers(2000, 3999);
  //     function randomRegistrationNumber() {
  //       if (numbersArray.length == 0) {
  //         // output.innerText = 'No More Random Numbers';
  //         return;
  //       }

  //       let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  //       let randomNumber = numbersArray[randomIndex];
  //       numbersArray.splice(randomIndex, 1);

  //       return "B" + randomNumber;
  //     }
  //     // let id = randomRegistrationNumber();
  //     let id = randomRegistrationNumber();
  //     var s = document.getElementById("textAgeGroup");
  //     s.value = id;
  //     sessionStorage.setItem("RegistrationID", id);
  //     sessionStorage.setItem("ageGroup", "6+ to 9");
  //   }
  //   if (year_age > 9 && year_age <= 13) {
  //     function getRandomNumber(min, max) {
  //       let step1 = max - min + 1;
  //       let step2 = Math.random() * step1;
  //       let result = Math.floor(step2) + min;
  //       return result;
  //     }

  //     function createArrayOfNumbers(start, end) {
  //       let myArray = [];
  //       for (let i = start; i <= end; i++) {
  //         myArray.push(i);
  //       }
  //       console.log(myArray);

  //       return myArray;
  //     }

  //     let numbersArray = createArrayOfNumbers(4000, 5999);
  //     function randomRegistrationNumber() {
  //       if (numbersArray.length == 0) {
  //         // output.innerText = 'No More Random Numbers';
  //         return;
  //       }

  //       let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  //       let randomNumber = numbersArray[randomIndex];
  //       numbersArray.splice(randomIndex, 1);

  //       return "C" + randomNumber;
  //     }
  //     // let id = randomRegistrationNumber();
  //     let id = randomRegistrationNumber();
  //     var s = document.getElementById("textAgeGroup");
  //     s.value = id;
  //     sessionStorage.setItem("RegistrationID", id);
  //     sessionStorage.setItem("ageGroup", "9+ to 13");
  //   }
  //   if (year_age >13 && year_age <= 17) {
  //     function getRandomNumber(min, max) {
  //       let step1 = max - min + 1;
  //       let step2 = Math.random() * step1;
  //       let result = Math.floor(step2) + min;
  //       return result;
  //     }

  //     function createArrayOfNumbers(start, end) {
  //       let myArray = [];
  //       for (let i = start; i <= end; i++) {
  //         myArray.push(i);
  //       }
  //       console.log(myArray);

  //       return myArray;
  //     }

  //     let numbersArray = createArrayOfNumbers(6000, 7999);
  //     function randomRegistrationNumber() {
  //       if (numbersArray.length == 0) {
  //         // output.innerText = 'No More Random Numbers';
  //         return;
  //       }

  //       let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  //       let randomNumber = numbersArray[randomIndex];
  //       numbersArray.splice(randomIndex, 1);

  //       return "D" + randomNumber;
  //     }
  //     // let id = randomRegistrationNumber();

  //     let id = randomRegistrationNumber();
  //     var s = document.getElementById("textAgeGroup");
  //     s.value = id;

  //     sessionStorage.setItem("RegistrationID", id);
  //     sessionStorage.setItem("ageGroup", "13+ to 17");
  //   }

  // }
}
