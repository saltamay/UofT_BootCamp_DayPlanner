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
 * 
 * @param {*} hour
 * 
 * Utility function that checks the whether time-block is in the past, present, or future
 * and color code it accordingly
 */
const colorCodedTextArea = (hour) => {

  let currentHour = moment().hour();
  let textArea = '';

  currentHour > hour ?
    textArea = `<textarea class="col-10 row past" rows="3"></textarea>`
    :
    currentHour === hour ?
      textArea = `<textarea class="col-10 row present" rows="3"></textarea>`
      :
      textArea = `<textarea class="col-10 row future" rows="3"></textarea>`

  return textArea;
}

/**
 * Display timeblocks
 */

// Create a div with class of row
const row = $('<div>');
row.addClass('row time-block');

let am = '';
let noon = '';
let afternoon = '';

for (let index = 9; index < 18; index++) {
  // Create time blocks for 9am to 12pm
  index < 12 ?
    am += 
    `
    <div class="col-1 hour">${index}AM</div>
    ${colorCodedTextArea(index)}
    <div class  ="col-1 saveBtn">Save</div>
    `
  // Create timeblock for noon
  : (index === 12) ?
    noon = 
    `
    <div class="col-1 hour">12PM</div>
    ${colorCodedTextArea(index)}
    <div class="col-1 saveBtn">Save</div>
    `
  :
  // Create time blocks for 12pm to 5pm
  afternoon +=
  `
  <div class="col-1 hour">${index - 12}PM</div>
  ${colorCodedTextArea(index)}
  <div class  ="col-1 saveBtn">Save</div>
  `
}
// Display time blocks
row.append(am);
row.append(noon);
row.append(afternoon);
$('.container').append(row);

