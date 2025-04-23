function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const page = getParam("page") || "data";  // ברירת מחדל: data.json
const fileName = `${page}.json`;

fetch(fileName)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('content');
    data.forEach(entry => {
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `
        <div class="text">${entry.text}</div>
        <div class="comment">${entry.comment}</div>
      `;
      container.appendChild(row);
    });
  })
  .catch(error => {
    document.getElementById('content').innerHTML = `<p>לא נמצא תוכן מתאים.</p>`;
  });