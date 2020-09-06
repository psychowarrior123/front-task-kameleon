const block = document.querySelector('.block');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        block.innerHTML = `${block.innerHTML} ${i} A/B Testing<br>`;
    } else if (i % 3 === 0) {
        block.innerHTML = `${block.innerHTML} ${i} A/B<br>`;
    } else if (i % 5 === 0) {
        block.innerHTML = `${block.innerHTML} ${i} Testing<br>`;
    } else {
        block.innerHTML = `${block.innerHTML} ${i}<br>`;
    }
}
