var URLHEAD = "https://line.me/R/msg/text/?";
var INDENT = "%0D%0A";

//グローバル定数を定義する
function define(name, value){
  Object.defineProperty(window, name, { 
   get: function(){return value;},
   set: function(){throw(name+' is already defined !!');},
  });
}

function buttonClick() {

    //送信日時の取得
    date = nowTime();

    var t1 =document.getElementById("name");
    var sendTime = "%E3%80%90%E6%99%82%E5%88%BB%E3%80%91" + encodeURI(date);
    var sendName = "%E3%80%90%E5%90%8D%E5%89%8D%E3%80%91" + encodeURI(t1.value);

    var sendStr = URLHEAD + sendTime + INDENT + sendName;


    var t3 = document.getElementById("result");
    t3.value = sendStr;
    window.open(sendStr, '_blank'); // 新しいタブを開き、ページを表示
}

//送信日の作成
function nowDay(){
    const date1 = new Date();
    const date2 = date1.getFullYear() + "年" + 
				(date1.getMonth() + 1)  + "月" + 
				date1.getDate() + "日"  ;

    return date2;
}

//送信時の作成
function nowTime(){
    const date1 = new Date();
    const date2 = date1.getHours() + "時" + 
				date1.getMinutes() + "分" + 
				date1.getSeconds() + "秒" ;

    return date2;
}

//試験用　出発上番報告
function gotoReport() {
    var sendStr = URLHEAD + "%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%0D%0A%E3%81%93%E3%82%8C%E3%82%88%E3%82%8A%E7%8F%BE%E5%A0%B4%E3%81%AB%E5%90%91%E3%81%8B%E3%81%84%E3%81%BE%E3%81%99%E3%80%82";
    saveReport( "gotoReport_" + nowDay() + "=" + nowTime());
    window.open(sendStr, '_blank');
}

//試験用　到着上番報告
function arrivalReport() {
    var sendStr = URLHEAD + "%E7%8F%BE%E5%A0%B4%E3%81%AB%E5%88%B0%E7%9D%80%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%0D%0A%E6%A5%AD%E5%8B%99%E9%96%8B%E5%A7%8B%E3%81%BE%E3%81%A7%E5%BE%85%E6%A9%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82";
    saveReport( "arrivalReport_" + nowDay() + "=" + nowTime());
    window.open(sendStr, '_blank');
}

//試験用　下番報告
function backHomeReport() {
    var sendStr = URLHEAD + "%E6%A5%AD%E5%8B%99%E7%B5%82%E4%BA%86%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%0D%0A%E3%81%93%E3%82%8C%E3%82%88%E3%82%8A%E7%9B%B4%E5%B8%B0%E3%81%97%E3%81%BE%E3%81%99%E3%80%82";
    saveReport( "backHomeReport_" + nowDay() + "=" + nowTime());
    window.open(sendStr, '_blank');
}

//クッキー上に報告時間の保存
//文字の並びは【報告種類：日時 = 報告時間】
//タグは報告種類：日時となる。
function saveReport(saveStr){
    console.log(saveStr);
    document.cookie = saveStr;
    console.log(document.cookie);
}

//テーブル作成
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    var tmp = document.cookie;
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)gotoReport_2021年3月14日\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(cookieValue);
    // creating all cells
    for (var i = 0; i < 2; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      //列方向
      for (var j = 0; j < 3; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        
        //セル内の文字列設定
        //クッキーの内容を一行分
        
        var cellText = document.createTextNode(cookieValue);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }