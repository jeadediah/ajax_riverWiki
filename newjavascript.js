
var tbody = document.getElementsByTagName("tbody")[0];
var mainRow = document.querySelector("#mainRow");


var xml = new XMLHttpRequest();
xml.open("GET", 'https://mysafeinfo.com/api/data?list=riverseurope&format=json&case=default&token=ofLH8O7YrxL9sNTW0sYszdrxjDQnl3zH');

xml.addEventListener("readystatechange", function () {
    if (xml.readyState === 4 && xml.status === 200) {
        displayTable();
    }
});
xml.send();


 function displayTable(){
 var data = xml.responseText;
 var parseData = JSON.parse(data);
 console.log(parseData);
 for (let i = 0; i < parseData.length; i++) {
 
 
 tbody.innerHTML +=  `<tr>
 <td>${parseData[i].ID}</td>
 <td>${parseData[i].River}</td>
 <td><a href="https://en.wikipedia.org/wiki/${parseData[i].River}" class="btn btn-sm btn-warning">READ MORE</a></td>
 <td>${parseData[i].Kilometers}</td>
 <td>${parseData[i].Miles}</td>
 </tr>`;    
 
 }
 }

/*function displayTable() {
    var data = xml.responseText;
    var parseData = JSON.parse(data);
    // HEADER TABELE
    var first = parseData[0];
    var text1 = "";
    for (prop in first) {
        text1 += `<th>${prop}</th>`;
    }
    ;
    mainRow.innerHTML = text1;//HEADER TABELE END
    
    var text2 = "";
    for (let i = 0; i < parseData.length; i++) {
        text2 += "<tr>";
        for (prop in parseData[i]) {
        text2 += `<td>${parseData[i][prop]}</td>` 
        tbody.innerHTML += text2;}
        text2 += "</tr>"; 
    }
    tbody.innerHTML = text2;
}*/