
//The current day
var today = dayjs(); 
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
//The current time
var hour = dayjs()
$('#currentTime').text(hour.format('hh:mm:ss'));

//Function to get the clock updated every seconds
function updateTime() {
  
  const dateElement = $('#currentDay');
  const timeElement = $('#currentTime');
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  const currentTime = dayjs().format('hh:mm:ss A');
  dateElement.text(currentDate);
  timeElement.text(currentTime);
}
setInterval(updateTime, 1000);
console.log(updateTime);


//Button to setItems into localStorage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();

   var time = $(this).parent().attr("id");
   var description = $(this).siblings(".description").val();
  localStorage.setItem(time, description);

});
//Function to getItem from localStorage
$('.time-block').each(function() {
  const myTime = $(this).attr('id');
  const myDescription = localStorage.getItem(myTime);
  $(this).children('.description').val(myDescription);
});

//Function to get the past,future, and present time block
function getColor() {
  $('.time-block').each(function() {
    const currentHour = dayjs().format('H');
    const blockHour = parseInt(this.id);
    if (blockHour == currentHour) {
      $(this).addClass('present');
    } else if (blockHour < currentHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('future');
    }
  });
}


//Call the function
getColor();
updateTime();
