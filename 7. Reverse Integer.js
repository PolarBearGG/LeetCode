/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    

const z = +String(Math.abs(x)).split('').reverse().join('');

    
if (z >= (Math.pow(2, 31)*-1) && z <= (Math.pow(2, 31)-1)) {
    
     return x>=0?z:z*-1;
    
} else {
   return 0;
}

};