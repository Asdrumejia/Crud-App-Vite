import './render-buttons.css';
import userStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerHTML = ' Next >';

    
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '< Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = userStore.getCurrentPage();
    
    element.append(prevButton, currentPageLabel, nextButton);

    
    
    //Funcionalidad botones Next - Prev
    prevButton?.addEventListener('click', async() => {
        await userStore.loadPreviousPage();
        currentPageLabel.innerText = userStore.getCurrentPage();
        renderTable(element);
    })

    nextButton?.addEventListener('click', async() => {
        await userStore.loadNextPage();
        currentPageLabel.innerText = userStore.getCurrentPage();
        renderTable(element);
    });

};