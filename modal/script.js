
{
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const mask = document.querySelector('.mask');
    const modal = document.querySelector('.modal');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    })

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    })

    mask.addEventListener('click', () => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
    })
}
