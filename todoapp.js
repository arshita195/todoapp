


document.getElementById("addbtn").addEventListener("click", function () {

    let input = document.getElementById("input");
    let div = document.getElementById("div");

    if (input.value != "") {

        let p = document.createElement("p");
        p.setAttribute("class", "para");

        let data = document.createElement("span");
        data.innerText = input.value;
        data.setAttribute("class", "data");
        p.append(data);


        let button = document.createElement("button");
        button.innerText = "Delete";
        button.setAttribute("class", "deletebtn");
        p.append(button);


        let button2 = document.createElement("button");
        button2.innerText = "Update";
        button2.setAttribute("class", "updatebtn");
        p.append(button2);

        div.append(p);


        input.value = "";

        let a = document.getElementsByClassName("deletebtn");

        for (let i = 0; i < a.length; i++) {
            a[i].onclick = function () {
                this.parentElement.style.display = "none";
            }
        }


        let b = document.getElementsByClassName("updatebtn");
        let data=  document.getElementsByClassName("data");
     
        

        for (let j = 0; j < b.length; j++) {
            b[j].onclick = function () {

                let a =prompt();

if(a!=null)    
{
  data[i]=a;
}
 }

}

}

    else{
        alert("Please enter a value");
    }


});







//  clear button

document.getElementById("clearbtn").addEventListener("click", () => {

    document.getElementById("div").innerText = "";

})

