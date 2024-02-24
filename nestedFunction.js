const a=6, b=5;
console.log(SumOfSquares(a,b));

function SumOfSquares(x,y)
{
    function square(num)
    {
        return num*num;
    }
    return square(x)+square(y);
}