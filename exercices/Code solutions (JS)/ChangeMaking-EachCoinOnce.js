// Consider the following variation on the change-making problem (Exercise 6.17): you are given
// denominations x1, x2, . . . , xn, and you want to make change for a value v, but you are allowed to
// use each denomination at most once.


function change(coinsArray, V) {

    const n = coinsArray.length;
    const results = [];

    for (v = 0; v <= V; v++) {
        results[v] = [];
        for (i = 0; i <= n; i++) {
            results[0][i] = true;
        }
    }

    for (v = 1; v <= V; v++) {
        for (i = 0; i <= n; i++) {
            results[v][i] = false;
            let previousValue = v - coinsArray[i - 1];
            results[v][i] = results[v][i - 1] || (results[previousValue] ? results[previousValue][i - 1] : false);
        }
    }

    console.log(results);
    return results[V][n]

}

change([5, 10, 2, 1], 15);
// Outputs true
change([5, 10, 2, 1], 19);
// Outputs false

// Time complexity O(nv)