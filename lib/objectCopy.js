/**
 * clones an object
 * @param {object} obj object to be cloned
 * @returns {object}
 */
export const objectCopy = (obj) => ("structuredClone" in globalThis) ? globalThis.structuredClone(obj) : JSON.parse(JSON.stringify(obj));
