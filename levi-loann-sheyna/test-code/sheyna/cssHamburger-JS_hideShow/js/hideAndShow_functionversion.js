var basicRulesButn = document.getElementById('basicRulesBtn');
var outOfBoundsButn = document.getElementById('outOfBoundsBtn');
var lostDiscButn = document.getElementById('lostDiscBtn');
var obstablesButn = document.getElementById('obstablesBtn');
var courtesyButn = document.getElementById('courtesyBtn');
var optionalButn = document.getElementById('optionalBtn');
var excessiveButn = document.getElementById('excessiveBtn');
var misplayButn = document.getElementById('misplayBtn');
var mandatoriesButn = document.getElementById('mandatoriesBtn');
var interferenceButn = document.getElementById('interferenceBtn');
var provisionalButn = document.getElementById('provisionalBtn');
var applicationButn = document.getElementById('applicationBtn');

// Function declarations to hide and show content

function hideStuff(id) {
  document.getElementById(' + id + ').style.display = 'none';
}

function showStuff(id) {
  document.getElementById(' + id + ').style.display = 'block';
}

// Event listeners to hide and show content once a button is clicked:

window.onload = function() {
  showStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
};

basicRulesButn.addEventListener("click", function() {
  hideStuff(logo);
  showStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
}, false);

outOfBoundsButn.addEventListener("click", function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  showStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
}, false);

lostDiscButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  showStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
}, false);

obstablesButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  showStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
}, false);

courtesyButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  showStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
});

optionalButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  showStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
});

excessiveButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  showStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
});

misplayButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  showStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
});

mandatoriesButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  showStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
});

interferenceButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  showStuff(interferenceContent);
  hideStuff(provisionalContent);
  hideStuff(applicationContent);
});

provisionalButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  showStuff(provisionalContent);
  hideStuff(applicationContent);
});

applicationButn.addEventListener('click', function() {
  hideStuff(logo);
  hideStuff(basicRulesContent);
  hideStuff(outOfBoundsContent);
  hideStuff(lostDiscContent);
  hideStuff(obstablesContent);
  hideStuff(courtesyContent);
  hideStuff(optionalContent);
  hideStuff(excessiveContent);
  hideStuff(misplayContent);
  hideStuff(mandatoriesContent);
  hideStuff(interferenceContent);
  hideStuff(provisionalContent);
  showStuff(applicationContent);
});
