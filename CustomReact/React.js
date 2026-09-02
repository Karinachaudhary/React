function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
}

//how react create element and sees them
const reactElement = {
    type : 'div',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },    children : 'CLick me to go to Google'
    }


const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)
