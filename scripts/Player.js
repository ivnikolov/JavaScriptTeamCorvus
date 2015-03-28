var Player=(function(){

    function Player(x,y){
            this.position = Vector2(x,y);
            this.movement={left:false, right:false,up:false, down:false};
            this.speed=2;

            this.width=32;
            this.height = 32;

            this.animation=new Animation(32, 32, 0,0,20, 'resources/hero.png', 22, 5, 4)
            this.boundinngBox=new Rectangle(x, y, this.width, this.height)
        };

    Player.prototype.update = function(){
        if (this.movement.right){
            this.position.x+=this.speed
        }
        if (this.movement.left){
            this.position.x-=this.speed
        }
        if (this.movement.down){
            this.position.y+=this.speed
        }
        if (this.movement.up){
            this.position.y-=this.speed
        }

        this.animation.update();
    };

    Player.prototype.render=function(ctx){
        this.animation.draw(ctx)
    };

    return Player;
}());
