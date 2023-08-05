// Initialize Quill
const quill = new Quill('#editor', {
    theme: 'snow',
  });
  
  const boldBtn = document.getElementById('bold-btn');
  const italicBtn = document.getElementById('italic-btn');
  const underlineBtn = document.getElementById('underline-btn');
  const saveBtn = document.getElementById('save-btn');
  
  boldBtn.addEventListener('click', () => {
    const range = quill.getSelection();
    if (range) {
      quill.format('bold', true);
    }
  });
  
  italicBtn.addEventListener('click', () => {
    const range = quill.getSelection();
    if (range) {
      quill.format('italic', true);
    }
  });
  
  underlineBtn.addEventListener('click', () => {
    const range = quill.getSelection();
    if (range) {
      quill.format('underline', true);
    }
  });
  
  saveBtn.addEventListener('click', () => {
    const content = quill.root.innerHTML;
    localStorage.setItem('savedContent', content);
    alert('Content saved successfully!');
  });
  
  // Load saved content from local storage
  const savedContent = localStorage.getItem('savedContent');
  if (savedContent) {
    quill.root.innerHTML = savedContent;
  }
  