export default function Waves() {
  const canvas = document.querySelector('#canvas');
  const c = canvas.getContext('2d');

  // Height
  let h = 850;

  canvas.width = window.innerWidth;
  canvas.height = h;

  let resizeCanvas = function() {
    canvas.width = window.innerWidth;
    canvas.height = h;
    c.imageSmoothingEnabled = true;
  };

  window.addEventListener('resize', function() {
    resizeCanvas();
  });

  const props = {
    start: canvas.height * 0.9,
    length: 0.0003,
    amp: 0,
    duration: 0.003,
    magnitude: 1
  };

  let increment = props.duration;

  function animate() {
    console.log(canvas.width);
    let constant = canvas.width / 1000;
    requestAnimationFrame(animate);
    //Top
    // let pattern = new Image();
    // pattern
    c.fillStyle = ' #1B2631';
    c.fillRect(0, 0, canvas.width, canvas.height);
    // Bottom
    c.beginPath();
    c.moveTo(0, props.start);
    for (let i = 0; i <= canvas.width; i++) {
      c.lineTo(
        i,
        props.start +
          40 * Math.sin(((i * 0.01) / constant) * Math.sin(increment))
      );
    }
    c.lineTo(canvas.width, canvas.height);
    c.lineTo(0, canvas.height);
    c.fillStyle = 'ghostwhite';
    c.fill();

    increment -= props.duration;
  }
  animate();
}
