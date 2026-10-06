const isEn = document.documentElement.lang === 'en';
const mail = isEn ? {
  greeting: 'Hello Sergei,',
  interested: 'I am interested in:',
  subject: 'Mentorship: ',
  status: 'A draft email is ready. If your mail app does not open, write to rudikqa@gmail.com. Your text is still in the form.'
} : {
  greeting: 'Здравствуйте, Сергей!',
  interested: 'Интересует:',
  subject: 'Менторство: ',
  status: 'Письмо подготовлено. Если почта не открылась, напишите на rudikqa@gmail.com. Ваш текст остался в форме.'
};
document.querySelectorAll('.lang a').forEach(link => {
  link.addEventListener('click', () => {
    try { localStorage.setItem('lang', link.hreflang); } catch (e) {}
    try { document.cookie = 'lang=' + link.hreflang + ';path=/;max-age=31536000;domain=.rudik.dev'; } catch (e) {}
  });
});
try {
  const shared = /(?:^|;\s*)lang=([^;]+)/.exec(document.cookie);
  if (shared && shared[1]) localStorage.setItem('lang', shared[1]);
} catch (e) {}
const topic = document.querySelector('#topic');
document.querySelectorAll('[data-topic]').forEach(link => {
  link.addEventListener('click', () => { topic.value = link.dataset.topic; });
});
const submit = document.querySelector('#brief button');
submit.disabled = false;
document.querySelector('#brief').addEventListener('submit', event => {
  event.preventDefault();
  const task = document.querySelector('#task').value.trim();
  if (!task) { document.querySelector('#task').focus(); return; }
  const body = `${mail.greeting}\n\n${mail.interested} ${topic.value}\n\n${task}`;
  window.location.href = `mailto:rudikqa@gmail.com?subject=${encodeURIComponent(mail.subject + topic.value)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = mail.status;
});
