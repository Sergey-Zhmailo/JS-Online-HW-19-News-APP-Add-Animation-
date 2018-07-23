const msgs = [
    {
        error: false,
        text: "Success message"
    },
    {
        error: true,
        text: "Error message"
    },
    {
        error: false,
        text: "Other message"
    }
];

function createAlert(msg) {
    // check alerts length
    let allAlerts = document.body.querySelectorAll(".alert");
    let fullAlertsHeight = 10;
    if (allAlerts.length) {
        allAlerts.forEach(al => fullAlertsHeight += al.offsetHeight + 10);
    }

    const alert = document.createElement('div');
    alert.classList.add('alert', `${msg.error ? 'alert-danger' : 'alert-success'}`);
    alert.textContent = msg.text;
    alert.style.position = "fixed";
    alert.style.top = `${fullAlertsHeight}px`;
    alert.style.right = "50px";
    alert.style.opacity = 0;
    alert.style.minWidth = "200px";
    alert.style.transform = "translateY(0px)";

    document.querySelector(".container").insertAdjacentElement("afterbegin", alert);

    return alert;
}

function showAlerts(msgs) {
    // устанавливаем стартовое время для таймаута
    let timeout = 0;

    msgs.forEach(msg => {
        // Получаем один элемент alert
        const alert = createAlert(msg);

        setTimeout(() => {
            animationElement(alert);
        }, timeout);

        timeout += 400;
    });
}

function animationElement(element) {
    // шаг изменения своства
    let step = 0;
    let stepTranslate = 0;

    function animateAction(time) {
        step += 0.1;
        stepTranslate += 0.5;

        element.style.opacity = step;
        element.style.transform = `translateY(${stepTranslate}px)`;
        const raf = requestAnimationFrame(animateAction);
        // проверяем если opacity < 1 то мы продолжаем делать requestAnimationFrame
        if (parseFloat(element.style.opacity) >= 1 && stepTranslate >= 10) {
            cancelAnimationFrame(raf);
        }
    }

    animateAction();
}


showAlerts(msgs);

