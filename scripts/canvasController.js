const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
context.fillStyle = "blue"; // Встановіть колір заливки
context.fillRect(50, 50, 100, 100);
// Намалюйте синій заповнений прямокутник
context.strokeStyle = "red"; // Встановлюємо колір контура
context.strokeRect(150, 50, 200, 100); // Малюємо контур прямокутника
// Малюємо дугу (коло)
context.beginPath();
context.arc(50, 200, 50, 0, Math.PI * 2); // Координати центра, радіус, початковий та кінцевий кути
context.strokeStyle = "blue"; // Встановлюємо колір контура
context.stroke(); // Відображаємо контур

//Малювання Траєкторій
context.beginPath();
context.moveTo(200, 150);
context.lineTo(250, 50);
context.lineTo(300, 150);
context.closePath();
context.stroke();

//Робота з Текстом
context.font = "30px Arial";
context.fillText("Привіт, Canvas!", 50, 400);
