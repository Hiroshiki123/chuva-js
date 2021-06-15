

var Guarda = new Image();
var Gx = 400;
var Nuvem1 = new Image();
var Nuvem2 = new Image();
var Nuvem3 = new Image();
function criarNuvens()
{
 Nuvem1.src = "nv.png"
 Nuvem2.src = "nv.png"
 Nuvem3.src = "nv.png"
 Guarda.src = "gc.png";
 criar();


}
function criar() {
  
    requestAnimationFrame(criarNuvens);
    ctx.drawImage(Nuvem1, 12, -100, 444,400);
    ctx.drawImage(Nuvem2, 400, -100, 474,430);
    ctx.drawImage(Nuvem3, 900, -100, 444,400);
    ctx.drawImage(Guarda, Gx, 400, 400, 300);
    
}
criarNuvens()
