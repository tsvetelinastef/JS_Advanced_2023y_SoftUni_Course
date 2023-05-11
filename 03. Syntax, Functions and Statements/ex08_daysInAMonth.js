function daysInAMonth(month, year){
    let date = new Date(year, month, 0);
    console.log(date.getDate());
    //console.log(date.toUTCString());
}

daysInAMonth(1, 2012);  // 31
daysInAMonth(2, 2021);  // 28
