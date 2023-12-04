const sidebar = () => {
    const width = window.innerWidth;

    if (width <= 992) {
        const menu = document.querySelector(".menu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
}
window.onresize = ()=> { 
    location.reload(); 
}
