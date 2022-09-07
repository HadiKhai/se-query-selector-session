
const flex  = document.querySelector('#flexbox');

flex.classList.add('flex');

const arr = Array.from({length: 4}, (v, i) => i + 1);

arr.forEach(() => {
    const div = document.createElement('div');
    div.classList.add('item');
    flex.appendChild(div);
})