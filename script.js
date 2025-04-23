fetch('data.json')
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
  });
