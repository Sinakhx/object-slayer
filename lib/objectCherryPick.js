/**
 * cherry-picks props from an object to create a new object
 * @param {object} object to pick props from
 * @param {string[]} props to pick
 * @returns a new object with selected props
 */
export const objectCherryPick = (object, props) => {
  let i;
  const len = props.length;
  const result = {};
  for (i = 0; i < len; i += 1) {
    const prop = props[i];
    result[prop] = object[prop];
  }
  return result;
};
