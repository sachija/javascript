const Print_pattern = (N) => 
{
 let n = ""
 for(let i=1; i<=N; i++)
 {
   for(let j=1; j<=i; j++)
   {
     n = n + "*";
   }
    n = n + "\n";
 }
 console.log(n);
};

