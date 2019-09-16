function calendar(inputDate) {
    let [day, month, year] = inputDate;
    const currentDate = new Date(year, month - 1, day);
    const selector = '#content';

    var days = [6, 0, 1, 2, 3, 4, 5];

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const currentMonthIndex = currentDate.getMonth();
    const currentMonthFullName = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    const $calendar = $('<table>')
        .append($('<caption>')
            .text(`${currentMonthFullName} ${currentYear}`))
        .append($('<tbody>')
            .append($('<tr>')
                .append($('<th>').text('Mon'))
                .append($('<th>').text('Tue'))
                .append($('<th>').text('Wed'))
                .append($('<th>').text('Thu'))
                .append($('<th>').text('Fri'))
                .append($('<th>').text('Sat'))
                .append($('<th>').text('Sun'))
            )
        )
        .appendTo($(selector));

    const calendarDate = new Date(currentYear, currentMonthIndex, 1);

    let isNewWeek = true;
    let $currentWeek;

    while(calendarDate.getMonth() === currentMonthIndex) {
        const dayOfWeek = days[calendarDate.getDay()];

        if(dayOfWeek === 0) {
            isNewWeek = true;
        }
        
        if(isNewWeek) {            
            isNewWeek = false;

            $currentWeek = $('<tr>')
                .append($('<td>'))
                .append($('<td>'))
                .append($('<td>'))
                .append($('<td>'))
                .append($('<td>'))
                .append($('<td>'))
                .append($('<td>'))
                .appendTo($calendar);
        }

        $currentWeek.find('td')[dayOfWeek].textContent = calendarDate.getDate();

        if (calendarDate.getDate() === currentDate.getDate()) {
            $($currentWeek.find('td')[dayOfWeek])
                .addClass('today');
        }

        calendarDate.setDate(calendarDate.getDate() + 1);        
    }
}