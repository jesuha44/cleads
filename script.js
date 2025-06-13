document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simulate sending data
  this.reset();
  document.getElementById('thankYou').style.display = 'block';
});
