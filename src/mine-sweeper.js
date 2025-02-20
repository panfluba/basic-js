const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let res = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let sum = 0;
      for (let k = -1; k <= 1; k++) {
        for (let m = -1; m <= 1; m++) {
          matrix[i + k] && matrix[i + k][j + m] && matrix[i + k][j + m] && !(k === 0 && m === 0) && sum++;
        }
      }
      res[i][j] = sum;
    }
  }
  return res;
}


module.exports = {
  minesweeper
};
