function ageCalculator() {
  var userinput = userDob.value;
  var dob = new Date(userinput);

  var dobYear = dob.getYear();
  var dobMonth = dob.getMonth();
  var dobDate = dob.getDate(); //get the current date from the system
  var now = new Date("2023-01-29"); //extract the year, month, and date from current date
  var currentYear = now.getYear();
  var currentMonth = now.getMonth();
  var currentDate = now.getDate(); //declare a variable to collect the age in year, month, and days
  var age = {};
  var ageString = ""; //get years
  yearAge = currentYear - dobYear; //get months
  if (currentMonth >= dobMonth)
    //get months when current month is greater
    var monthAge = currentMonth - dobMonth;
  else {
    yearAge--;
    var monthAge = 12 + currentMonth - dobMonth;
  } //get days
  if (currentDate >= dobDate)
    //get days when the current date is greater
    var dateAge = currentDate - dobDate;
  else {
    monthAge--;
    var dateAge = 31 + currentDate - dobDate;
    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  } //group the age in a single variable
  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };
  console.log("years" + age.years);
  console.log("month" + age.months);
  console.log("days" + age.days);
  let ageString =
    age.years + " years " + age.months + " months " + age.days + " days";
  sessionStorage.setItem("ageString", ageString);
  sessionStorage.setItem("userYear", age.years);

  let totalDays = age.years * 365 + age.months * 30 + age.days;
  console.log(totalDays);
  //for age group 3+ to 6
  if (totalDays > 1094 && totalDays < 2191) {
    console.log("3+ to 6");
    function getRandomNumber(min, max) {
      let step1 = max - min + 1;
      let step2 = Math.random() * step1;
      let result = Math.floor(step2) + min;
      return result;
    }

    function createArrayOfNumbers(start, end) {
      let myArray = [];
      for (let i = start; i <= end; i++) {
        myArray.push(i);
      }
      return myArray;
    }

    let numbersArray = createArrayOfNumbers(1, 1999);
    function randomRegistrationNumber() {
      if (numbersArray.length == 0) {
        return;
      }

      let randomIndex = getRandomNumber(0, numbersArray.length - 1);
      let randomNumber = numbersArray[randomIndex];
      numbersArray.splice(randomIndex, 1);

      return "A" + randomNumber;
    }
    let id = randomRegistrationNumber();
    sessionStorage.setItem("RegistrationID", id);
    sessionStorage.setItem("ageGroup", "3+ to 6");
  }
  //for age group 3+ to 6
  if (totalDays > 2190 && totalDays < 3286) {
    console.log("6+ to 9");
    function getRandomNumber(min, max) {
      let step1 = max - min + 1;
      let step2 = Math.random() * step1;
      let result = Math.floor(step2) + min;
      return result;
    }

    function createArrayOfNumbers(start, end) {
      let myArray = [];
      for (let i = start; i <= end; i++) {
        myArray.push(i);
      }

      return myArray;
    }

    let numbersArray = createArrayOfNumbers(2000, 3999);
    function randomRegistrationNumber() {
      if (numbersArray.length == 0) {
        // output.innerText = 'No More Random Numbers';
        return;
      }

      let randomIndex = getRandomNumber(0, numbersArray.length - 1);
      let randomNumber = numbersArray[randomIndex];
      numbersArray.splice(randomIndex, 1);

      return "B" + randomNumber;
    }
    // let id = randomRegistrationNumber();
    let id = randomRegistrationNumber();
    sessionStorage.setItem("RegistrationID", id);
    sessionStorage.setItem("ageGroup", "6+ to 9");
  }
  //for age group 3+ to 6
  if (totalDays >= 3286 && totalDays < 4746) {
    console.log("between 9+ to 13");
    function getRandomNumber(min, max) {
      let step1 = max - min + 1;
      let step2 = Math.random() * step1;
      let result = Math.floor(step2) + min;
      return result;
    }

    function createArrayOfNumbers(start, end) {
      let myArray = [];
      for (let i = start; i <= end; i++) {
        myArray.push(i);
      }
      //console.log(myArray);

      return myArray;
    }

    let numbersArray = createArrayOfNumbers(4000, 5999);
    function randomRegistrationNumber() {
      if (numbersArray.length == 0) {
        // output.innerText = 'No More Random Numbers';
        return;
      }

      let randomIndex = getRandomNumber(0, numbersArray.length - 1);
      let randomNumber = numbersArray[randomIndex];
      numbersArray.splice(randomIndex, 1);

      return "C" + randomNumber;
    }
    // let id = randomRegistrationNumber();
    let id = randomRegistrationNumber();
    sessionStorage.setItem("RegistrationID", id);
    sessionStorage.setItem("ageGroup", "9+ to 13");
  }
  //for age group 3+ to 6
  if (totalDays >= 4746 && totalDays < 6206) {
    function getRandomNumber(min, max) {
      let step1 = max - min + 1;
      let step2 = Math.random() * step1;
      let result = Math.floor(step2) + min;
      return result;
    }

    function createArrayOfNumbers(start, end) {
      let myArray = [];
      for (let i = start; i <= end; i++) {
        myArray.push(i);
      }
      //console.log(myArray);

      return myArray;
    }

    let numbersArray = createArrayOfNumbers(6000, 7999);
    function randomRegistrationNumber() {
      if (numbersArray.length == 0) {
        // output.innerText = 'No More Random Numbers';
        return;
      }

      let randomIndex = getRandomNumber(0, numbersArray.length - 1);
      let randomNumber = numbersArray[randomIndex];
      numbersArray.splice(randomIndex, 1);

      return "D" + randomNumber;
    }
    // let id = randomRegistrationNumber();

    let id = randomRegistrationNumber();
    sessionStorage.setItem("RegistrationID", id);
    sessionStorage.setItem("ageGroup", "13+ to 17");
  }
}
//   }
