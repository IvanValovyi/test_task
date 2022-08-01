
export async function render(elements,block,html){elements.forEach(el=>{block.innerHTML+=html(el)})
let spinner=block.querySelector('.spinner')
if(spinner){spinner.remove()}}