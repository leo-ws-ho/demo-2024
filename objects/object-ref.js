let x = 3;
let y = x;
y = y + 3;

// x: 3, y : 6

let a = {x: 3}
let b = a;
b.x += 3;

// both a.x and b.x are 6.

let c = [1, 2];
let d = c;

d[0] = 3;

// both c, d are [3, 2]