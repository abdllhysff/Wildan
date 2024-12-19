document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector(".name");
    const words = ["Wildan Dwi", "a Developer", "a Designer", "a Dreamer"];
    let wordIndex = 0;
  
    setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      nameElement.textContent = words[wordIndex];
    }, 3000);
  });