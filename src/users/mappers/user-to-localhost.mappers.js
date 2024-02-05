import { User } from "../models/user"

/**
 * 
 * @param {User} user 
 */
//Nota: Este mapper es el opuesto al mapper anterior(localhostUserToModel ) 
export const userModelToLocalhost = (user) => {
    
    //Aqui extraemos las propiedades del objeto como las queremos mostrar en la aplicacion
    const { id, isActive, balance, avatar, firstName, lastName, gender } = user;

    //Aqui traemos las propiedades del objeto exactamente como viene del backend
    return {
        id,
        isActive, 
        balance, 
        avatar, 
        first_name: firstName, 
        last_name: lastName,  
        gender
    };
};
