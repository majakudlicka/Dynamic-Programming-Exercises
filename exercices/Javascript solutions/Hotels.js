//Problem
//You are going on a long trip. You start on the road at mile post 0. Along the way there are n hotels,
// at mile posts a1 < a2 < ... < an, where each ai is measured from the starting point. The only places you are allowed
// to stop are at these hotels, but you can choose which of the hotels you stop at. You must stop at the final hotel
// (at distance an), which is your destination. You'd ideally like to travel 200 miles a day, but this may not be
// possible (depending on the spacing of the hotels). If you travel x miles during a day, the penalty for that day
// is (200 - x)^2. You want to plan your trip so as to minimize the total penalty that is, the sum, over all travel days,
// of the daily penalties. Give an efficient algorithm that determines the optimal sequence of hotels at which to stop

//Solution
function calculateOptimalRoute(hotelList) {
    const path = [];
    const penalties = [];

    for (i = 0; i < hotelList.length; i++) {
        penalties[i] = Math.pow(200 - hotelList[i], 2)
        path[i] = 0
        for (j = 0; j < i; j++) {
            const temp = penalties[j] + Math.pow((200 - (hotelList[i] - hotelList[j])), 2)
            if (temp < penalties[i]) {
                penalties[i] = temp;
                path[i] = (j + 1);
            }

        }
    }

    const finalPath = [];
    let index = path.length - 1

    while (index >= 0) {
        finalPath.unshift(index + 1);
        index = path[index] - 1;
    }
    console.log('min penalty is ', penalties[hotelList.length - 1])
    console.log('final path is ', finalPath)

    return finalPath;

}

// calculateOptimalRoute([20, 40, 60, 940, 1500])
// Outputs [3, 4, 5]

// calculateOptimalRoute([190, 420, 550, 660, 670])
// Outputs [1, 2, 5]

// calculateOptimalRoute([200, 400, 600, 601])
// Outputs [1, 2, 4]

// calculateOptimalRoute([])
// Outputs []

