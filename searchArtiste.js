function findArtistIndex(artists, name) {
    for (var i = 0; i < artists.length; i++) {
        if (artists[i].name === name) {
            return artists[i].id;
        }
    }
    return -1;
}

function findArtistIndexSmart(artists, name) {
    let left = 0;
    let right = artists.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (artists[mid].name === name) {
            return artists[mid].id;
        } else if (artists[mid].name < name) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function measurePerformance(fn, artists, name) {
    var start = performance.now();
    var result = fn(artists, name);
    var end = performance.now();
    return { result: result, time: end - start };
}

var artists = [];
for (var i = 0; i < 9000000; i++) {
    artists.push({ id: i.toString(), name: "Artist" + i });
}

artists.sort((a, b) => a.name.localeCompare(b.name));

var testName = "Artist999999";

var performanceResultOriginal = measurePerformance(findArtistIndex, artists, testName);
console.log("findArtistIndex function: temps = " + performanceResultOriginal.time + "ms, resultat = " + performanceResultOriginal.result);

var performanceResultSmart = measurePerformance(findArtistIndexSmart, artists, testName);
console.log("findArtistIndexSmart function: temps = " + performanceResultSmart.time + "ms, resultat = " + performanceResultSmart.result);