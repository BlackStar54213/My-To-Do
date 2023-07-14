//array for storing data
//checking for already saved data
let events;
//retre

const savedTodo = JSON.parse(localStorage.getItem('todos'));


if (Array.isArray(savedTodo)) {
    events = savedTodo;
} else {
    events = [{
        eventtitle: 'get food',
        time: '5pm',
        duedate: '2021-10-04',
        eventid: 'id1'
    },
    {
        eventtitle: 'get drinks',
        time: '5pm',
        duedate: '2021-10-04',
        eventid: '1d2'
    },
    {
        eventtitle: 'get dress',
        time: '5pm',
        duedate: '2021-10-04',
        eventid: '1d3'
    }];
}
render();

//add an event to the list
function addTodo() {
    const date = document.getElementById('date');
    const dater = date.value;

    const time = document.getElementById('time');
    const timer = time.value;

    const textbox = document.getElementById('event');
    const title = textbox.value;

    if (dater == '' || timer == '' || title == '') {
        window.alert("Please fill in all the input boxes");
    } else {
        const id = '' + new Date().getTime();
        const titler = title.toUpperCase();
        events.push({
            eventtitle: titler,
            time: timer,
            duedate: dater,
            eventid: id
        });
        render();
        saveTodo();
    }
}

function render() {
    document.getElementById('displayer').innerHTML = '';

    events.forEach(function (todo) {
        const element = document.createElement('div');
        const eventer = todo.eventtitle.toUpperCase();
        element.innerText = eventer + ' on ' + todo.duedate + ' by ' + todo.time;

        const deletebtn = document.createElement('button');
        deletebtn.innerText = 'Delete';
        deletebtn.style = 'margin-left:20px; padding : 3px; border-radius:5px; border:none; background-color: grey; color: white;';
        element.style = 'text-align: right; margin-bottom:8px;';
        deletebtn.onclick = deleteTodo;
        deletebtn.id = todo.eventid;
        element.appendChild(deletebtn);
        const todoList = document.getElementById('displayer');
        todoList.appendChild(element);
    });
}
// delete the event
function deleteTodo() {
    const deletebtn = event.target;
    const idToDelete = deletebtn.id;

    events = events.filter(function (todo) {
        if (todo.eventid === idToDelete) {
            return false;
        } else {
            return true;
        }
    });
    render();
    saveTodo();
}

//to save to the local storage
function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(events));
}