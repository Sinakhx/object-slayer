
/**
 * @param {object} obj object to be checked
 * @return {boolean} true if the object is empty ({})
 */
 export const isEmptyObject = (obj) => !Object.getOwnPropertyNames(obj).length && !Object.getOwnPropertySymbols(obj).length;
