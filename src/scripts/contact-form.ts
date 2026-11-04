// Sends any form marked data-ajax to Formspree in the background and shows a
// thank-you message in place, so visitors never leave the site.
const forms = document.querySelectorAll<HTMLFormElement>('form[data-ajax]');

forms.forEach((form) => {
  const dark = form.dataset.theme === 'dark';
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  status.style.cssText = 'margin:0;font-weight:600;font-size:14px';
  form.appendChild(status);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    if (button) button.disabled = true;
    status.style.color = dark ? '#CBD1D9' : '#4A4A68';
    status.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      const title = form.dataset.successTitle || 'Thanks, your message is in.';
      const text = form.dataset.successText || '';
      const color = dark ? '#FFFFFF' : '#001C44';
      form.innerHTML =
        `<div role="status" style="display:flex;flex-direction:column;gap:10px;padding:8px 0">` +
        `<p style="margin:0;font-family:Archivo,system-ui,sans-serif;font-weight:800;font-size:24px;color:${color}">${title}</p>` +
        (text ? `<p style="margin:0">${text}</p>` : '') +
        `</div>`;
    } catch {
      status.style.color = dark ? '#FFCA00' : '#C02B0A';
      status.textContent = 'Something went wrong. Please try again, or email seotrendnow@gmail.com.';
      if (button) button.disabled = false;
    }
  });
});
