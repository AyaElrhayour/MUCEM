const accordions = document.querySelectorAll('.questions');
accordions.forEach(item => {
    const header = item.querySelector(".question");
    header.addEventListener("click", () =>{
        item.classList.toggle("active");
    })
})



