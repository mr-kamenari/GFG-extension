let isDrawing = false;
let context;

$(document).ready(function() {
  const canvas = document.getElementById('whiteboard');
  context = canvas.getContext('2d');

  canvas.width = 400;
  canvas.height = 400;

  context.lineWidth = 5;
  context.lineCap = 'round';
  context.strokeStyle = '#000';

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
});

function startDrawing(e) {
  isDrawing = true;
  context.beginPath();
  context.moveTo(e.clientX, e.clientY);
}

function draw(e) {
  if (!isDrawing) return;

  context.lineTo(e.clientX, e.clientY);
  context.stroke();
}

function stopDrawing() {
  isDrawing = false;
  context.closePath();
}
