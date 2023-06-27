let btn_status = false
const navbar = document.querySelector(".navbar-container")
const navbar_btn = document.querySelector(".navbar-btn")
function navbarHandler() {


    window.addEventListener("resize", ev => {
        if (window.innerWidth <= 768) {
            btn_status = false
            navbar.style.display = "none"
        } else {
            navbar.style.display = "flex"

        }
    })

    navbar_btn.addEventListener("click", navbarButtonHandler)


}

function navbarButtonHandler(ev) {
    btn_status = !btn_status
    console.log(btn_status);
    if (btn_status) {
        navbar.style.display = "flex"
    } else {

        navbar.style.display = "none"
    }
}


export default navbarHandler