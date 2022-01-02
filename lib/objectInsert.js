/**
 * changes object values immutably
 * @param {object} object object to be modified immutably
 * @param {string} path path to object property seperated by "." delimiters
 * @param {function} fn callback to set new value
 */
export const objectInsert = (object, path, fn) => {
    const route = path.split(".");
    let lastIndex = route.length - 1;
    const lastKey = route[lastIndex];
    const arr = [];

    let value = object, key;
    for (let i = 0; i <= lastIndex; i += 1){
        key = route[i];
        value = value[key];
        arr.unshift([key, value]);
    }
    arr[0] = [lastKey, fn(value, lastKey)];

    lastIndex = arr.length - 1;
    for (let j = 0; j < lastIndex; j += 1){
        const [k1, v1] = arr[j];
        const [k2, v2] = arr[j+1];
        arr[j+1] = [k2, Object.assign(Object.assign({}, v2), { [k1]: v1 })];
    }
    return Object.assign(Object.assign({}, object), { [route[0]]: arr[lastIndex][1] });
}

// example:
// const obj = {
//     a: 12,
//     b: [1,2],
//     c: {
//         d: 14,
//         e: {
//             f: "str",
//             g: {
//                 h: 18,
//                 i: 20
//             }
//         }
//     }
// };

// const newObj = objectInsert(obj, "c.e.g.h", (v, k) => v * 10);
// console.log(newObj);