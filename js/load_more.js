import { render } from "./render.js"
import { load_more_list } from "./data.js"

export function load_more(){
    let load_more = document.querySelector('.load_more')

    load_more.querySelector('button').addEventListener('click', ()=>{
        let work_showcase_block = document.querySelector('.showcase_list .row')

        work_showcase_block.innerHTML += `
            <div class="d-flex justify-content-center align-items-center spinner" style="position: relative; left: 25%; min-height: 100px;">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        `

        function showcase_item_html(el){
            return `
            <div class="col">
            <img src="${el.img_src}" alt="Image">
            <div class='hover d-flex justify-content-center align-items-center flex-column'>
                <div class='packaging'>
                    <svg>
                        <use href='./sprite.svg#save'></use>
                    </svg>
                    <span>Packaging</span> 
                </div>
                <span class='item_title'>${el.name}</span>
                <a href='#'>
                    <svg>
                        <use href='./sprite.svg#rocket'></use>
                    </svg>
                    <span>LAUNCH PROJECT</span>
                </a>
            </div>
        </div>
            `
        }
        
        load_more.remove()
        render(load_more_list, work_showcase_block, showcase_item_html)
    })
}