// js-practice-assignment 25
// ___________________________________________________________
// ques no 1
//Create a simple HTML page that shows the current date and time using JavaScript.

// Example Output:
// Today is: Tue Jun 11 2025  
// Current time is: 10:15:30 AM
// _____________ 
//  ans 
// var date = Date();
// console.log(date);
// console.log(typeof date);
// var date = new Date();
// console.log(typeof date);
// var currentDate = date.toLocaleDateString();
// console.log('The current date is : ' +currentDate);
// var currentTime = date.toLocaleTimeString();
// console.log('The current time is : ' + currentTime)
// _________________________________________________________________________________
// ques no 2 
// Create a script that shows the following information about the current date:

// Full year

// Month (0–11)

// Date (1–31)

// Day (0–6)

// Hours

// Minutes

// Seconds

// Example Output:
// Year: 2025  
// Month: 5  
// Date: 11  
// Day: 3  
// Hours: 10  
// Minutes: 15  
// Seconds: 30
// _______________
// ans 
// var d = new Date();
// var year = d.getFullYear();
// console.log(year);
// // _______________
// var month = d.getMonth();
// console.log(month);
// // _______________
// var date = d.getDate();
// console.log(date);
// // _____________
// var day = d.getDay();
// console.log(day);
// // ________
// var Hours = d.getHours();
// console.log(Hours);
// // _________________________
// var minutes = d.getMinutes();
// console.log(minutes);
// // ___________________________
// var seconds = d.getSeconds();
// console.log(seconds);
// // ____________________________
// var miliseconds = d.getMilliseconds();
// console.log(miliseconds);
// ___________________________________________________________________________________
// ques no 3 
// Set a specific birthday date using new Date("YYYY-MM-DD").
// Compare it to today's date and show:

// Days remaining until your birthday.

// Hint: You can subtract two dates and divide the result by (1000 * 60 * 60 * 24) to get days.
// ____________
// ans 
// var todayDate = new Date();
// console.log(todayDate);
// var birthday = new Date('09 September 1992');
// console.log(birthday);
// var subtractDate = todayDate - birthday;
// console.log(subtractDate);
// var result = subtractDate / (1000 * 60 *60 *24);
//     result = Math.floor(result);
// console.log(result)
// _____________________________________________________________________________________
// ques no 4 
// Create a web page that shows today’s full date.
// 🧠 Concept Used: new Date()

// ans 
  
// var date = new Date();
// var todayDate = date.toLocaleDateString();
// console.log(todayDate)
// _______________________________________________________________________________________
// ques no 5 
// Display only the current year on the screen.
// 🧠 Concept Used: getFullYear()

//  ans
// var d = new Date();
// var year = d.getFullYear();
// console.log('The current year is : ',year)

// ________________________________________________________________________________________
// ques no 6 
// Display only the current month number (0 = January, 11 = December).

// 🧠 Concept Used: getMonth()

// 💡 Example Output:
// Month: 5

// ans 
 
// var today = new Date();
// var month = today.getMonth();
// console.log('Month ',month)
// ______________________________________________________________________________________
// ques no 7 
// Display today’s day number (0 = Sunday, 6 = Saturday).
// 🧠 Concept Used: getDay()
// 💡 Example Output:
// Day: 3

// ans 

// var today =  new Date();
// var dayToday = today.getDay();
// console.log('Day : ',dayToday);

// ______________________________________________________________________
// ques no 8 
// Show only the current hour from the system clock.
// 🧠 Concept Used: getHours()
// 💡 Example Output:
// Hour: 10

// ans 
// var today = new Date();
// var currentHour = today.getHours();
// console.log(currentHour);

// _______________________________________________________________________________
// ques no 9 
// Display the current minutes from the system time.
// 🧠 Concept Used: getMinutes()
// Example Output
// Minutes: 45

// ans 
// var today = new Date();
// var currentMinutes = today.getMinutes();
// console.log('Minutes : ', currentMinutes);

// __________________________________________________________________________________
// ques no 10 
// Display only the current seconds.

// 🧠 Concept Used: getSeconds(Display only the current seconds.
// 🧠 Concept Used: getSeconds()
// 💡 Example Output:

// Seconds: 12
// Seconds: 12
 
// ans 
// var today = new Date();
//  var seconds = today.getSeconds();
//  console.log(seconds);
// _______________________________________________________________________________
// ques no 11 
// Display the full time in this format: HH:MM:SS

