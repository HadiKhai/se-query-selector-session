
const flex = document.querySelector('#flexbox')

const boxInstantiation = (element, flexGrow=true) => {
    // the only purpose of this array is to create an array of 4 element
    // to create for items in the flexbox at the initiation
    const arr = Array.from({length: 4}, (v, i) => i + 1);
    // [1,2,3,4]

    element.classList.add('flex');
    arr.forEach(() => {
        appendItemToFlex(element, flexGrow);
    });
}

const appendFlexGrowForItem = (element) => {
    element.addEventListener('click', (event) => {
        element.classList.toggle('flex-grow');
        // To stop the propagation from reaching the flex container and adding a new item
        // comment the line below to see the propagation effect
        event.stopPropagation();
    })
}

const appendItemToFlex = (flexElement, flexGrow=true) => {
    const div = document.createElement('div');
    if(flexGrow){
        appendFlexGrowForItem(div);
    }
    const text = document.createElement("p");
    div.appendChild(text)
    div.classList.add('item');
    flexElement.appendChild(div);
}

boxInstantiation(flex);

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

wrapButton.addEventListener('click', (event) => {
    flex.classList.toggle("wrap")
    wrapButton.textContent = flex.classList.contains('wrap') ? "Unwrap" : "Wrap"
    // if( flex.classList.contains('wrap')){
    //     wrapButton.textContent = "Unwrap"
    // }
    // else{
    //     wrapButton.textContent = "Wrap"
    // }
});


//Flex Direction Code

const flexDirection = document.querySelector("#flexDirection");

boxInstantiation(flexDirection);

const directionButton = document.querySelector("#direction");

const toggleDirection = (element,button) => {
    element.classList.toggle("dir-column")
    button.textContent = element.classList.contains("dir-column") ? "Row": "Column"
}

flexDirection.addEventListener("click", () => {
    toggleDirection(flexDirection,directionButton)
})


directionButton.addEventListener("click", () => {
    toggleDirection(flexDirection,directionButton)
})


//Flex Basis

const flexBasis = document.querySelector("#flexBasis");

boxInstantiation(flexBasis, false);

const boxInput = document.querySelector('[name="boxInput"]');

const basisInput = document.querySelector('[name="basisInput"]')

const items = flexBasis.querySelectorAll(".item")

items.forEach((item,index) => {
    item.addEventListener("click", () => {
        boxInput.value = index+1;
        items.forEach((item) => item.classList.remove("blueItem"));
        item.classList.add('blueItem');
        const basisPercentageString = item.querySelector("p").textContent;
        // Exercise: Use regular expression to extract the number
        basisInput.value = parseInt(basisPercentageString.slice(0, basisPercentageString.length - 1));
    })
})

boxInput.addEventListener('input', (event) => {
    const input = event.target.value;
    const items = flexBasis.querySelectorAll(".item");

    items.forEach((item) => item.classList.remove("blueItem"));

    if(input> 0 && input<=4){
        items[input - 1].classList.add("blueItem")
    }
})

basisInput.addEventListener("input", (event) => {
    const input = event.target.value;
    const item = flexBasis.querySelector(".blueItem");
    if(item && input){
        // input+"%"
        item.style.flexBasis = `${input}%`;
        item.querySelector("p").textContent = `${input}%`;
    }
})



