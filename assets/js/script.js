$(function () {
// Set current hour as 24 hour format (i.e. 3PM === 15) and render using the 'number' type  
var currentHour = Number(dayjs().format('H'));

// Call time-block class from html.  This creates an array of timeblocks (e.g., ['hour-9', 'hour-10', 'hour-11' and so on)
var timeBlocks = document.querySelectorAll('.time-block');

console.log(timeBlocks);
// Using 'forEach' method modify the 'id'
timeBlocks.forEach(timeBlock => {
  // To retrieve the 'id' of reach time block (e.g., get id 'hour-9', 'hour-10', 'hour-11' and etc. from all the 'time-block class)
  var id = timeBlock.id;
  // Split the retrieved timeBlock id into array and retain index 1 (e.g., hour-9.split('-') === [hour, 9], and index 1 is 9)
  // Set 'hour' as a'number' type from index 1 of the split above   
  var hour = Number(id.split('-')[1]);

// In html, each time-block has the 'past', 'present' and 'future' classes
// Conditionally remove 'past', 'present' and/or 'future' classes from each timeBlock based on currentHour of the day 
// If a timeblock (i.e., 'hour') is less than currentHour then remove the 'present' and 'future' classes
  if (hour < currentHour) {
    timeBlock.classList.remove('present');
    timeBlock.classList.remove('future');
// Else if a timeblock (i.e., 'hour') is equal to currentHour then remove the 'past' and 'future' classes 
  } else if (hour === currentHour) {
    timeBlock.classList.remove('past');
    timeBlock.classList.remove('future');
// Else a timeblock (i.e., 'hour') is greater than currentHour then remove the 'past' and 'present' classes 
  } else {
    timeBlock.classList.remove('past');
    timeBlock.classList.remove('present');
    
  }
});

// Call saveBtn and textarea classes from html
var saveBtns = document.querySelectorAll('.saveBtn');
var textareas = document.querySelectorAll('textarea');



// Add event listeners to save the text within the text area when a save button is clicked
for (let i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener('click', function() {
    // Set text to the value within a specific text area 
    var text = textareas[i].value;
    // Save each text as a unique key using i, (e.g.,'hour-9' timeBlock.id is indexed as 0, so text input to that textarea would be assigned savedText0)
    localStorage.setItem(`savedText` + i, text);
  });
}
  
// Load on the webpage saved text from localStorage and set the saved text in the corresponding textarea
for (let i = 0; i < textareas.length; i++) {
  // Assign savedText as the text saved in the localstorage.setItem 
  var savedText = localStorage.getItem(`savedText` + i);
  // Render the saved text if there are existing text saved in a given text area
  if (savedText) {
    textareas[i].value = savedText;
  }
}
  // Add the current date in the header of the page.
  currentDay = dayjs();
  $('#currentDay').text(currentDay.format('dddd, MMMM DD, YYYY'));

  })
 



