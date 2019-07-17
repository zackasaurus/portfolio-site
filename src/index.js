import './index.css';
// import * as dat from 'dat-gui'
import SmoothScroll from './js/SmoothScroll'
// import $ from "jquery"

// const gui = new dat.GUI()


// Smooth Scroll
SmoothScroll()





const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// Get Scrollbar Width
function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

}

let h = 850
// if (window.innerWidth < 780) {
//     h = 900
// }
// else {
//     h = 600
// }

canvas.width = window.innerWidth - getScrollbarWidth()
canvas.height = h

let resizeCanvas = function () {
    canvas.width = window.innerWidth - getScrollbarWidth()
    canvas.height = h
    c.imageSmoothingEnabled = true;
    // if (window.innerWidth < 780) {
    //     h = 900
    //     canvas.height = 900
    //     // console.log(h)
    // }
    // else {
    //     canvas.height = 850
    // }
    // animate()
}

window.addEventListener('resize', function () {
    resizeCanvas()
})

const props = {
    start: canvas.height * .9,
    length: 0.0003,
    amp: 0,
    duration: 0.003,
    magnitude: 1
}

let increment = props.duration


function animate() {


    requestAnimationFrame(animate)


    //Top
    c.fillStyle = " #1B2631"

    c.fillRect(0, 0, canvas.width, canvas.height)

    // Bottom
    c.beginPath()

    c.moveTo(0, props.start)


    for (let i = 0; i <= canvas.width; i++) {
        c.lineTo(i, props.start + 40 * Math.sin(i * 0.01 * Math.sin(increment)) + Math.sin(i ** (props.magnitude) * (props.length + 5 * Math.sin(increment) / 10000)) * props.amp ** ((i + .1 * canvas.width) / canvas.width * 1.1))
    }

    c.lineTo(canvas.width, canvas.height)
    c.lineTo(0, canvas.height)
    c.fillStyle = "ghostwhite"
    c.fill()

    increment -= props.duration
}
animate()

// BOTTOM

// const canvas2 = document.getElementById('canvas-2')
// const c2 = canvas2.getContext('2d')

// canvas2.width = window.innerWidth - getScrollbarWidth()
// canvas2.height = h


// function animate2() {


//     requestAnimationFrame(animate2)


//     //Top
//     c2.fillStyle = " rgb(52, 73, 94)"

//     c2.fillRect(0, 0, canvas.width, canvas.height)

//     // Bottom
//     c2.beginPath()

//     c2.moveTo(0, 0)


//     for (let i = 0; i <= canvas.width; i++) {
//         c2.lineTo(i, props.start + 40 * Math.sin(i * 0.01 * Math.sin(increment)) + Math.sin(i ** (props.magnitude) * (props.length + 5 * Math.sin(increment) / 10000)) * props.amp ** ((i + .1 * canvas.width) / canvas.width * 1.1))
//     }

//     c2.lineTo(canvas.width, canvas.height)
//     c2.lineTo(0, canvas.height)
//     c2.fillStyle = "ghostwhite"
//     c2.fill()

//     increment -= props.duration
// }
// animate2()