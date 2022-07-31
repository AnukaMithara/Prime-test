function primeTest(x)
{
  if (x===1)
  {
    return false;
  }else if(x === 2)
  {
    return true;
  }else
  {
    for(var n = 2; x < x; n++)
    {
      if(x % n === 0)
      {
        return false;
      }
    }return true;  
  }
}

console.log(primeTest(6));
