class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    const nums_counter: Record<string, number> = {};

    for (const key of nums) {
      nums_counter[key] = (nums_counter[key] ?? 0) + 1;
      if (nums_counter[key]! > 1) {
        return true;
      }
    }

    console.log(nums_counter);

    return false;
  }
}