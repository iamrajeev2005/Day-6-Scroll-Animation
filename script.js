const boxes = document.querySelectorAll('.boxes')

window.addEventListener("scroll", checkBox)

checkBox()

function checkBox(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
};