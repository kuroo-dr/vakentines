const yesbtn = document.getElementById('ybtn');
const nobtn = document.getElementById('no-btn');
const dialog1 = document.getElementById('d1');
const p1 = document.getElementById('p1');

yesbtn.addEventListener('click', () => {
    p1.style.display = 'none';
    dialog1.showModal();
});

nobtn.addEventListener('click', () => {
    const randomX = Math.random() * (window.innerWidth - nobtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - nobtn.offsetHeight);
    
    nobtn.style.position = 'fixed';
    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';
    
    nobtn.setAttribute('data-tooltip', '😈😈😈');
    
    const icon1 = nobtn.querySelector('.icon1');
    if (icon1) {
        icon1.innerHTML = '<img src="devil.svg" alt="devil" style="width: 24px; height: 24px;">';
    }
});

dialog1.addEventListener('close', () => {
    p1.style.display = 'flex';
});

