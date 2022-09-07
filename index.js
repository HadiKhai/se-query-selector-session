
const flex = document.querySelector('#flexbox');

flex.classList.add('flex');

// the only purpose of this array is to create an array of 4 element
// to create for items in the flexbox at the initiation
const arr = Array.from({length: 4}, (v, i) => i + 1);

const appendFlexGrowForItem = (element) => {
    element.addEventListener('click', (event) => {
        element.classList.toggle('flex-grow');
        // To stop the propagation from reaching the flex container and adding a new item
        // comment the line below to see the propagation effect
        event.stopPropagation();
    })
}

const appendItemToFlex = (flexElement) => {
    const div = document.createElement('div');
    appendFlexGrowForItem(div);
    div.classList.add('item');
    flexElement.appendChild(div);
}

arr.forEach(() => {
    appendItemToFlex(flex);
});

flex.addEventListener('click', () => {
    appendItemToFlex(flex);
})


const resetButton = document.querySelector("#reset");

const wrapButton = document.querySelector("#wrap");

resetButton.addEventListener("click", () => {
    const items = flex.querySelectorAll('.item');
    items.forEach((item,index) => {
        item.classList.remove("flex-grow")
        if(index>3){
            flex.removeChild(item);
        }
    })
})