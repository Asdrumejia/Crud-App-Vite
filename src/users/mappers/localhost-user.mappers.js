import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
//Nota: Este objeto luce como un usuario y regresa una nueva instancia de un usuario
export const localhostUserToModel = (localhostUser) => {
    
    //Aqui extraemos las propiedades del objeto exactamente como viene del backend
    const { id, isActive, balance, avatar, first_name, last_name, gender } = localhostUser;

    //Aqui traemos el nuevo objeto en la aplicacion como nosotros lo esperamos
    return new User({
        id,
        isActive, 
        balance, 
        avatar, 
        firstName: first_name, 
        lastName: last_name, 
        gender
    });
};
