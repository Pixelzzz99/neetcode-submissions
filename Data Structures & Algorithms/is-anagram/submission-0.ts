class Solution {
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
      const index1 = s.charCodeAt(i) - "a".charCodeAt(0);
      const index2 = t.charCodeAt(i) - "a".charCodeAt(0);

      count[index1]++;
      count[index2]--;
    }

    console.log(count);

    return count.every(val => val === 0);
  }
}