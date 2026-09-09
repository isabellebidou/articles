
document.addEventListener('click', async (e) => {
  const code = e.target.closest('code');

  if (!code) return;

  await navigator.clipboard.writeText(code.textContent);

  const original = code.textContent;
  code.textContent = 'Copied!';
  
  setTimeout(() => {
    code.textContent = original;
  }, 1000);
});
