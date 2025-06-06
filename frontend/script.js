function fetchMessage() {
  fetch('/api/hello')
    .then(res => res.json())
    .then(data => {
      document.getElementById('response').innerText = data.message;
    });
}
