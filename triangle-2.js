/* equilateral triangle
if TRIANGLE_HEIGHT = 3
  *
 ***
*****
should be printed.

i          space        asterisk
0            2              1
1            1              3 
2            0              5
*/

const TRIANGLE_HEIGHT = 5;

for (let i = 0; i < TRIANGLE_HEIGHT; i++) {
  console.log(" ".repeat(TRIANGLE_HEIGHT - i - 1) + 
              "*".repeat(2 * i + 1));
}
