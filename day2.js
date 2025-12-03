import run from "./boilerplate.js";

run(2, (input) => 
{
    let part1 = 0;

   let pairs = input.split(",").map(pair => pair.split("-").map(n => parseInt(n)));
   for (var pair of pairs)
   {
        let [start,end] = pair;
        for (var i = start; i <= end; i++)
        {
            if (isInvalid(i))
                part1 += i;
        }
        //break;
   }

   console.log({part1});
});

function isInvalid(n)
{
    let s = n.toString();
    let halfLength = s.length / 2;
    var allSame = true;
    for (var i = 0; i < halfLength; i++)
    {
        var start = s[i];
        var end = s[halfLength+i];
        //console.log({start,end});
        if (start != end)
        {
            allSame = false;
            break;
        }
    }
    return allSame;
}