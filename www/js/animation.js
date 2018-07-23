function animationNews(element) {
    let step = 0;
    let stepTranslate = 30;

    function animateAction(time) {
        step += 0.05;
        stepTranslate -= 2;

        element.style.opacity = step;
        element.style.transform = `translateY(${stepTranslate}px)`;
        const raf = requestAnimationFrame(animateAction);
        if (parseFloat(element.style.opacity) >= 1 && stepTranslate <= 0) {
            cancelAnimationFrame(raf);
        }
    }

    animateAction();

}


