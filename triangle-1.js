/* Write a program to print a right-angled triangle.  Use TRIANGLE_BASE as the constant indicating the size of the triangle.

if TRIANGLE_BASE is 5
*               i = 0     print 1 *
**              i = 1     print 2 *
***             i = 2     print 3 *
****
*****
should be printed out.
 */

const TRIANGLE_BASE = 10;

for (let i = 0; i < TRIANGLE_BASE; i++) {
    // let line = '';
    // for (let j = 0; j < i + 1; j++) {
    //     line += "*";
    // }
    // console.log(line);
    console.log('*'.repeat(i+1));
}


