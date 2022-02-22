let taskCount = 1;//To allocate ids to newly created tasks
function addTask(){
    taskCount += 1
    let x = document.getElementById('add-task').value;
    if(/\w{3,10}/.test(x) == false){
        alert('Empty, Enter a task');
        return 0;
    }
    let y = document.getElementById('activities-U');
    y.innerHTML += `<li id='T-${taskCount}' class='task'>${x}<button onclick="clearTask('T-${taskCount}')" class='delete-buttons'><i class="fas fa-times"></i></button><button onclick = "finishedTask('T-${taskCount}')" class='success-buttons'><i class="fa fa-duotone fa-check"></i></button></li>`
    document.getElementById('add-task').value = ' ';
}

function clearTask(n){
    x = document.getElementById(n);
    x.innerHTML = 'Task has been removed!';
    setTimeout('x.remove()', 1200);
}


let trashCount = 0;//To allocate ids to newly created tasks
function finishedTask(n){
    x = document.getElementById(n);
    x1 = x.textContent;
    x.innerHTML = 'Task has been ticked!';
    setTimeout('x.remove()', 1200);
    y = document.getElementById('activities-C');
    y.innerHTML += `<li id='T-${trashCount}'>${x1}<button onclick="trash('T-${trashCount}')" class='trash-button'><i class="far fa-trash-alt"></i></button></li>`;

}

function trash(n){
    x = document.getElementById(n);
    console.log(n);
    x.remove();
}

//The navigate between the tabs
function openTab(evt, info, tab, retab){
    //Declare variables;
    var i, tabContent, tabLinks;

    //Get all elements with class='tabcontent' and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for(i = 0;i < tabContent.length; i++){
        tabContent[i].style.display='none';
        document.getElementById(retab).style.backgroundColor = "white";
    }

    //Show the current tab, and add an "active" class to the button that opened the tab    
    document.getElementById(info).style.display = 'block';

    tabLinks = document.getElementById(tab);
    tabLinks.style.border = '0px solid black';
    tabLinks.style.backgroundColor="grey";
}