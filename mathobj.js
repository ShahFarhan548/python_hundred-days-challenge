var pi = Math.PI;
console.log(pi);
var e = Math.E;
console.log(e);
var ln = Math.LN2;
console.log(ln);
var a = 3+pi *(e +ln);
console.log (a);
//this is just to test pr
b= Math.ceil(a);
c=Math.floor(a);
d= Math.round(a);
e=Math.trunc(a);
console.log('\nOrignal no is: ',a,"\nrounds up to closest int: ",b,"\nrounds down to closest int: ",c,"\nrounds up if greater than .5, else lower: ",d,"\nonly integer: ",e)
//finding the power of a number, (number, power)
f = Math.pow(3,2);
console.log('\nPower is : ',f);
//finding the square root of a number, of 4 is 2
g= Math.sqrt(f);
//finding the cube root of a number, of 8 is 2
h= Math.cbrt(64);
console.log(h);
//to find the absolute 
i = Math.abs(-12);

console.log('\nthe absolute is : ',i)
console.log('\nthe algoritmic functions are: ', Math.log(i),Math.log(a));
console.log('\nthe min and max values are : ', Math.min(3,5,2,8,1));
console.log('\nthe max value is : ',Math.max(6,2,1,8,93));
console.log('\ntrignometric methods are : ',Math.sin(90),Math.cos(0),Math.tan(45))
