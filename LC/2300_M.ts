function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    let suc = [];

    for( let i = 0; i < spells.length; i++ )
    {
        let single = 0;
        for(let j = 0; j < potions.length; j++)
        {
            if(spells[i] * potions[j] >= success)
                single++;
        }
        suc.push(single);
    }
    
    return suc;
};

// const spells = [5,1,3], potions = [1,2,3,4,5], success = 7;
const spells = [3,1,2], potions = [8,5,8], success = 16;

console.log( successfulPairs(spells, potions, success) );