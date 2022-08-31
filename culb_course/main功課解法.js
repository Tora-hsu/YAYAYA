let thisInput = document.getElementsByTagName("Input")[1];
var date =$("#Schoolday").val();


thisInput.onclick = function(){

    var testinput = document.getElementsByTagName("Input")[0];

    //$("#tt").empty();
$(function(){

    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    //if(testinput!=null){
    var topicCount = topic.length;
    //計算毫秒數
    let millisecsPerDay = 24*60*60*1000;
    var d1=testinput.value;
    
    if(d1){
        
    function D(){    for (var x = 0 ;x<topicCount;x++){
            var y1=d1.split("-")[0];
            var m1=d1.split("-")[1];
            var d2=d1.split("-")[2];
            var D1= new Date(y1,m1,d2)
            setMonthAndDay(D1.getMonth(),D1.getDate())
           
            let currentDateString = (new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString();
        
        
        if(topic[x]== "上學"){
            //$("#table").empty()
        $("#courseTable").append(
            
            "<tr style=\"color:grey\">"+
            `<td>${(x+1)}</td>`+
            `<td>${currentDateString.split("/")[1]}/${currentDateString.split("/")[2]}</td>`+
            `<td>${topic[x]}</td>`+
           "</tr>"
           );}else{$("#courseTable").append(
            
            "<tr>"+
            `<td>${(x+1)}</td>`+
            `<td>${currentDateString.split("/")[1]}/${currentDateString.split("/")[2]}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
            );};
            ;};
        }
    }
    //}

        }

)}