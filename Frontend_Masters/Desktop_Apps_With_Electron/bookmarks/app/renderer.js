const newLinkUrl = document.querySelector('#new-link-url');
const newSubmit = document.querySelector('.new-link-form--submit');

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});
