// Render function

// The first parameter takes the array of elements you want to display, the second parameter is the block
//  in which the content will be rendered, the third parameter is the function that returns the HTML code
//  of the element to be rendered.

export async function render(elements, block,  html){
    elements.forEach(el => {
        block.innerHTML+=html(el)
    })
    let spinner = block.querySelector('.spinner')
    if (spinner) {
        spinner.remove()
    }
}