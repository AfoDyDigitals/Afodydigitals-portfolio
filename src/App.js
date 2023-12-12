function updateProjectDisplay(selectedProject) {
  const frontendDragbar = document.getElementById('frontend-dragbar');
  const uiDragbar = document.getElementById('ui-dragbar');
  const frontendProjects = document.getElementById('frontend-projects');
  const uiProjects = document.getElementById('ui-projects');

  if (selectedProject === 'frontend') {
    frontendDragbar.classList.toggle('bg-amber-500');
    uiDragbar.classList.toggle('bg-gray-200');
    frontendProjects.style.display = 'block';
    uiProjects.style.display = 'none';
  } else if (selectedProject === 'ui') {
    frontendDragbar.classList.toggle('bg-gray-200');
    uiDragbar.classList.toggle('bg-amber-500');
    frontendProjects.style.display = 'none';
    uiProjects.style.display = 'block';
  } else {
    throw new Error('Invalid project selected');
  }
}

let selectedProject = 'frontend'; // Initial state

frontendDragbar.addEventListener('click', () => {
  selectedProject = 'frontend';
  updateProjectDisplay(selectedProject);
});

uiDragbar.addEventListener('click', () => {
  selectedProject = 'ui';
  updateProjectDisplay(selectedProject);
});

// Initial display update
updateProjectDisplay(selectedProject);
