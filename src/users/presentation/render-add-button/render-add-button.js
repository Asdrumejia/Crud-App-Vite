import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';


//Funcion con callback
// /**
//  * 
//  *  @param {HTMLDivElement} element 
//  *  @param {() => void} callback
//  */
// export const renderAddButton = (element, callback) => {

//     const fabButton = document.createElement('button'); 
//     fabButton.innerText = '+';
//     fabButton.classList.add('fab-button');

//     element.append(fabButton);


//     //TODO:
//     fabButton?.addEventListener('click', () => {

//         if(!callback) return;
//         // throw Error('No implementado');

//         callback();
//     })
// };



/**
 * 
 *  @param {HTMLDivElement} element 
 */
export const renderAddButton = (element) => {

    const fabButton = document.createElement('button'); 
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);


    //TODO:
    fabButton?.addEventListener('click', () => {
        showModal();
    });
};