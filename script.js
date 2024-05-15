const header =document.querySelector("h2");
const paragraph =document.querySelector("p");
const span = document.querySelectorAll("span");
const backgroundColorChange = document.querySelector("body");

// span.forEach(element => {
//     element.addEventListener("click", event =>{
//         if(event.target.id = "green"){
//             backgroundColorChange.style.backgroundColor = event.target.id;
//         }
//     })
// }
// )


span.forEach(element => {
    element.addEventListener("click", event =>{

        switch(event.target.id){
            case "green" :
                backgroundColorChange.style.backgroundColor = "green";
                header.style.color = "black";
                paragraph.style.color = "black";
                break;
            
            case "white" :
                backgroundColorChange.style.backgroundColor = "white";
                header.style.color = "black";
                paragraph.style.color = "black";
                break;

            case "grey" :
                backgroundColorChange.style.backgroundColor = "grey";
                header.style.color = "white";
                paragraph.style.color = "white";
                break;

            case "yellow" :
                backgroundColorChange.style.backgroundColor = "yellow";
                header.style.color = "white";
                paragraph.style.color = "white";
                break;

            case "red" :
                backgroundColorChange.style.backgroundColor = "red";
                header.style.color = "black";
                paragraph.style.color = "black";
                break;

            case "pink" :
                backgroundColorChange.style.backgroundColor = "pink";
                header.style.color = "white";
                paragraph.style.color = "white";
                break;

            case "blue" :
                backgroundColorChange.style.backgroundColor = "blue";
                header.style.color = "black";
                paragraph.style.color = "black";
                break;

            case "purple" :
                backgroundColorChange.style.backgroundColor = "purple";
                header.style.color = "black";
                paragraph.style.color = "black";
                break;



                default: "Not matching color" ;
        }
    })

})




    


    

    

