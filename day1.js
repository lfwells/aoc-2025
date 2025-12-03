import run from "./boilerplate.js";
import { sum } from "./utils.js";

run(1, (input) => 
{
    var part1 = 0;
    var part2 = 0;
    var lock = 50;
    var size = 100;
    var lines = input.split("\n").map(l => [l.substr(0,1), parseInt(l.substr(1))]);

    for (var line of lines)
    {
        let [direction, amount] = line;
        if (direction == "L") amount *= -1;

        //throwing it all out and going to do it the dumb way...
        /*
        let original = lock;
        let turns = Math.floor(Math.abs((lock+amount) / size));
        //console.log(lock+amount);
        //console.log((lock+amount) / size);

        let waszero = false;
        lock = (lock + amount) % size;

        if (lock == 0)
        {
            part1++;
            if (amount < 0)
                turns++;
        }

        if (lock < 0) { lock = size + lock; // 0 case?
            waszero = true;
            }

        
        part2+= turns;


        if (lock == 0)
        {
        console.log({original, amount, new: lock, part2, turns});
        }*/
       while (amount != 0)
       {
            let take = (direction == "L") ? -100 : 100;
            if (amount < 100 && amount >= 0)
            {
                take = amount;
            }
            if (amount < 0 && amount > -100)
            {
                take = amount;
            }
            console.log({lock, amount, take});
            
            amount -= take;
            lock += take;
             if (lock < 0) { lock = size + lock; part2++; }
             else if (lock >= 100) { lock = lock - size; part2++; }
             else if (lock == 0) part2++;
    
            console.log({lock, part2});
       }
    }

    console.log({part1, part2});
});