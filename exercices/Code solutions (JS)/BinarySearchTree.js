function search(keys, frequencies) {

    const n = keys.length;

    const cost = [];
    for (let i = 0; i < n; i++) {
        cost[i] = [];
        cost[i][i] = frequencies[i];
    }

    for (let l = 2; l <= n; l++) {
        for (let i = 0; i <= n - l + 1; i++) {

            let j = i + l - 1;
            cost[i][j] = Infinity;

            for (let r = i; r <= j; r++) {
                let curr = ((r > i && cost[i]) ? cost[i][r - 1] : 0) + ((r < j && cost[r + 1]) ? cost[r + 1][j] : 0)
                    + sumRange(frequencies, i, j);

                if (cost[i][j] > curr)
                    cost[i][j] = curr;
            }
        }
    }
    console.log(cost);
    return cost[0][n - 1];
}

function sumRange(frequencies, i, j) {
    let s = 0;
    for (let k = i; k <= j; k++) {
        s += frequencies[k];
    }
    return s;
}

search([10, 20, 30, 40, 50], [9, 15, 20, 5, 2]);