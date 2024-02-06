
const dts = document.querySelectorAll('dt');

dts.forEach(dt => {
  dt.addEventListener('click', () => {
    dt.parentNode.classList.toggle('appear');
    dts.forEach(d => {
      if (d !== dt) {
        d.parentNode.classList.remove('appear');
      }
    });
  });
})


