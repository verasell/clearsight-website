  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + name);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  document.getElementById('year').textContent = new Date().getFullYear();