var getRandomNumber = function(size)//Создание функции для получения случайного числа
{
return Math.floor(Math.random() * size);//Возврат случайного числа от 0 до 399
}
var getDistance = function (event, target) {//Создание функции для получения расстояния до клада
var diffX = event.offsetX - target.x;//Разница между точкой клика и кладом
var diffY = event.offsetY - target.y;//Разница между точкой клика и кладом
return Math.sqrt((diffX * diffX) + (diffY * diffY));//Наконец, для нахождения расстояния между двумя точками, используется теорема Пифагора
};
var getDistanceHint = function(distance)//Создание функции для вывода подсказок игроку о расстоянии до клада
{
console.log(distance)
if (distance < 10)//Если расстояние до клада меньше 10,
{
    return "Обожжешься!";//то выводится даннная подсказка.
}
else if (distance < 20)//Если расстояние до клада меньше 20,
{
    return "Очень горячо";//то выводится даннная подсказка.
}
else if (distance < 40)//Если расстояние до клада меньше 40,
{
    return hotHint//то выводится даннная подсказка.
}
else if (distance < 80)//Если расстояние до клада меньше 80,
{
    return "Тепло";//то выводится даннная подсказка.
}
else if (distance < 120)//Если расстояние до клада меньше 320,
{
    return "Прохладно";//то выводится даннная подсказка.
}
else if (distance < 160)//Если расстояние до клада меньше 160,
{
    return coldHint//то выводится даннная подсказка.
}
else if (distance < 320)//Если расстояние до клада меньше 320,
{
    return "Очень холодно";//то выводится даннная подсказка.
}
else if (distance < 640)//Если расстояние до клада меньше 320,
{
    return "Очень-очень холодно!";//то выводится даннная подсказка.
}
else//В ином случае выводится следующая надпись
{
    return "Замерзнешь!";
}
}
var width = 400;//Определение ширины
var height = 400;//Определение высоты
var clicks = 0;//Определение количества кликов
var limit = 20;//Ограничение кол-ва кликов
var hotHint = ("Горячо, осталось " + (limit - clicks) + " кликов");
var coldHint = ("Холодно, осталось " + (limit - clicks) + " кликов");
var target = {//Функция выбора случайной точки на карте, в которой будет клад
x: getRandomNumber(width),//По оси x(ширина)
y: getRandomNumber(height)//По оси y(высота)
}
$("#map").click(function(event)//Обработчик события, клик мышкой по карте
{
clicks++;//За каждый клик в переменную прибавляется единица
var distance = getDistance(event , target);//Вычисление расстояния до цели
var distanceHint = getDistanceHint(distance);//Вычисление какую именно подсказку выдать игроку
if(clicks > limit){
    alert("Слишком много кликов, клад уже не найти =(")
}
$("#distance").text(distanceHint);//Берём элемент distance
if (distance < 8)//Если distance будет меньше 8,
{
    alert("Клад найден! Сделано кликов" + clicks);//то будет выведено сообщение о победе
}
})





