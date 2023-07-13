document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let max = document.getElementById('max-number').value;
    max = parseInt(max);
    let n = Math.random() * max;
    n = Math.floor(n) + 1;
    document.getElementById('resultado').textContent = n;
  });
});
