const copyBtn = document.getElementById('copyBtn');

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const ip = '51.75.73.28:7007';
    try {
      await navigator.clipboard.writeText(ip);
      copyBtn.textContent = 'تم النسخ!';
      setTimeout(() => {
        copyBtn.textContent = 'نسخ IP';
      }, 1500);
    } catch (error) {
      copyBtn.textContent = 'فشل النسخ';
      setTimeout(() => {
        copyBtn.textContent = 'نسخ IP';
      }, 1500);
    }
  });
}
