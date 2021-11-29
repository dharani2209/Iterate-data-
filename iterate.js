function Adddata()
{
var array = [
  ["Dharani", "01","BE"],
  ["Ajay", "02","BE"],
  ["Jeevi", "03","BE"],
  ["Dharshi", "04","BTECH"]
]
var table = document.getElementById('display');
for(var i = 0; i < array.length; i++)
           {
                var rowCount = table.rows.length;
                var row = table.insertRow(rowCount);
                var cell1=row.insertCell(0);
                var element1 = document.createElement("input");
                element1.type = "checkbox";
                element1.name="chkbox[]";
                cell1.appendChild(element1);
               for(var j = 0; j < array[i].length; j++)
               {
                   var cell = row.insertCell(j+1);
                   cell.innerHTML = array[i][j];
               }
            }
}
function addData() {
    var personName = document.getElementById("name").value;
    var personStudentid = document.getElementById("sid").value;
    var persondegree = document.getElementById("degree").value;
    var table = document.getElementById("display");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1=row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);
    var cell2 = row.insertCell(1);
    cell2.innerHTML = personName;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = personStudentid;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = persondegree;
    document.getElementById("name").value = '';
    document.getElementById("sid").value = '';
    document.getElementById("degree").value = '';
}
function deleteRow(tableID) {
try {
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;

            for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    if(rowCount <= 1) {
                        alert("Cannot delete all the rows.");
                        break;
                    }
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
            }
            }catch(e) {
                alert(e);
            }
        }



