'use strict';
const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');

let field = new ZonadaChuva(ctx);
field.inicializa();
field.start();
const KEY = {

 A: 65,
 S:83,
 LEFT: 37,
 RIGHT:39


}

Object.freeze(KEY);
document.addEventListener("keydown", (event) => {
    if(event.keyCode == KEY.A)
    {
        console.table("aaaa");
        field.maxVelocity += 10;
        
    }
});

document.addEventListener("keydown", (event) =>
{
    if(event.keyCode == KEY.S)
    {
        console.table("bbbb");
        field.maxVelocity  -= 10;
    }
});
document.addEventListener("keydown", (event) =>
{
    if(event.keyCode == KEY.LEFT)
    {
        console.table("cccc");
        Gx -= 10;
    }
});
document.addEventListener("keydown", (event) =>
{
    if(event.keyCode == KEY.RIGHT)
    {
        console.table("dddd");
        Gx  += 10;
    }
});
