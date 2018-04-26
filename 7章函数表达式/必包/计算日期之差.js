function dataMinus(sDate) {
    let sdate = new Date(sDate.replace(/-/g, '/'));
    console.log(sdate);
    let now = new Date();
    let days = now.getTime() - sdate.getTime();

    let day = parseInt(days / (1000 * 60 * 60));

    return day;
};

dataMinus('1992-6-4');

/* let now = new Date();
let sdate = new Date('1992/6/4');
let days = now.getTime() - sdate.getTime();
var mm = setInterval(function() {
    return days / (1000 * 60 * 60)
}, 1000)
console.log('我已经活了:' + mm + '天'); */