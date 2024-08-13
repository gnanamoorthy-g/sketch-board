let toolOnUse = 'pencil';
const uploadedImages= [];
const tools = ['pencil','eraser','downloader','uploader','notes','redo','undo'];

const pencil = document.getElementById('pencil');
const eraser = document.getElementById('eraser');
const downloader = document.getElementById('downloader');
const uploader = document.getElementById('uploader');
const notes = document.getElementById('notes');
const redo = document.getElementById('undo');
const undo = document.getElementById('undo');

const onToolPick = (tool = null) => {
    if(!tool) return;
    toolOnUse = tool;
    const activeTool = document.getElementById(tool);
    activeTool.classList.add('tool_active');
    const otherTools = document.querySelectorAll('.tool');
    (otherTools  ||  []).forEach(toolElement =>{
        if(toolElement.getAttribute('id') !== tool){
            toolElement.classList.remove('tool_active')
        }
    });
    const accessoriesPanel = document.getElementById('tool_accessories_panel');
    accessoriesPanel.classList.remove('hide_element');
    const pencilAccessoriesElement = document.getElementById('pencil_accessories');
    const eraserAccessoriesElement = document.getElementById('eraser_accessories');
    canvas.classList.remove('eraser_cursor');
    if(toolOnUse === 'eraser'){
        pencilAccessoriesElement.classList.add('hide_element');
        eraserAccessoriesElement.classList.remove('hide_element');
        ctx.strokeStyle = '#ffffff';
        strokeWidth = eraserWidthInput.value;
        ctx.lineWidth = strokeWidth;
        canvas.classList.add('eraser_cursor');
    };
    if(toolOnUse === 'pencil'){
        eraserAccessoriesElement.classList.add('hide_element');
        pencilAccessoriesElement.classList.remove('hide_element');
        ctx.strokeStyle = strokeColor;
        strokeWidth = strokeWidInput.value;
        ctx.lineWidth = strokeWidth;
    }

}

tools.forEach((tool,index) => {
    const toolElement = document.getElementById(tool);
    if(toolElement){
        toolElement.addEventListener('click',()=> {onToolPick(tool)})
    }
});

uploader.addEventListener('click',()=>{
    const input = document.createElement('input');
    input.setAttribute('type','file');
    input.setAttribute('accept',".jpg, .jpeg, .png");
    input.addEventListener('change',(e) => {
        const file = input.files[0];
        const imgUrl = URL.createObjectURL(file);
        uploadedImages.push(imgUrl);
    });
    input.click();
});

const accessoriesPanel = document.getElementById('tool_accessories_panel');