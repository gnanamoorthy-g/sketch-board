let toolOnUse = null;
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
    })
    const toolOnUseElement = document.getElementById('tool_on_use');
    toolOnUseElement.innerText = toolOnUse;
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
})

const toolOnUseElement = document.createElement('div');
toolOnUseElement.id = 'tool_on_use';
toolOnUseElement.appendChild(document.createTextNode(toolOnUse));

const accessoriesPanel = document.getElementById('tool_accessories_panel');
accessoriesPanel.appendChild(toolOnUseElement);