const list = document.querySelector('.container-list');
const input = document.querySelector('input');
// const icons = document.querySelectorAll('i');
const listIcons = document.querySelectorAll('.container-list .list input[type=checkbox]');
const filtersCounter = document.querySelector('.filters p span');
let done = false;

input.addEventListener('keydown', (e) => {
    // Create div .list contains an input checkbox, the value of the input and icons : delete and edit
    if (e.key === 'Enter') {
        const listAdded = document.createElement('div');
        listAdded.innerHTML = "<input type='checkbox'>" + '<span id="listContent">' + input.value + '</span>' + '<i class="fas fa-edit"></i>' + '<i class="fas fa-trash"></i>';
        listAdded.setAttribute('class', 'list');
        list.appendChild(listAdded);

        // When the task is done : click on the checkbox
        listAdded.addEventListener('change', () => {
            
            if (listAdded.classList.contains('strikethrough')) {
                listAdded.classList.remove('strikethrough');
                done = false;
            } else {
                listAdded.classList.add('strikethrough');
                done = true;
            }
            console.log(done)

        });
    };
});
