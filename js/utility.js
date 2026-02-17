document.getElementById('hmb').addEventListener('click',function(){
    let element = document.getElementById("navigation");
    if (!element.classList.contains("show")) {
        element.classList.add("collapsing");
        element.classList.add("show");
        element.style.height = "763px";
    
        setTimeout(() => {
            element.style.height = ""; // Remove height styling
            element.classList.remove("collapsing");
        }, 500); // 1 millisecond delay
    } else {
        element.classList.remove("show");
    }
})


