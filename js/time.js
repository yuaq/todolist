var body = document.querySelector('body');
var todo_wrap = document.querySelector('.todo-wrap');
var date = new Date();
var h = date.getHours();
if (h <= 11) {
    body.style='background:URL("./image/1.png") center no-repeat;background-attachment:fixed;-webkit-background-size:cover';
} else if(h > 11 && h < 18){
    body.style='background:URL("./image/2.jpg") center no-repeat;background-attachment:fixed;-webkit-background-size:cover';
    todo_wrap.style.color = 'rgb(245,160,145)';
} else{
    body.style='background:URL("./image/3.png") center no-repeat;background-attachment:fixed;-webkit-background-size:cover';
    todo_wrap.style.color = 'lightpink';
}