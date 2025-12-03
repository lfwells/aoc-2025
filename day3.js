import run from "./boilerplate.js";
import { sum } from "./utils.js";

run(3, (input) => 
{
    //nearly a one-liner, but order matters...
    // let banks = (input.split("\n").map(bank => bank.split("").map(n => parseInt(n)).sort().reverse()).map(sorted => parseInt(sorted[0].toString()+sorted[1].toString())));
    
    // for the one that should have worked..
    let part1 = sum(input.split("\n").map(bank => bank.split("").map(n => parseInt(n))).map(twoHighest).map(combineIntoInt));

    let part2 = sum(input.split("\n").map(bank => bank.split("").map(n => parseInt(n))).map(bank => nHighest(bank, 12)).map(combineIntoInt));

    console.log({part1, part2}); 
});

function twoHighest(bank)
{
    let highest = 0;
    let secondHighest = 0;
    let highestIndex = 0;
    for (var i = 0; i < bank.length-1; i++) //minus one here to avoid highest number being found on final digit
    {
        if (bank[i] > highest)
        {
            highest = bank[i];
            highestIndex = i;
        }
    }
    for (var i = highestIndex + 1; i < bank.length; i++)
    {
        if (bank[i] > secondHighest)
        {
            secondHighest = bank[i];
        }
    }
    //console.log({bank: bank.join(""), highest, secondHighest, sort: [...bank].sort().reverse().slice(0, 2), sum: combineIntoInt([highest,secondHighest])});
    return [highest, secondHighest];
}

//nope too hard...
function nHighest(bank, n)
{
    if (n == 1) {
        console.log({bank, m: Math.max(...bank), n});
        return [Math.max(...bank)];
    }

    let highest = 0;
    for (var i = 0; i < bank.length; i++) //minus one here to avoid highest number being found on final digit
    {

        if (bank[i] > highest)
        {
            var recurse = nHighest([...bank.slice(i+1)], n-1);
            if (recurse == undefined || recurse.length == 0) continue;

            var a = [...bank.slice(0, i), ...recurse];
            if (i == bank.length -1)
                a = [bank[i]];
            console.log({a, c: combineIntoInt(a), bank, n});
            if (combineIntoInt(a) > highest)
                highest = bank[i];
        }
    }
    console.log({a});
    return [highest, ...a];
}


function combineIntoInt(arr)
{
    //return parseInt(two[0].toString()+two[1].toString());
    //to work better with part two:
    return parseInt(arr.join(""));
}