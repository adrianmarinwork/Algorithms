using System.Numerics;
public class Spiral
{
    public static BigInteger Sum(BigInteger size)
    {      
      BigInteger division = size*size / 2;
      if((division * 2) != (size*size)){
        division++;
      }
      return division + (size - 1);
    }
}
