/**
 * Get the current date and display it
 */

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