console.clear();

const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const boxEl = document.querySelector('[data-js="box"]');

colorInput.addEventListener("input", () => {
  boxEl.style.backgroundColor = `hsl(${colorInput.value}, 70%, 60%)`;
});
radiusInput.addEventListener("input", () => {
  boxEl.style.borderRadius = `${radiusInput.value}%`;
});

rotationInput.addEventListener("input", () => {
  boxEl.style.transform = rotate(rotationInput.value + deg);
});
