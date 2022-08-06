const Number_Sum = (N) => 
{
	var sum=0,num;
	while(N>0)
	{
	  num = N%10
	  sum=sum+num
	  N=parseInt(N/10)
	}
	return sum;
};

