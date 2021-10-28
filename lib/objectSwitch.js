/**
 * @param {string | number | boolean | symbol} item (of primitive type) 
 * @return {any} selected case from a key-value pair object (working like a switch-case in a functional manner)
 */
 export const objectSwitch = (item) => (pairs = {}, defaultValue) => item in pairs ? pairs[item] : defaultValue;
