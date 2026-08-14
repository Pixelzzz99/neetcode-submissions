class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
   isSubsequence(s: string, t: string): boolean {
    let s1 = 0;
    let s2 = 0;
    let counter = 0;

    while (s2 < t.length) {
      if (s[s1] == t[s2]) {
        counter++;
        s1++;
      }
      s2++;
    }

    return counter === s.length;
  }
}
