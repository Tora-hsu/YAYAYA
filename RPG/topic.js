var topic =[
    "上學",
    "社團活動",
    "上學",
    "僕咖討論",
    "上學",
    "僕咖初日"
];

var topic2 =[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "運動會"
];
var startDate = new Date ();

//設定好活動第一次的日期
function setMonthAndDay(starMonth,startDay){
    //JS的月份是0~11，所以這邊-1
    startDate.setMonth(starMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//設定第一次活動日期為2月21日
setMonthAndDay(2,21);