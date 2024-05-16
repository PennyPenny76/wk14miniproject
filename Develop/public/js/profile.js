const newProjectFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-new-project').value.trim();
  const description = document.querySelector('#description').value.trim();
  const needed_funding = document.querySelector('#fund-new-project').value.trim();

  if (name && description && needed_funding) {
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({ name, description, needed_funding }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create a new project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newProjectFormHandler);

document
  .querySelector('.project-card')
  .addEventListener('click', delButtonHandler);