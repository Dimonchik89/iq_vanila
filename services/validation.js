function validation(parent) {
  const form = parent.querySelector('form');

  if (!form) {
    return;
  }

  form.addEventListener('change', (e) => {
    if (e.target.nodeName !== 'INPUT') {
      return;
    }

    const submitButton = form.querySelector('button');
    submitButton.disabled = false;
    submitButton.classList.replace('button-disabled', 'button-orange');
  });
}

export { validation };
