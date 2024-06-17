/**
 * Calculates the standard deviation of an array of numbers.
 * @param array An array of numbers.
 * @returns The standard deviation of the input array.
 */
export function stdDev(array: number[]): number {
   try {
      const n = array.length;
      const mean = array.reduce((a, b) => a + b) / n;
      return Math.sqrt(
         array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n,
      );
   } catch (e) {
      return 0;
   }
}

/**
 * Calculates the mean (average) of an array of numbers.
 * @param array An array of numbers.
 * @returns The mean of the input array.
 */
export function mean(array: number[]): number {
   try {
      return (
         array.reduce((previous, current) => (current += previous)) / array.length
      );
   } catch (e) {
      return 0;
   }
}

/**
 * Rounds a number to two decimal places.
 * @param num The number to round.
 * @returns The input number rounded to two decimal places.
 */
export function roundTo2(num: number): number {
   return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function kogasa(cov: number): number {
   return (
      100 * (1 - Math.tanh(cov + Math.pow(cov, 3) / 3 + Math.pow(cov, 5) / 5))
   );
}