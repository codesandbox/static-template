const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
context.fillStyle = "red"; // Встановіть колір заливки
context.fillRect(50, 50, 200, 100);
 // Малюємо контур прямокутника
// Малюємо дугу (коло)
context.fillStyle = "blue"; // Встановіть колір заливки
context.beginPath();
context.arc(50, 200, 50, 0, Math.PI * 2); // Координати центра, радіус, початковий та кінцевий кути
context.strokeStyle = "blue"; // Встановлюємо колір контура
context.stroke(); // Відображаємо контур

