function openConnect() {
    document.getElementById('connect-modal').style.display = 'flex';
  }
  
  function closeConnect() {
    document.getElementById('connect-modal').style.display = 'none';
  }
  const tags = [
    "Aspiring Commercial Pilot",
    "Aviation Photographer",
    "Bread Lover",
    "Flight Student",
    "Based in Covington, LA"
  ];
  
  let tagIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const tagElement = document.getElementById("rotating-tag");
  
  function typeEffect() {
    const currentTag = tags[tagIndex];
    
    if (isDeleting) {
      charIndex--;
      tagElement.textContent = currentTag.substring(0, charIndex);
    } else {
      charIndex++;
      tagElement.textContent = currentTag.substring(0, charIndex);
    }
  
    let typingSpeed = isDeleting ? 50 : 100;
  
    if (!isDeleting && charIndex === currentTag.length) {
      typingSpeed = 1500; // pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      tagIndex = (tagIndex + 1) % tags.length;
      typingSpeed = 500;
    }
  
    setTimeout(typeEffect, typingSpeed);
  }
  
  typeEffect(); 