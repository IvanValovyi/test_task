export async function render(elements, block,  html){
    elements.forEach(el => {
        block.innerHTML+=html(el)
    })
    block.querySelector('.spinner').remove()
}