let strokeColor = null;
let strokeWidth = null;
let isDrawingInProgress = false;
let prevX = 0;
let prevY = 0;
let curX;
let curY;

const canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", () => (pressed = true));
canvas.addEventListener("mouseup", () => (pressed = false));
canvas.setAttribute('width',window.innerWidth - 20);
canvas.setAttribute('height',window.innerHeight - 20);
const ctx = canvas.getContext("2d");

const strokeWidInput = document.getElementsByName('strokeWidth')[0];
const strokeColorInput = document.getElementsByName('strokeColor')[0];
const eraserWidthInput = document.getElementsByName('eraserWidth')[0];

strokeWidth = strokeWidInput.value;
strokeColor = strokeColorInput.value;
ctx.strokeStyle = strokeColor;
ctx.lineWidth = strokeWidth;




strokeWidInput.addEventListener('change',(e) => {
    let {value} = e.target;
    strokeWidth = value;
    ctx.lineWidth = strokeWidth;
});

strokeColorInput.addEventListener('change',(e) => {
    let {value} = e.target;
    strokeColor = value;
    ctx.strokeStyle = strokeColor;
});

eraserWidthInput.addEventListener('change',(e) => {
    let {value} = e.target;
    strokeWidth = value;
    ctx.lineWidth = strokeWidth;
});

const stroke = () => {
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(curX, curY);
    ctx.stroke();
}

const draw = (beginNew = false) => {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  if(!beginNew) stroke();
  ctx.closePath();
};

const setCoOrdinatesOnMouseDown = (e) => {
    prevX = curX;
    prevY = curY;
    curX = e.clientX - canvas.offsetLeft;
    curY = e.clientY - canvas.offsetTop;
    isDrawingInProgress = true;
}

const setCoOrdinatesOnMouseMove = (e) => {
    if(!isDrawingInProgress)  return;
    setCoOrdinatesOnMouseDown(e);
}

const stopDrawingProcess = () => {
    isDrawingInProgress = false;
}

canvas.addEventListener("mousemove", (e) => {
    setCoOrdinatesOnMouseMove(e);
    draw();
});

canvas.addEventListener("mousedown", (e) => {
    let beginNewpath = true;
    setCoOrdinatesOnMouseDown(e);
    draw(beginNewpath);
});

canvas.addEventListener("mouseup", (e) => {
    stopDrawingProcess();
});

canvas.addEventListener("mouseout", (e) => {
    stopDrawingProcess();
});

