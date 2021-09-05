const CONTROLS = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

CONTROLS.forEach(item => item.addEventListener('change', handleUpdate));
CONTROLS.forEach(item => item.addEventListener('mousemove', handleUpdate));