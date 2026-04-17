function startWordSwitcher({
  elementId = "switch-word",
  words = ["Business", "Revenue", "Data", "Finance"],
  color = "#5cad60",
  interval = 1100
} = {}) {
  const el = document.getElementById(elementId);
  if (!el || !words.length) return;

  let idx = 0;
  el.textContent = words[idx];
  el.style.borderColor = color;

  return setInterval(() => {
    idx = (idx + 1) % words.length;
    el.textContent = words[idx];
    el.style.borderColor = color;
  }, interval);
}

startWordSwitcher();