var data=[];
document.querySelector("form").onsubmit=function(e){
    e.preventDefault();
    var userData={
Name:e.target.elements["userName"].value,
Email:e.target.elements["userEmail"].value,
Password:e.target.elements["userPassword"].value,
}
data.push(userData);
console.log(data);
printData();

}

function printData(){
    for(var i=0;i<data.length;i++){
        var dataA="";
        dataA+=`<tr>
        <td>${data[i].Name}</td>
        <td>${data[i].Email}</td>
        <td>${data[i].Password}</td>
        </tr>`
    }
 document.querySelector(".body").innerHTML+=dataA;
}