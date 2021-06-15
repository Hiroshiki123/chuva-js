class ZonadaChuva
{
    fps;
    canvas;
    width;
    height;
    minVelocity;
    maxVelocity;
    qtdegotas;
    gotas;
    intervalId;
    ctx;
    gota;
   

 
       
    constructor(ctx)
    {
        this.fps = 30;
        this.width = 0;
        this.height = 0;
        this.minVelocity = 370;
	    this.maxVelocity = 400;
	    this.qtdegotas = 100;
	    this.intervalId = 0;
        this.ctx = ctx;
        this.width = "1280";
        this.height = "720";
        this.ctx.canvas.height = this.height;
        this.ctx.canvas.width = this.width;
    }
    inicializa()
    {
        var self = this;
        addEventListener('resize', function resize(event)
        {

            self.width = window.innerWidth;
            self.height = window.innerHeight;
            self.desenha();
           

        });
        
    } 
    start()
    {
        this.gotas = [];
        for(var i=0; i<this.qtdegotas; i++)
        {
            var x = Math.random()*this.width;
            var y = Math.random()*this.height;
            var size = Math.random()*3+1;
            var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+ this.minVelocity;
            this.gota = new Gotas(x,y, size, vel);
            this.gotas[i] = this.gota;
        }
        var timeUpdate = 1000 / this.fps;
        var self = this;
        this.intervalId = setInterval(function(){
            self.update();
            self.desenha();

        },timeUpdate);
    }
    desenha()
    {
        
        this.ctx.fillStyle = 'darkblue';
        this.ctx.fillRect(0,0, this.width, this.height);
        this.ctx.fillStyle = '#00FFFF';
        for(var i=0; i<this.gotas.length;i++)
        {
            this.gota = this.gotas[i];
            this.ctx.fillRect(this.gota.x, this.gota.y, this.gota.size, this.gota.size);

        }
    }
    update()
    {
        var dt = 1/ this.fps;
        for(var i = 0; i<this.gotas.length; i++)
        {
            var gota = this.gotas[i];
            gota.y += dt * gota.velocity;
            if(gota.y > this.height)
            {
                var x = Math.random()*this.width;
                var size = Math.random()*2+4;
                var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+ this.minVelocity;
                let s = new Gotas(x, 1, size, vel);
                this.gotas[i] = s;
            }
            
        }
    }
    
    stop()
            {
                clearInterval(this.intervalId);
            }

}