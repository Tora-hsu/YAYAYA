let thisInput = document.getElementsByTagName("Input")[1];
let thisH1 = document.getElementsByName("H1")[0];

thisInput.onclick = function(){

// var testinput = document.getElementById("schoolday");
//thisH1.innerHTML=testinput


$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;
    //計算毫秒數
    let millisecsPerDay = 24*60*60*1000;

    for (var x = 0 ;x<topicCount;x++){
        let currentDateString = (new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString();
           if(x%2==0){
        $("#courseTable").append(
            
            "<tr style=\"color:grey\">"+
            `<td>${(x+1)}</td>`+
            //`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`+
            `<td>${currentDateString.split("/")[1]}/${currentDateString.split("/")[2]}</td>`+
            
            `<td>${topic[x]}</td>`+
           "</tr>"
           );
        }else{$("#courseTable").append(
            
            "<tr>"+
            `<td>${(x+1)}</td>`+
            //`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`+
            `<td>${currentDateString.split("/")[1]}/${currentDateString.split("/")[2]}</td>`+
            
            `<td>${topic[x]}</td>`+
           "</tr>"
           );};
                
        }
            

    });
}