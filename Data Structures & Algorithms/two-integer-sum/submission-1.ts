class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
            const element = target - nums[i]!;
            if (nums.includes(element) && nums.indexOf(element) != i) {
                const secondIndex = nums.indexOf(element);
                if (secondIndex < i) return [secondIndex, i];
                return [i, nums.indexOf(element)];
            }
        }
        return [];
    }
}
