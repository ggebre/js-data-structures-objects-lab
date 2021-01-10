// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, newKey, value) {
    return Object.assign({}, driver, {[newKey] : value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}
function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
} 

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}