// export function maxProfit(prices: number[]): number {
//   let profit = 0;
//   let buyIndex = 0;
//   let sellIndex = 0;
//   do {
//     buyIndex = getLocalMin(prices, buyIndex);
//     sellIndex = getLocalMax(prices, buyIndex);
//     profit += prices[sellIndex] - prices[buyIndex];
//     buyIndex = sellIndex;
//   } while (sellIndex < prices.length - 1);
//   return profit;
// }

// function getLocalMin(prices: number[], startIndex: number): number {
//   for (let index = startIndex; index < prices.length - 1; index++) {
//     if (prices[index + 1] > prices[index]) {
//       return index;
//     }
//   }
//   return prices.length - 1;
// }

// function getLocalMax(prices: number[], startIndex: number): number {
//   for (let index = startIndex; index < prices.length; index++) {
//     if (prices[index + 1] < prices[index]) {
//       return index;
//     }
//   }
//   return prices.length - 1;
// }

export function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 0; i < prices.length; i += 1) {
    const now = prices[i];
    const tomorrow = prices[i + 1];
    if (now < tomorrow) profit += tomorrow - now;
  }
  return profit;
}
