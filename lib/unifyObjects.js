/**
 * joins two or more objects into one object
 * @param  {object[]} objects objects to join together
 * @return {object} joined object
 */
 export const unifyObjects = (...objects) => Object.assign(Object.create(null), ...objects);
