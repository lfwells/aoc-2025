import run from "./boilerplate.js";

run(2, (input) => 
{
    let result = 0;

   let pairs = input.split(",").map(pair => pair.split("-").map(n => parseInt(n)));
   for (var pair of pairs)
   {
        let [start,end] = pair;
        for (var i = start; i <= end; i++)
        {
            if (isInvalid(i))
                result += i;
        }
   }

   console.log({result}); 
});

function isInvalid(n)
{  
    let s = n.toString();
    let halfLength = s.length / 2;
    for (var l = 1; l <= halfLength; l++)
    {
        if (checkSequence(s, l)) return true;
    }
    return false;
}
function checkSequence(s, length)
{
    var lastSize = -1;
    for (var i = 0; i < length; i++)
    {
        var allSameForThisI = true;
        var thisI = s[i];
        //console.log({s, thisI});
        for (var j = i; j < s.length; j+=length)
        {
            //console.log(thisI, s[j]);
            if (s[j] != thisI) {
                allSameForThisI = false; break;
            }
        }
        if (allSameForThisI == false)
            return false;

        if (j < lastSize)
            return false;
        lastSize = j;

    }
    return true;
}

//part 1 version
function isInvalidPart1(n)
{
    let s = n.toString();
    let halfLength = s.length / 2;
    var allSame = true;
    for (var i = 0; i < halfLength; i++)
    {
        var start = s[i];
        var end = s[halfLength+i];
        console.log({start,end});
        if (start != end)
        {
            allSame = false;
            break;
        }
    }
    return allSame;
}