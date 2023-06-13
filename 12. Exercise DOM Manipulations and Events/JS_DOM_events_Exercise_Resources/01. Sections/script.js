//function create(words) {
//   const n = words.length;
//   const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

//   const dp2 = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

// dp[i][j] = min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1)



// dp2[i][j] = min(dp2[i - 1][j - 1] + 1, dp2[i - 1][j] + 1, dp2[i][j - 1] + 1)



//}


function create(words) {
   for (let word of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = word;
      p.style.display = "none";
      div.appendChild(p);
      div.addEventListener("click", showP);
      document.getElementById("content").appendChild(div);
   }

   function showP(event) {
      if (event.target.nodeName === "P") {
         return;
      }
      let p = event.target.children[0];
      p.style.display = "block";
   }
}

