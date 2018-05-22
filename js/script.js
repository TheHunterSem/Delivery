$(document).ready(function () {

   var newDate = new Date();
   var day = newDate.getDay();
   var date = newDate.getDate();

   var arr = [];
   var dayName = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];

   var i = 1;
   while(i<=31) {
       arr.push(i);
       i++;
   }

    $('#days').text(arr);
    $('#day').text(dayName[day - 1] + "  " + "("+day+" день тижня)" + "  " + date + " число");
    $('#dayName').text(dayName);

});