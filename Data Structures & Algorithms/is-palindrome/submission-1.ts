class Solution {
    private isValid(c: string): boolean {
        return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      
        let startIndex = 0;
        let endIndex = s.length - 1;

        while (startIndex < endIndex) {
            if (!this.isValid(s[startIndex]!) || s[startIndex] === " ") {
                startIndex++;
                continue;
            }
            if (!this.isValid(s[endIndex]!) || s[endIndex] === " ") {
                endIndex--;
                continue;
            }

            if (s[startIndex]?.toLowerCase() !== s[endIndex]?.toLowerCase()) {
                return false;
            }
            startIndex++;
            endIndex--;
        }

        return true;
    }
}
