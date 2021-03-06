/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */

const getFlags = arr => {
                Array1 = arr[0].flags;
                Array2 = arr[1].flags;
                return Array1.concat(Array2);
};

export default getFlags;
