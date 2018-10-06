// Finds substring with the largest sum

function largestSum(array) {

  if (array.length === 0) {
    return 0;
  }

  const n = array.length;
  const S = [];

  S[0] = array[0];
  for (i =1; i<n; i++) {
    S[i] = array[i] + Math.max(0, S[i-1]);
  }

  console.log(S)
  return Math.max(...S);
}

// largestSum([1,-2,-3,4,5, -10])
// Outputs 9

// largestSum([-7,9,4,7,-10])
// Outputs 20