const CONTROLS = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

CONTROLS.forEach(item => item.addEventListener('mousedown', () => {
  item.addEventListener('mousemove', handleUpdate);
  item.addEventListener('change', handleUpdate);
}));