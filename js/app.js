
import{render}from"./render.js"
import{all_work_showcase,all_social_media,all_dribble_shots}from"./data.js"
let work_showcase_block=document.querySelector('.showcase_list .row')
function showcase_item_html(el){return`
        <div class="col">
            <img src="${el.img_src}" alt="Image">
        </div>
    `}
render(all_work_showcase,work_showcase_block,showcase_item_html)
let social_media_block=document.querySelector('.social_media')
function social_media_item_html(el){return`
        <a href="${el.link}" class="d-flex justify-content-center align-items-center">
            <svg>
                <use href="${el.img_src}"></use>
            </svg>
        </a>
    `}
render(all_social_media,social_media_block,social_media_item_html)
let dribble_shots_block=document.querySelector('.dribble_shots_list')
function dribble_shots_item_html(el){return`<img src='${el.img_src}' class='col m-0 p-0'/>`}
render(all_dribble_shots,dribble_shots_block,dribble_shots_item_html)