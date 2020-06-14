const list = document.querySelector('.container-list');
const input = document.querySelector('input');
const listIcons = document.querySelectorAll('.container-list .list i')
// const icons = document.querySelectorAll('i');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const listAdded = document.createElement('div');
        listAdded.innerHTML = "<input type='checkbox'>" + '<span id="listContent">' + input.value + '</span>' + '<i class="fas fa-edit"></i>' + '<i class="fas fa-trash"></i>';
        listAdded.setAttribute('class', 'list');
        list.appendChild(listAdded);
    };
});

console.log(listIcons)

listIcons.forEach(listIcon => {
    listIcon.addEventListener('click', () => {
        alert('test')
    });
});