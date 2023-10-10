function distanceFromHQInBlocks (pickUp){
    const hq = 42;
    const blocks = math.abs(hq - pickUp);
    return blocks;
}
console.log("distanceFromHQInBlocks");

function distanceFromHQInFeet(pickUp){
    return distanceFromHQInBlocks(pickUp) * 264;
}
console.log("distanceFromHQInFeet");



