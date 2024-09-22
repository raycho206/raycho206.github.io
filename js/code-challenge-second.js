const fullWidth = window.innerWidth;
const body = document.body;
const nearlyHalfWidthClass = "nearlyHalfWidth";
const nearlyFullWidthClass = "nearlyFullWidth";

function handleWindowResize() {
  const resizeWidth = window.innerWidth;
  const nearlyFullWidth = (fullWidth / 10) * 9;
  const nearlyHalfWidth = (fullWidth / 10) * 6;

  if (resizeWidth <= nearlyHalfWidth) {
    body.classList.add(nearlyHalfWidthClass);
  } else if (resizeWidth <= nearlyFullWidth) {
    body.classList.remove(nearlyHalfWidthClass);
    body.classList.add(nearlyFullWidthClass);
  } else {
    body.classList.remove(nearlyFullWidthClass);
  }
}

window.addEventListener("resize", handleWindowResize);
