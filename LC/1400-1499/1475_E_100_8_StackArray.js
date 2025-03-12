/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices)
{
	let finalPrice = [];

	for (let i = 0; i < prices.length; i++)
	{
		let discount = 0;
		for (let j = i + 1; j < prices.length; j++)
		{
			if (prices[j] && prices[i] >= prices[j])
			{
				discount = prices[j];
				j = prices.length;
			}
		}
		finalPrice.push(prices[i] - discount)
	}

	return finalPrice;
};

// const testVal = [8, 4, 6, 2, 3];
// const testVal = [1, 2, 3, 4, 5];
const testVal = [10, 1, 1, 6];

console.log(finalPrices(testVal))