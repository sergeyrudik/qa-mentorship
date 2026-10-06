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
  const body = `Здравствуйте, Сергей!\n\nИнтересует: ${topic.value}\n\n${task}`;
  window.location.href = `mailto:rudikqa@gmail.com?subject=${encodeURIComponent('Менторство: ' + topic.value)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Письмо подготовлено. Если почта не открылась, напишите на rudikqa@gmail.com. Ваш текст остался в форме.';
});
