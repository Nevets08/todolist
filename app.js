const list = document.querySelector('.container-list');
const filtersCounter = document.querySelector('.filters p span');
const filters = document.querySelector('.filters');
let done = false;
let todoCount = 0;
// edit
// console.log(list.lastChild.children[2])
// delete
// console.log(list.lastChild.children[3])

list.children[1].addEventListener('keydown', (e) => {
    // Create div .list contains an input checkbox, the value of the input and icons : delete and edit
    if (e.key === 'Enter') {
        
        
        // TODO : Doesn't create divs when there is only spaces
        
        const listAdded = document.createElement('div');
        listAdded.innerHTML = "<input type='checkbox'>" + "<input type='text' id='listContent' value=" + list.children[1].value + ">" + '<i class="fas fa-trash"></i>';
        listAdded.classList.add('list');
        list.appendChild(listAdded);
        
        // Clear the value of input text
        list.children[1].value = '';
        
        // Count the task left when it is created
        todoCount++;
        filtersCounter.innerHTML = todoCount;
        
        const contentListInput = document.getElementById('listContent');
        // When the task is done : click on the checkbox
        list.lastChild.firstChild.addEventListener('change', () => {
            if (contentListInput.classList.contains('strikethrough')) {
                contentListInput.classList.remove('strikethrough');
                
                todoCount++;
                filtersCounter.innerHTML = todoCount;
            } else {
                contentListInput.classList.add('strikethrough');
                        
                todoCount--;
                filtersCounter.innerHTML = todoCount;
            }
        });
        
        const icons = document.querySelectorAll('.container-list i');
        // Buttons on list created (edit, delete)
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                // Delete button
                if (icon.className === 'fas fa-trash') {
                    icon.parentElement.remove();
                    todoCount--;
                    filtersCounter.innerHTML = todoCount;
                }
            });           
        });
    };
});