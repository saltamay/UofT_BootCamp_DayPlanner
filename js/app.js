/**
 * Get the current date and display it
 */
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Get day
let dayIndex = moment().day();
let day = days[dayIndex];
// Get month
let monthIndex = moment().month();
let month = months[monthIndex];
// Get date
let date = moment().date();
switch (date) {
  case 1:
    date += 'st';
    break;
  case 2:
    date += 'nd';
    break;
  case 3:
    date += 'rd';
    break;
  case 21:
    date += 'st';
  case 22:
    date += 'nd';
    break;
  case 23:
    date += 'rd';
    break;
  default:
    date += 'th';
    break;
}

let today = `${day}, ${month} ${date}`;
$('#currentDay').text(today);

/**
 * Display timeblocks
 */

// Create a div with class of row
const row = $('<div>');
row.addClass('row time-block');

let am = '';

// Create time blocks for 9am to 12pm
for (let index = 9; index < 12; index++) {
  
  am += 
  `
  <div class="col-1 hour">${index} AM</div>
  <textarea class="col-10 row" rows="3"></textarea>
  <div class  ="col-1 saveBtn">Save</div>
  `
  
}

// Create timeblock for noon
let noon = 
`
<div class="col-1 hour">12 PM</div>
<textarea class="col-10 row" rows="3"></textarea>
<div class  ="col-1 saveBtn">Save</div>
`

// Create time blocks for 12pm to 5pm
let afternoon = '';
for (let index = 1; index <= 5; index++) {

  afternoon +=
    `
  <div class="col-1 hour">${index} PM</div>
  <textarea class="col-10 row" rows="3"></textarea>
  <div class  ="col-1 saveBtn">Save</div>
  `

}

row.append(am);
row.append(noon);
row.append(afternoon);
$('.container').append(row);