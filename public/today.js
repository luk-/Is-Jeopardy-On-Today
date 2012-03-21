(function () {
  var res = new Date().getDay().toString().replace(/[1-5]/, 'YES');
  if (res !== 'YES') {
    res = 'NO';
  }
  document.getElementById('clue').innerHTML = res;
})();
