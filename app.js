const listContainer = document.querySelector('.container-list');
const filtersCounter = document.querySelector('.filters p span');
const filters = document.querySelector('.filters');
let todoCount = 0;
let i = 0;

const lists = [];

listContainer.children[1].addEventListener('keydown', (e) => {
    // Create div .list contains an input checkbox, the value of the input and icon : delete
    if (e.key === 'Enter') {
        // Create an object in the lists array
        i++;
        let list = {
            id: i,
            done: false,
            content: listContainer.children[1].value
        };

        lists.push(list);
        console.log(list);

        // document.getElementById('ici').innerHTML = list.children[1].value;
        // TODO : Doesn't create divs when there is only spaces
        
        // Doesn't create divs if there is no character
        if (listContainer.children[1].value.length === 0) {
            return;
        }
        
        // for (let i = 0; i < lists.length; i++) {
        //     const listAdded = document.createElement('div');
        //     listAdded.innerHTML = lists[i].content;
        //     listAdded.classList.add('list');
        //     list.appendChild(listAdded);
        // };

        const listAdded = document.createElement('div');
        listAdded.innerHTML = `<input type='checkbox'><input type='text' class='listContent' value="${listContainer.children[1].value}"> <i class="fas fa-trash"></i>`;
        listAdded.classList.add('list');
        listContainer.appendChild(listAdded);

        // Clear the value of input text
        listContainer.children[1].value = '';

        // Count the task with the last element of lists.id
        let listsLastValue = lists[lists.length - 1].id;
        filtersCounter.innerHTML = listsLastValue;
        console.log(listsLastValue);

        // When the task is done : click on the checkbox
        const contentListInput = listContainer.lastChild.children[1];

        listContainer.lastChild.firstChild.addEventListener('change', () => {
            if (contentListInput.classList.contains('strikethrough')) {
                contentListInput.classList.remove('strikethrough');
                lists[lists.length - 1].done = false;
                // filtersCounter.innerHTML = listsLastValue;
            } else {
                contentListInput.classList.add('strikethrough');
                lists[lists.length - 1].done = true;
            }
            console.log(list);
        });

        // Edit the value of list

        // contentListInput.addEventListener('keydown', () => {
        //     if (e.key === 'Enter') {

        //     }
        // });

        // Delete list

        const icons = document.querySelectorAll('i');

        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                if (icon.className === 'fas fa-trash') {
                    i--;
                    icon.parentElement.remove();
                    lists.pop();
                    let listsLastValue = lists[lists.length - 1].id;
                    filtersCounter.innerHTML = listsLastValue;
                    console.log(lists);
                }
            });
        });
    };
});

// All button

filters.children[1].addEventListener('click', () => {

});

// In progress button

filters.children[2].addEventListener('click', () => {

});

// Done button

filters.children[3].addEventListener('click', () => {

});