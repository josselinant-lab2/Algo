function assignStages(artists, stages) {
    for (var _i = 0, stages_1 = stages; _i < stages_1.length; _i++) {
        var stage = stages_1[_i];
        for (var _a = 0, artists_1 = artists; _a < artists_1.length; _a++) {
            var artist = artists_1[_a];
            if (stage.genres.includes(artist.genre)) {
                artist.stage = stage.id;
                break;
            }
        }
    }
}


//Durant mes tests de ramrque que la fonction assignStagesSmart est très lente. Mauvaise optimisation de ma part.
function assignStagesSmart(artists, stages) {
    const stageMap = new Map();

    for (const stage of stages) {
        for (const genre of stage.genres) {
            stageMap.set(genre, stage.id);
        }
    }

    for (const artist of artists) {
        if (stageMap.has(artist.genre)) {
            artist.stage = stageMap.get(artist.genre);
        }
    }
}

function measurePerformance(fn, artists, stages) {
    var start = performance.now();
    fn(artists, stages);
    var end = performance.now();
    return { time: end - start };
}

var artists = [];
for (var i = 0; i < 9000000; i++) {
    artists.push({ id: i.toString(), name: "Artist" + i, genre: "Genre" + (i % 100) });
}

var stages = [];
for (var i = 0; i < 100; i++) {
    stages.push({ id: i.toString(), genres: ["Genre" + i] });
}


var performanceResultOriginal = measurePerformance(assignStages, artists, stages);
console.log("assignStages function: temps = " + performanceResultOriginal.time + "ms");


var performanceResultSmart = measurePerformance(assignStagesSmart, artists, stages);
console.log("assignStagesSmart function: temps = " + performanceResultSmart.time + "ms");