const eleGrid = document.querySelector('.grid');
const eleMode = document.querySelector('#mode')
const eleBtn = document.querySelector('#BTTN');
const eleBenvenuto = document.querySelector('.benvenuto');

eleBtn.addEventListener('click', function () {
/*
    eleGrid.replaceChildren();
    eleGrid.classList.remove('hidden');
    eleBenvenuto.classList.add('hidden');
    const mode = eleMode.value;

    if (mode === 'normal') {
        for (let i = 1; i <= 81; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleCell.style.width = 'calc(100% / 9)';
            eleCell.style.height = 'calc(100% / 9)';
            eleGrid.append(eleCell);
            eleCell.append(`${i}`);

            eleCell.addEventListener('click', function () {
                this.classList.toggle('active')
            });
        }
    } else if (mode === 'easy') {
        for (let i = 1; i <= 49; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleCell.style.width = 'calc(100% / 7)';
            eleCell.style.height = 'calc(100% / 7)';
            eleGrid.append(eleCell);
            eleCell.append(`${i}`);

            eleCell.addEventListener('click', function () {
                this.classList.toggle('active')
            });
        }
    } else if (mode === 'hard') {
        for (let i = 1; i <= 100; i++) {
            const eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleCell.style.width = 'calc(100% / 10)';
            eleCell.style.height = 'calc(100% / 10)';
            eleGrid.append(eleCell);
            eleCell.append(`${i}`);

            eleCell.addEventListener('click', function () {
                this.classList.toggle('active')
            });
        }
    } 
});
*/

eleBtn.addEventListener('click', function () {
   console.log('hello')
}
