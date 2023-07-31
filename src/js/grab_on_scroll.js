
const card_list = document.querySelector(".project-card")
let position = {
    left: 0,
    x: 0
}
function grabOnScroll() {


    card_list.addEventListener("mousedown", ev => {
        card_list.style.cursor = "grabbing"
        position = {
            left: card_list.scrollLeft,
            x: ev.clientX
        }
        card_list.addEventListener("mousemove", mouseMove)
        card_list.addEventListener("mouseup", mouseUp)
    })



}

function mouseUp() {
    card_list.removeEventListener("mousemove", mouseMove)
    card_list.removeEventListener("mouseup", mouseUp)
    card_list.style.cursor = "grab"
}

function mouseMove(e) {
    let movePosition = e.clientX - position.x
    card_list.scrollLeft = position.left - movePosition
}

export default grabOnScroll