// 🧠 Concepts Used: getHours(), getMinutes(), getSeconds()
// 💡 Example Output:
// Time: 10:45:12
// ans 
// var today = new Date();
// var currentTime = today.toLocaleTimeString();
// console.log('Time :',currentTime);
// _________________________________________________________________________________
// ques no 12 
//  Display Full Date in Custom Format
// Task:
// Display the date like this:
// Date: 11 - 6 - 2025 (DD - MM - YYYY)
// 🧠 Concepts Used: getDate(), getMonth(), getFullYear()

// ans 
// var today = new Date();
// var date = today.getDate();
// console.log(date);

// var month = today.getMonth();
// console.log(month);

// var year = today.getFullYear();
// console.log(year);
// console.log('Date :' + date + ' - ' + month + ' - ' + year);
// console.log(today.toLocaleDateString())
// ______________________________________________________________________________
// ques no 13 
// Age Calculator
// Ask the user to enter their birth year using prompt().
// Use the current year to calculate their age.
// Display:
// You are 20 years old.
// 💡 Use new Date().getFullYear() to get the current year.
// 💡 Subtract birth year from current year.

// ans 
// let enterBirthYear = Number(prompt('Ener your birth year'));
// var today = new Date();
// var currentYear = today.getFullYear();
// console.log(currentYear);
// let age = currentYear - enterBirthYear;
// console.log('you are ' + age + ' years old');
// _________________________________________________________________________________
// ques no 24
//  Countdown to New Year
// ✅ Task:
// Get today’s date using new Date().
// Create a new date object for next January 1st.
// Show how many days are left until New Year.

// ans 
// let todayDate = new Date();
// console.log(todayDate);
// let targetDate = new Date('13 June 2025');
// let miliseconds = targetDate - todayDate;
// console.log(miliseconds)
// let result = miliseconds / (1000 * 60 * 60 *24);
//     result = Math.floor(result);
// console.log(result);
// _________________________________________________________________________
// ques no 25 
// AM or PM Checker
// ✅ Task:
// Get the current hour using .getHours().
// Show whether it's AM or PM right now.
// 💡 Use an if-else statement:

// ans 
// var today = new Date();
// var currentHour = today.getHours();
// if(currentHour < 12){console.log('It is AM')}
// else{console.log('It is PM')}
// _______________________________________________________________________________
// ques no 26 
// Birthday Reminder App
// ✅ Task:
// Ask the user to enter their birthday (in MM-DD format).
// Compare it with today’s date.
// Show a message:
// If today is their birthday: 🎉 “Happy Birthday!”
// Otherwise: “Your birthday is in X days.”

// ans 
// let enterBirthYear = prompt('Enter your birth date');
// console.log(enterBirthYear)
// let today = new Date();
// let date = today.getDate();
// console.log(date);
// let month = today.getMonth();
// console.log(month)
// let result = date +'-'+ month;
// console.log(result);
// if(result === enterBirthYear){console.log('Happy birthday')}
// else{console.log('your birthday is in x days')}
// ____________________________________________________________________________
// ques no 27 
// Print Today’s Full Date
// Goal: Understand how Date() works.
// Use new Date() and print the full current date and time
// let today = new Date();
// document.write(today);

// ans 
 var date = Date();
 console.log(typeof date);
   date = new Date();
   console.log(typeof date);
  document.write(date);
   var onlyDate = date.getDate();
  console.log(onlyDate);
   var time = date.getHours();
   console.log(time);
   var minutes = date.getMinutes();
     console.log(minutes);
     var seconds = date.getSeconds();
     console.log(seconds);
     var miliseconds = date.getMilliseconds();
     console.log(miliseconds);
     var time = date.toLocaleTimeString();
     console.log(time);
    var dt = date.toLocaleDateString();
    console.log(dt);
    var year = date.getFullYear();
     console.log(year)
// _____________________________________________________________________
// ques no 28 
// print or console today day
// ans 
// let dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// let dt = new Date();
// var day = dt.getDay();
// console.log(day);
// let result = dayNames[dt.getDay()];
// console.log(result);
// _____________________________________________________________________________
// ques no 29 
// console current month name 
// ans 

// let month = ['january','february','march','april','may','june','july','august','september','october','november','december'];
// let current = new Date();
// let date = current.getMonth();
// console.log(date);
// let result = month[date];
// console.log(result);
// ______________________________________________________________________________
//  ques no 30 
// show current time 
// ans 
// let dat = new Date();
// let time = dat.toLocaleTimeString();
// console.log(time);