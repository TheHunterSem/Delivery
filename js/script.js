$(document).ready(function () {

    var newDate = new Date();

    //Поточний порядковий номер дня в тижні
    var day = newDate.getDay();

    //Поточне число
    var date = newDate.getDate();

    var arrDays = [];
    var dayName = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];

    var arrDaysPush = 1;
    while(arrDaysPush<=31) {
        arrDays.push(arrDaysPush);
        arrDaysPush++;
    }

    var currentDayArr = arrDays[date - 1];

    var htmlArray = '<p class="htmlArray_p">' + arrDays.join('</p><p class="htmlArray_p">') + '</p>';

    $('#day').html(dayName[day - 1] + ",  " + "("+day+" день тижня)," + "  " + currentDayArr + ' Число');

    $('#dayName').text(dayName);
    $('#days').html(htmlArray);

    //Пошук поточної дати в місяці
    for (var current = 1; current <= arrDays[currentDayArr - 1]; current++) {
        if (current === arrDays[currentDayArr - 1]) {
            var currentDay = $('#days p').eq(current - 1);
            for (var j = 1; j === currentDay.length; j++) {
                if (j === currentDay.length) {
                    currentDay.addClass('current_day');
                }
            }
        }
    }


});