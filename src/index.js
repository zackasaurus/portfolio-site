import './index.css';
import * as dat from 'dat-gui'

// const gui = new dat.GUI()


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

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

canvas.width = window.innerWidth - getScrollbarWidth()
canvas.height = window.innerHeight

let resizeCanvas = function () {
    canvas.width = window.innerWidth - getScrollbarWidth()
    canvas.height = window.innerHeight
    c.imageSmoothingEnabled = true;
}

window.addEventListener('resize', function () {
    resizeCanvas()
})

// window.onresize

// const props = {
//     start: canvas.height * 0.8,
//     length: 0.0007,
//     amp: 40,
//     duration: 0.015,
//     magnitude: 1.15
// }

// const props = {
//     start: canvas.height * 0.8,
//     length: 0.0007,
//     amp: 60,
//     duration: 0.007,
//     magnitude: 1.2
// }

const props = {
    start: canvas.height * 0.6,
    length: 0.0003,
    amp: 0,
    duration: 0.003,
    magnitude: 1
}

// gui.add(props, 'start', 0, canvas.height)
// gui.add(props, 'length', -.03, .03)
// gui.add(props, 'amp', 0, 100)
// gui.add(props, 'duration', -.01, .1)
// gui.add(props, 'magnitude', 1, 2)

// let direction = true
let increment = props.duration


function animate() {


    requestAnimationFrame(animate)


    //Top
    c.fillStyle = "rgba(70, 130, 180,0.9)"

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