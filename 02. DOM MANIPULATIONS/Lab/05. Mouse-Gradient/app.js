function attachGradientEvents() {

    const resultElement = document.getElementById('result');

    function gradientMove(e) {
        let percent = (e.offsetX / e.target.clientWidth) * 100;
        resultElement.textContent = `${Math.trunc(percent)}%`;
    }

    function gradientOut(e) {
        resultElement.textContent = '';
    }

    const gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', gradientMove);
    gradientElement.addEventListener('mouseout', gradientOut);
}