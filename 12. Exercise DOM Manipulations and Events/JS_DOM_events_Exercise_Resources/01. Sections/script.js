function create(words) {
   const n = words.length;
   const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

   const dp2 = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

   // dp[i][j] = min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1)



   // dp2[i][j] = min(dp2[i - 1][j - 1] + 1, dp2[i - 1][j] + 1, dp2[i][j - 1] + 1)


   
}

