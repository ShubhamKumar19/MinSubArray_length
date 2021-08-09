//this function should return the minimal length of contigious subarray for which the sum is greater or equal to num
function minSubArrayLen(arr,num)
{
    if(num<0)
    return 0;
var i=-1,j=-1;
var minlength=arr.length+1 ;
var sum=0;
while(i<arr.length)
{
while(sum<num)
{
    i++;
    if(i==arr.length)
    break;
    sum+=arr[i];
}
while(sum>=num)
{
    j++;
    if(i-j<minlength)
       minlength=i-j;
    sum=sum-arr[j];
}
}
if(minlength==arr.length+1)
return 0;
return minlength+1;
}
console.log(minSubArrayLen([2,1,6,5,4],9));