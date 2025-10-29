// 21
// function test(num)
// {
//     for (let i = 1; i < num; i++) {
//         let rows = "";
        
//         for (let j = 1; j < num; j++) {
//             if(i === 1 || i === num - 1 || j === 1 || j === num - 1) {
//                 rows += "*";
//             }  
//             else {
//                 rows += " ";
//             }
//         }

//         console.log(rows);
//     }
// }

// 22
function test(num) {
    for (let i = 1; i < 2 * num - 2; i++) {
        let rows = "";

        for (let j = 1; j < 2 * num - 2; j++) {
            rows += num - mindis(i, j, num);
        }
        console.log(rows);
    }
}

function mindis(i, j, num) {
    const left = i;
    const top = j;
    const right = 2 * num - i - 2;
    const bottom = 2 * num - j - 2;

    return Math.min(left, top, right, bottom);
}

test(5);