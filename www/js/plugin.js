// const div = document.querySelector(".box");
// const startTime = Date.now();
// let step = 0;
//
// let animateInterval = setInterval(() => {
//     const timeLeft = Date.now() - startTime;
//     step ++;
//     div.style.left = step + "px";
//
//
//     if (timeLeft >= 4000) {
//         clearInterval(animateInterval);
//         return
//     }
// }, 10);


/* -----------------------------
----- Request animation frame ------
---------------------------------
 */
// const div = document.querySelector(".box");
// let prevStep = Date.now();
// let step = 0;
//
// function drawLeft(step) {
//     div.style.left = step + "px";
// }
//
// function changes(time) {
//     let raf = requestAnimationFrame(changes);
//     step +=3;
//     drawLeft(step);
//
//     if (step >= 200) {
//         cancelAnimationFrame(raf);
//     }
// }
//
// changes();

/* -----------------------------
----- Request animation frame ------
---------------------------------
 */
// const div = document.querySelector(".box");
//
// function animate(changes, duration) {
//     let step = 0;
//     let start = performance.now();
//
//     requestAnimationFrame(function animationHandler(time) {
//         // увеличиваем шаг
//         step ++;
//         // получить сколько времени прошло со старта анимации
//         let timeLeft = time - start;
//         // вызов анимации
//         changes(step);
//
//         // усли timeLeft < duration
//         if (timeLeft < duration) {
//             requestAnimationFrame(animationHandler);
//         }
//     })
// }
//
// animate(function (step) {
//     div.style.left = step + "px";
// }, 2000);


// Try Catch
function getUser() {
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            throw new Error("User not found");
        } else {
            return user;
        }
    } catch(error) {
        return error.message;
    }
}
getUser();











