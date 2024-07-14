// filter method is next to the forEach method 
/* it filter the array bsed on some test and return only the values that passes the certain test */

const nums = [12,30,40,13,17,19,60];

function filt(num)
{
    return num >10 && num<20;
}
/*  here the filt function is passed as argument to the filter method, without being invoked means 
it runs filt function for each value of the nums array in the filter method */ 
console.log(nums.filter(filt));