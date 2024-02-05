import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderModal } from './presentation/render-modal/render-modal';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';
import { saveUser } from './use-cases/save-user';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {
   element.innerHTML = `
   <div class="loading-container">
   <div class="loading">
     ...Loading...
   </div>
 </div>
   `;
   await usersStore.loadNextPage();
   element.innerHTML = '';

   renderTable(element);
   renderButtons(element); 
  //  renderAddButton(element, () => {console.log('Desde el padre')});
   renderAddButton(element);
   renderModal(element, async(userLike) => {
      const user = await saveUser(userLike);
      // console.log(user);
      usersStore.onUserChanged(user),
      renderTable(); 
   });

};