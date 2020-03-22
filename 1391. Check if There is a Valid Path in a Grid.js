/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  if (rows === 1 && cols === 1) {
    return true;
  }
  function walk(from) {
    let current;
    let x = 0;
    let y = 0;
    let end = false;
    while (true) {
      if (y < 0 || rows <= y) {
        return false;
      }
      if (x < 0 || cols <= x) {
        return false;
      }
      current = grid[y][x];
      if (current == 1) {
        if (from == "left") {
          x += 1;
        } else if (from == "right") {
          x -= 1;
        } else {
          return false;
        }
      }
      if (current == 2) {
        if (from == "bottom") {
          y -= 1;
        } else if (from == "top") {
          y += 1;
        } else {
          return false;
        }
      }
      if (current == 3) {
        if (from == "left") {
          y += 1;
          from = "top";
        } else if (from == "bottom") {
          from = "right";
          x -= 1;
        } else {
          return false;
        }
      }
      if (current == 4) {
        if (from == "bottom") {
          x += 1;
          from = "left";
        } else if (from == "right") {
          y += 1;
          from = "top";
        } else {
          return false;
        }
      }
      if (current == 5) {
        if (from == "top") {
          x -= 1;
          from = "right";
        } else if (from == "left") {
          y -= 1;
          from = "bottom";
        } else {
          return false;
        }
      }
      if (current == 6) {
        if (from == "top") {
          x += 1;
          from = "left";
        } else if (from == "right") {
          y -= 1;
          from = "bottom";
        } else {
          return false;
        }
      }
      if (end) {
        return true;
      }

      if (x === cols - 1 && y === rows - 1) {
        end = true;
      }
    }
    return true;
  }

  return walk("left") || walk("right") || walk("top") || walk("bottom");
};
