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
 * Function that checks the whether time-block is in the past, present, or future
 * and color code it accordingly
 */
const colorCodedTextArea = (hour, savedItems) => {

  const currentHour = moment().hour();
  let textArea = '';
  let item = '';

  savedItems ? savedItems[hour] ? item = savedItems[hour] : item : item;

  currentHour > hour ?
    textArea = `<textarea id="${hour}" class="col-10 row past" rows="3">${item}</textarea>`
    :
    currentHour === hour ?
      textArea = `<textarea id="${hour}" class="col-10 row present" rows="3">${item}</textarea>`
      :
      textArea = `<textarea id="${hour}" class="col-10 row future" rows="3">${item}</textarea>`

  return textArea;
}

/**
 * Display timeblocks
 */
// Get local storage
const items = JSON.parse(localStorage.getItem('items'));

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
    ${colorCodedTextArea(index, items)}
    <button class="col-1 saveBtn" data-target="${index}"><i class="fas fa-save"></i></button>
    `
  // Create timeblock for noon
  : (index === 12) ?
    noon = 
    `
    <div class="col-1 hour">12PM</div>
    ${colorCodedTextArea(index, items)}
    <button class="col-1 saveBtn" data-target="${index}"><i class="fas fa-save"></i></button>
    `
  :
  // Create time blocks for 12pm to 5pm
  afternoon +=
  `
  <div class="col-1 hour">${index - 12}PM</div>
  ${colorCodedTextArea(index - 12, items)}
  <button class="col-1 saveBtn" data-target="${index - 12}"><i class="fas fa-save"></i></button>
  `
}
// Display time blocks
row.append(am);
row.append(noon);
row.append(afternoon);
$('.container').append(row);

/**
 * Add event listeners to saveBtn(s) and text area item so that
 * schedule items will be saved to localstorage
 */
$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  console.log('clicked');
  const id = $(this).attr('data-target');
  const item = $('#' + id).val();


  saveToLocalStorage(id, item);
})


/**
 * Save schedule item to local storage
 * 
 */
const saveToLocalStorage = (id, item) => {

  // Check if local storage is already initilized
  if(localStorage.items) {
    const items = JSON.parse(localStorage.getItem('items'));
    items[id] = item;
    localStorage.setItem('items', JSON.stringify(items));
  } else {
    const items = {};
    items[id] = item;
    localStorage.setItem('items', JSON.stringify(items));
  }

}