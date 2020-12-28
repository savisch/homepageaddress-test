
if(document.title == "Document"){
    let button = document.querySelector('button');
    button.addEventListener("click", loadToStorage);
    let index=1;
    function loadToStorage(){

        let tableData = {
            firstName : document.querySelector("#firstName").value,
            lastName : document.querySelector("#lastName").value,
            email : document.querySelector("#email").value,
            dob : document.querySelector("#dob").value
        };
        // console.log(tableData);
        if(localStorage.address){
            let key = "address" + index;
            localStorage.setItem(key, JSON.stringify(tableData));
            index += 1;
        }
        localStorage.setItem("address", JSON.stringify(tableData));
    }
}

if(document.title == "Table"){
console.log(localStorage.length);
// let tbl = document.getElementById("table");

    for(let i = 0; i < localStorage.length; i ++){
        let parse = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(parse.lastName);
        let tbl = document.getElementById("table");
        let tblBody = document.createElement("tbody");

        let rowOne = document.createElement("tr");
        let firstCell = document.createElement("td");
        firstCell.textContent = `Name: ${parse.firstName} ${parse.lastName}`;
        rowOne.appendChild(firstCell);

        let rowTwo = document.createElement("tr");
        let firstCellTwo = document.createElement("td");
        firstCellTwo.textContent = `Email: ${parse.email}`;
        rowTwo.appendChild(firstCellTwo);

        let blankRow = document.createElement("tr");
        let blankCell = document.createElement("td");
        blankRow.appendChild(blankCell);
        blankCell.style.backgroundColor = "white";

        let rowThree = document.createElement("tr");
        let firstCellThree = document.createElement("td");
        firstCellThree.textContent = `Date of Birth: ${parse.dob}`;
        rowThree.appendChild(firstCellThree);

        tblBody.appendChild(rowOne);
        tblBody.appendChild(rowTwo);
        tblBody.appendChild(rowThree);
        tblBody.appendChild(blankRow);


        tbl.appendChild(tblBody);
    // tbl.appendChild(tblBodyTwo);
    // tbl.appendChild(tblBodyThree);
    }
}
