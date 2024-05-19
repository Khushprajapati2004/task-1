document.addEventListener('DOMContentLoaded', () => {
    const Duplicate = document.querySelector('.duplicate');
    const btn = document.querySelector('.btn');
    const main = document.getElementById('main');


btn.addEventListener('click', () => {
    main.style.display = 'none';
    Duplicate.style.display = 'block';
});

});
