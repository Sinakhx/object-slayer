/**
 * converts an object to a Map
 * @param {object} obj object to be converted into a map
 * @return {Map}
 */
export const convertObjectToMap = (obj) => new Map(Object.entries(obj));
