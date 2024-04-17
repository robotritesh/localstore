// fill in javascript code here
let form=document.querySelector('form');
let tbody=document.querySelector("tbody")
localStorageData();
form.addEventListener("submit",function(e){
    e.preventDefault();

    let name=document.getElementById("name").value;
    let employeeID=document.getElementById("employeeID").value;
    let department=document.getElementById("department").value;
    let experience=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mbl").value;
    let role=calculateRole(experience)

    let newRow=`

    <tr>
    <td>${name}</td>
    <td>${employeeID}</td>
    <td>${department}</td>
    <td>${experience}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
    </tr>
    `
    tbody.innerHTML+=newRow;
    savetoLocalStorage()
    form.reset()
})
function deleteRow(row){
    let r=row.closest("tr");
    r.parentNode.removeChild(r);

    savetoLocalStorage()
}

function calculateRole(experience){
    if(experience>5){
        return "Senior"
    }
    else if(experience>=2  && experience<=5){
        return "Junior"
    }
    else {
        return "Fresher"
    }
}

function savetoLocalStorage(){
    let rows=tbody.querySelectorAll("tr");

    const data=[]

    rows.forEach((row)=>{
        let rowData={
           name:row.cells[0].textContent,
           employeeID:row.cells[1].textContent,
           department:row.cells[2].textContent,
           experience:row.cells[3].textContent,
           email:row.cells[4].textContent,
           mobile:row.cells[5].textContent,
           role:row.cells[6].textContent
        }
        data.push(rowData)
    })
    localStorage.setItem("employeeData",JSON.stringify(data))
}

function localStorageData(){
    let storeData=JSON.parse(localStorage.getItem("employeeData"))

    storeData.forEach(data=>{
        let newRow=`
        <tr>
        <td>${data.name}</td>
        <td>${data.employeeID}</td>
        <td>${data.department}</td>
        <td>${data.experience}</td>
        <td>${data.email}</td>
        <td>${data.mobile}</td>
        <td>${data.role}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
        </tr>
        `
        tbody.innerHTML+=newRow
    })
}


// login page section
let authcontainer=document.querySelector("#auth")
let login=document.querySelector("#login")
let signup=document.querySelector("#signup")

let loggedStatus= JSON.parse(localStorage.getItem("loggedStatus"))
console.log(loggedStatus)

if(loggedStatus){
    login.innerHTML=`hi,${loggedStatus.username}`
}
// login.addEventListener("click",function(){
//     window.location.href="./login.html"
// })

signup.addEventListener("click",function(){
    window.location.href="signup.html"
})