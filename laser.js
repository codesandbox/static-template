

    var sketchProc = function(processingInstance) {
      with (processingInstance) {
         size(400, 400); 
         frameRate(30);
 
 {
   var mouseIsPressed=false;
   mousePressed=function(){
     mouseIsPressed=true;
   };
   mouseReleased=function(){
     mouseIsPressed=false;
   };
 
     var keyIsPressed = false;
     keyPressed = function () { keyIsPressed = true; };
     keyReleased = function () { keyIsPressed = false; };
 }
 {
 
 var radToPi = 3.14159/180;
 var sz=0.4;
 var goto=-1;
 var xOff=300;
 var yOff=-100;
 var xgrav=0;
 var ygrav=1.3;
 var placehold;
 var placehold2=[];
 var scales=0.7;
 var fade=255;
 var button=0;
 var button2=0;
 var loadLvl, lvlnum;
 var world={
 chunks: [],
 chunkSize: 300
 };
 textFont('Trebuchet MS',17);
 textAlign(CENTER,CENTER);
 noStroke();
 background(153, 89, 22);
 fill(48, 32, 1);
 var mod=function(n,modu){
     if(n%modu>=0){return n%modu;}else{return modu-abs(n%modu);}
 };
 var keys=[];
 keyPressed=function(){
 keys[keyCode]=true;
 };
 keyReleased=function(){
 keys[keyCode]=false;
 };
 background(255, 0, 255);
 fill(0);
 rect(0,0,200,200);
 rect(200,200,200,200);
 var missingTexture=get();
 var lookFor=function(x,y){
 for(var i=0; i<world.chunks.length; i++){
     if(world.chunks[i].x===x&&world.chunks[i].y===y){
         return i;
     }
 }
 return undefined;
 };
 var Chunk=function(x,y,w,h,chunk){
 this.chunk=chunk;
 this.breakNums=[
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0]
     
     ];
 this.x=x;
 this.y=y;
 this.w=w;
 this.h=h;
 this.xs=[];
 this.ys=[];
 this.ws=[];
 this.hs=[];
 this.lxs=[];
 this.lys=[];
 this.lws=[];
 this.lhs=[];
 this.gx=0;
 this.gy=0;
 this.collide=function(player){
 this.xs=[];
 this.ys=[];
 this.ws=[];
 this.hs=[];
 this.lxs=[];
 this.lys=[];
 this.lws=[];
 this.lhs=[];
 this.gx=0;
 this.gy=0;
 for(var i=0; i<this.chunk.length; i++){
 for(var j=0; j<this.chunk[0].length; j++){
 if(this.chunk[i][j]===' '||(this.chunk[i][j]==='|'&&ygrav===0)||(this.chunk[i][j]==='-'&&xgrav===0)||this.chunk[i][j]==='l'||this.chunk[i][j]==='g'||this.chunk[i][j]==='@'){}else{
     this.xs.push(i*this.w/8+this.x);
     this.ys.push(j*this.h/8+this.y);
     this.ws.push(this.w/8);
     this.hs.push(this.h/8);
 }
 if(this.chunk[i][j]==='g'){this.gx=i*this.w/8+this.x; this.gy=j*this.h/8+this.y;}
 }}
 for(var i=0; i<this.xs.length; i++){
         if(player.x+player.sx+player.xv>this.xs[i]&&player.x<this.xs[i]&&player.y+player.sy>this.ys[i]&&player.y<this.ys[i]+this.hs[i]){player.xv=0; player.x=this.xs[i]-player.sx;
         if(xgrav>0){player.jumpTimer=-1;}}
         if(player.x+player.xv<this.xs[i]+this.ws[i]&&player.x+player.sx>this.xs[i]+this.ws[i]&&player.y+player.sy>this.ys[i]&&player.y<this.ys[i]+this.hs[i]){player.xv=0; player.x=this.xs[i]+this.ws[i];
         if(xgrav<0){player.jumpTimer=-1;}
         }
         if(player.y+player.sy+player.yv>this.ys[i]&&player.y<this.ys[i]&&player.x+player.sx>this.xs[i]&&player.x<this.xs[i]+this.ws[i]){player.yv=0; player.y=this.ys[i]-player.sy;
         if(ygrav>0){player.jumpTimer=-1;}}
         if(player.y>=this.ys[i]+this.hs[i]&&player.y+player.yv<this.ys[i]+this.hs[i]&&player.x+player.sx>this.xs[i]&&player.x<this.xs[i]+this.ws[i]){player.yv=0; player.y=this.ys[i]+this.hs[i];if(ygrav<0){player.jumpTimer=-1;}}}
     if(player.x+player.sx>this.gx&&player.x<this.gx+this.w/8&&player.y+player.sy>this.gy&&player.y<this.gy+this.h/8){
         loadLvl();
     }
 };
 this.spawn=function(player){
 for(var i=0; i<this.chunk.length; i++){
 for(var j=0; j<this.chunk.length; j++){
 if(this.chunk[i][j]==='@'){
     player.x=this.x+i*this.w/8;
     player.y=this.y+j*this.h/8;
 }
 }}
 };
 this.kill=function(player){
 this.xs=[];
 this.ys=[];
 this.ws=[];
 this.hs=[];
 this.lxs=[];
 this.lys=[];
 this.lws=[];
 this.lhs=[];
 for(var i=0; i<this.chunk.length; i++){
 for(var j=0; j<this.chunk[0].length; j++){
 if(this.chunk[i][j]==='l'){
     this.lxs.push(i*this.w/8+this.x);
     this.lys.push(j*this.h/8+this.y);
     this.lws.push(this.w/8);
     this.lhs.push(this.h/8);
 }}}
 for(var i=0; i<this.lxs.length; i++){
     if(player.x+player.sx>this.lxs[i]&&player.x<this.lxs[i]+this.lws[i]&&player.y+player.sy>this.lys[i]&&player.y<this.lys[i]+this.lhs[i]){
         lvlnum-=1;
         loadLvl();
     }
 }
 };
 this.draw= function() {
 
 for(var i=0; i<8; i++){
 for(var j=0; j<8; j++){{
     pushMatrix();
     fill(255);
     rect(i*w/8+x,j*h/8+y,w/8,h/8);
     if(this.chunk[i][j]==='|'){
         fill(0,100);
     rect(i*w/8+x+w/32,j*h/8+y,w/16,h/8);
     }else if(this.chunk[i][j]==='-'){
         fill(0,100);
     rect(i*w/8+x,j*h/8+y+h/32,w/8,h/16);}else if(this.chunk[i][j]==='g'){fill(0, 250, 13);
     rect(i*w/8+x+w/32,j*h/8+y+h/32,w/16,h/16);}else if(this.chunk[i][j]!==' '){
         
         if(this.chunk[i][j]==='s'){
         fill(0);}else if(this.chunk[i][j]==='l'){fill(207, 89, 39);}
     rect(i*w/8+x,j*h/8+y,w/8,h/8);
     
     }
     popMatrix();
 }
 }}
 };
 };
 var chunk=1;
 var Player = function(x,y,w,h){
 this.x=x;
 this.y=y;
 this.xv=0;
 this.yv=0;
 this.sx=w;
 this.sy=h;
 this.bsx=w;
 this.bsy=h;
 this.jump=false;
 this.inWater=false;
 this.jumpHt=28;
 this.xMove=25;
 this.xDrift=1.3;
 this.yDrift=1.3;
 this.jumpTimer=-1;
 this.requestMove=function(){
     this.jump=this.jumpTimer!==0;
     if(xgrav===0){
         if(ygrav>0){
 if(keys[37]||keys[65]){this.xv+=(-this.xMove-this.xv)/10;}
 if(keys[39]||keys[68]){this.xv+=(this.xMove-this.xv)/10;}}else{
 if(keys[39]||keys[68]){this.xv+=(-this.xMove-this.xv)/10;}
 if(keys[37]||keys[65]){this.xv+=(this.xMove-this.xv)/10;}}
 if(this.inWater){
 if(keys[38]||keys[87]){this.yv+=(-this.xMove-this.yv)/10;}
 if(keys[40]||keys[83]){this.yv+=(this.xMove-this.yv)/10;}
 
 }else{
     if(ygrav>0){
 if((keys[38]||keys[87])&&this.jump){this.yv=-this.jumpHt; this.jumpTimer=0;}}else{
 if((keys[38]||keys[87])&&this.jump){this.yv=this.jumpHt; this.jumpTimer=0;}}}}
 if(ygrav===0){
     if(xgrav>0){
 if(keys[39]||keys[68]){this.yv+=(-this.xMove-this.yv)/10;}
 if(keys[37]||keys[65]){this.yv+=(this.xMove-this.yv)/10;}}else{
 if(keys[37]||keys[65]){this.yv+=(-this.xMove-this.yv)/10;}
 if(keys[39]||keys[68]){this.yv+=(this.xMove-this.yv)/10;}}
 if(this.inWater){
 if(keys[38]||keys[87]){this.xv+=(-this.xMove-this.xv)/10;}
 if(keys[40]||keys[83]){this.xv+=(this.xMove-this.xv)/10;}}else{
     if(xgrav>0){
 if((keys[38]||keys[87])&&this.jump){this.xv=-this.jumpHt; this.jumpTimer=0;}}else{
 if((keys[38]||keys[87])&&this.jump){this.xv=this.jumpHt; this.jumpTimer=0;}}
 
 }}
 if(this.jumpTimer===-1){
 this.jumpTimer=7;}
 };
 this.move=function(){
     if(this.jumpTimer>0){
 this.jumpTimer--;
     }
 this.x+=this.xv;
 this.y+=this.yv;
 if(this.inWater){
 this.xv/=1.3;
 this.yv/=1.3;}else{
     if(ygrav===0){
 this.xv/=this.yDrift;
 this.yv/=this.xDrift;}else{
 this.xv/=this.xDrift;
 this.yv/=this.yDrift;}
 this.xv+=xgrav;
 this.yv+=ygrav;}
 };
 this.draw= function(){
     pushMatrix();
     translate(this.x,this.y);
 
     if(ygrav===0){
         if(xgrav>0){rotate(radToPi*270); translate(-37.5,0);}
         if(xgrav<0){rotate(radToPi*90); translate(0,-60);}
         this.sy=this.bsx;
         this.sx=this.bsy;
     }
     if(xgrav===0){
         if(ygrav>0){rotate(radToPi*0);}
         if(ygrav<0){rotate(radToPi*180); translate(-37.5,-60);}
         this.sx=this.bsx;
         this.sy=this.bsy;
     }
     fill(255, 0, 0);
 rect(0,0,this.bsx,this.bsy);
 popMatrix();
 };
 };
 textFont(createFont('Trebuchet MS',30));
 background(255, 235, 181);
 fill(0);
 ellipse(100,100,50,25);
 ellipse(300,100,50,25);
 fill(0, 98, 255);
 rect(0,200,400,200);
 var player=new Player(50,450,35,55);
 var revArr=function(arr){
 var arr2=[['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','','']];
 for(var i=0; i<arr2.length; i++){
 for(var j=0; j<arr2.length; j++){
     arr2[i][j]=arr[j][i];
 }}
 return arr2;
 };
 var revArr2=function(arr){
 var arr2=[['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','','']];
 for(var i=0; i<8; i++){
 for(var j=0; j<8; j++){
     arr2[7-i][j]=arr[j][i];
 }}
 return arr2;
 };
 var revArr3=function(arr){
 var arr2=[['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','','']];
 for(var i=0; i<8; i++){
 for(var j=0; j<8; j++){
     arr2[i][7-j]=arr[j][i];
 }}
 return arr2;
 };
 var revArr4=function(arr){
 var arr2=[['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','','']];
 for(var i=0; i<8; i++){
 for(var j=0; j<8; j++){
     arr2[i][7-j]=arr[i][j];
 }}
 return arr2;
 };
 var revArr5=function(arr){
 var arr2=[['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','','']];
 for(var i=0; i<8; i++){
 for(var j=0; j<8; j++){
     arr2[7-i][j]=arr[i][j];
 }}
 return arr2;
 };
 var lvls=[
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','g',' ',' ','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s',' ',' ','s','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s']],
     [
     ['s','s',' ',' ','s','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ','s','s','s'],
     ['s',' ',' ',' ',' ','s','s','s'],
     ['s','@',' ',' ','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s']],
     [
     ['s','s',' ',' ','s','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ',' ',' ',' '],
     ['s','g',' ',' ','@',' ',' ',' '],
     ['s','s','s',' ','s',' ',' ',' '],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s',' ',' ',' ','s','s'],
     ['s','s','s',' ',' ',' ','s','s'],
     [' ',' ',' ',' ',' ',' ','s','s'],
     [' ',' ',' ',' ',' ',' ','s','s'],
     [' ',' ',' ',' ',' ',' ','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ','s',' ',' ',' ','s']],
     [
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ','s','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ','s',' ',' ','s'],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ','s',' ',' ','@','s'],
     ['s','l','l','s','l','l','s','s']],
     [
     [' ','s',' ',' ',' ',' ',' ','s'],
     [' ','s',' ',' ',' ',' ',' ','s'],
     [' ','s',' ',' ',' ','g',' ','s'],
     ['s','s',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','l','l','l','s','s','s','s'],
     [' ',' ',' ',' ',' ',' ',' ',' ']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s',' ',' ','s']],
     [
     ['s',' ',' ',' ',' ',' ','s','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ','s',' ','s'],
     ['s',' ',' ',' ',' ','s',' ','s'],
     ['s',' ',' ','s',' ','s',' ','l'],
     ['s','@',' ','s',' ','s',' ','s'],
     ['s','s',' ','s',' ','s','g',' '],
     ['s','s','l','s','l','s','l','s']],
     [
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s']],
     [
     ['s','s',' ',' ','s','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ',' ',' ',' '],
     ['s','s','s',' ','@',' ',' ',' '],
     ['s','s','s',' ','s',' ',' ',' '],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s',' ',' ',' ',' ','s'],
     ['s','s','s',' ',' ',' ','s','s'],
     [' ',' ',' ',' ',' ',' ',' ','g'],
     [' ',' ',' ',' ',' ','s','s','s'],
     [' ',' ',' ',' ',' ','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s']],
     [
     ['s','s',' ',' ','s','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ',' ',' ',' '],
     ['s','s','s',' ','@',' ',' ',' '],
     ['s','s','s',' ','s',' ',' ',' '],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s',' ',' ',' ','s','s'],
     ['s','s','s',' ',' ',' ','s','s'],
     [' ',' ','|',' ',' ',' ','s','s'],
     [' ',' ','|',' ',' ',' ','s','s'],
     [' ',' ','|',' ',' ','g','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','l','s'],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ','s','s','l'],
     ['s','s','s',' ',' ','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s']],
     [
     ['s','s',' ',' ','s','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ',' ',' ','s'],
     ['s',' ','|','s','@',' ',' ',' '],
     ['s',' ','|',' ',' ','s',' ',' '],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s','s',' ',' ','l','s'],
     ['s','s','s','s',' ',' ','s','s'],
     [' ',' ',' ','s',' ',' ','l','s'],
     [' ',' ',' ',' ',' ',' ','g','s'],
     [' ','s',' ',' ',' ','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','l','s','s'],
     ['s','s','s',' ',' ',' ',' ',' '],
     ['s','s','s','s',' ',' ',' ',' '],
     ['s','s','s',' ',' ',' ',' ',' '],
     ['s','s','s',' ',' ',' ','s','s'],
     ['s','s',' ',' ',' ','s','s','s']],
     [
     ['s','s',' ',' ','s','s','s','s'],
     ['s','s',' ',' ',' ','s','s','s'],
     ['s','s','s',' ',' ','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s','@',' ',' ',' ',' ',' ',' '],
     ['s','s','s',' ',' ',' ',' ',' '],
     ['s','g',' ',' ',' ','s','s','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s',' ',' ','s','s','s'],
     ['s',' ',' ',' ',' ','s','s','s'],
     ['s',' ',' ',' ','s','s','s','s'],
     [' ',' ',' ',' ',' ',' ',' ','l'],
     [' ',' ','s',' ',' ',' ',' ','l'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ','s','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ','s',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ','s','s']],
     [
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s',' ','s',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ','s',' ',' ','s',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s','@',' ',' ',' ',' ',' ',' '],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s',' ','s',' ',' ','s'],
     [' ',' ','s',' ','s',' ',' ','s'],
     [' ',' ',' ',' ','s',' ',' ','s'],
     ['s',' ',' ','g','s',' ',' ','l'],
     ['s','s','s','s','s',' ',' ','l'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','g','s',' ',' ',' ',' ',' '],
     ['s',' ','s',' ',' ',' ','s',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ','s',' ',' ',' ','s',' '],
     ['s',' ',' ',' ',' ',' ',' ',' ']],
     [
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ','s',' '],
     ['s',' ','s',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s','@','s',' ',' ',' ',' ',' '],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s','s',' ',' ',' ','s'],
     ['s','s','s',' ',' ',' ',' ','s'],
     ['s','s','s',' ',' ','s',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','l'],
     [' ',' ',' ',' ',' ',' ',' ','l'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s','s','s','s'],
     ['s',' ',' ','s','s','s',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s','s',' ',' ','s',' ',' ','s'],
     ['s',' ',' ',' ','s',' ',' ','s']],
     [
     ['s',' ',' ','s','s',' ',' ','s'],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s','s',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ','s','s','s','s'],
     ['s',' ',' ','s',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s','s','@',' ',' ',' ',' ',' '],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s',' ',' ',' ','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ','s','s','s'],
     [' ',' ',' ',' ',' ',' ','g','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s','s','s','s'],
     ['s',' ',' ','s','s',' ',' ','g'],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s','s',' ',' ','s',' ','s',' '],
     ['s',' ',' ',' ','s',' ',' ',' ']],
     [
     ['s',' ',' ','s','s',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s','s',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ','s','s','s','s'],
     ['s',' ',' ','s',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s','s','@',' ',' ',' ',' ',' '],
     ['s','s','s','s','s','s','s','s']],
     [
     [' ',' ','s','s','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s',' ',' ',' ','s'],
     ['s',' ',' ',' ','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ','s',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','s','s',' ',' ',' ','s',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s',' ',' ','s','s','s','s','s'],
     ['s',' ',' ',' ','s',' ',' ','g'],
     ['s','s',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' ']],
     [
     ['s',' ',' ','s','s',' ','s','s'],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s','s',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ','s','s',' ',' '],
     ['s',' ',' ','s',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','@',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s','s','s',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ','s','s'],
     ['s','s','s',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ','s','s','s','s','s'],
     ['s',' ',' ','s','s','s',' ',' '],
     ['s',' ',' ','s','s',' ',' ',' '],
     ['s',' ',' ','s',' ',' ',' ','s'],
     ['s',' ',' ','s',' ',' ','s','s']],
     [
     ['s',' ',' ','s',' ',' ',' ','s'],
     ['s',' ',' ','s','s',' ',' ',' '],
     ['s',' ',' ',' ',' ','s',' ',' '],
     ['s',' ',' ',' ','@',' ','s',' '],
     ['s',' ',' ',' ',' ',' ','s','s'],
     ['s','s','s',' ',' ',' ',' ',' '],
     ['s','g',' ',' ',' ',' ',' ',' '],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s',' ',' ',' ','s',' ',' ','s'],
     ['s',' ',' ','-','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ','s',' ',' ',' ',' ','s'],
     ['s','s','s','s','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ','s','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ','s','s','s','s'],
     ['s','s',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ','s']],
     [
     ['s',' ',' ','s','s',' ',' ','s'],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s','s',' ',' ','s',' ',' ',' '],
     ['s',' ',' ',' ','s',' ',' ',' '],
     ['s',' ',' ','s','s','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ',' '],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','g','s',' ',' ',' ',' ','s'],
     [' ',' ','s',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ','s',' ',' ',' ',' ','s'],
     ['s','s','s',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ','@',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']]],
     [[
     ['l','l','l','l','l','l','l','s'],
     ['l',' ',' ',' ',' ',' ',' ','s'],
     ['l',' ',' ',' ',' ',' ','s',' '],
     ['l',' ',' ',' ',' ',' ',' ',' '],
     ['l',' ',' ',' ','s',' ',' ',' '],
     ['l',' ',' ','s',' ',' ',' ',' '],
     ['l',' ',' ',' ',' ',' ',' ',' '],
     ['s','s',' ',' ',' ',' ',' ','s']],
     [
     ['s','s',' ',' ',' ',' ',' ','s'],
     ['l',' ','s',' ',' ',' ',' ',' '],
     ['l',' ',' ','s',' ',' ',' ',' '],
     ['l','g',' ',' ',' ',' ',' ',' '],
     ['l',' ',' ',' ',' ','s','@',' '],
     ['l',' ',' ',' ',' ',' ','s',' '],
     ['l',' ',' ',' ',' ',' ',' ','s'],
     ['l','l','l','l','l','l','l','s']],
     [
     ['s',' ',' ',' ',' ',' ','s','s'],
     [' ',' ',' ',' ',' ','s',' ','l'],
     [' ',' ',' ',' ',' ',' ',' ','l'],
     [' ',' ',' ','s',' ',' ',' ','l'],
     [' ',' ',' ',' ',' ',' ',' ','l'],
     [' ','s',' ',' ',' ',' ',' ','l'],
     ['s',' ',' ',' ',' ',' ',' ','l'],
     ['s','l','l','l','l','l','l','l']]],
     [[
     ['s','s','s','s','s','s','s','s'],
     ['s','g','s',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s','@',' ',' ',' ',' ',' ','s'],
     ['s','s',' ',' ',' ','s','s','s']],
     [
     ['s',' ',' ',' ',' ','s','s','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ',' '],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']],
     [
     ['s','s',' ',' ',' ','s','s','s'],
     ['s',' ','s',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     [' ',' ',' ',' ','s',' ',' ','s'],
     [' ',' ',' ',' ',' ',' ',' ','s'],
     ['s',' ','s',' ',' ',' ',' ','s'],
     ['s',' ',' ',' ',' ',' ',' ','s'],
     ['s','s','s','s','s','s','s','s']]]
     
     ];
 var lvlnum=0;
 var playing = false;
 var played = false;
 var played2 = false;
 var scene='menu';
 var goto=-1;
 var hasWon;
 var loadLvl=function(){
     if(lvlnum>=lvls.length){
         if(hasWon){
         goto='menu';
         }else{
             played=true;
             fade-=5;}}else{
 player.x=50;
 player.y=450;
 player.xv=0;
 player.yv=0;
 xgrav=0;
 if(lvlnum!==6){
 ygrav=1.3;}else{ygrav=-1.3;}
     world.chunks=[];    world.chunks.push(new Chunk(0,0,world.chunkSize,world.chunkSize,revArr(lvls[lvlnum][0])));
 world.chunks.push(new Chunk(0,300,world.chunkSize,world.chunkSize,revArr(lvls[lvlnum][1])));
 world.chunks.push(new Chunk(0,900,world.chunkSize,world.chunkSize,revArr(lvls[lvlnum][2])));
 
 world.chunks.push(new Chunk(300,300,world.chunkSize,world.chunkSize,revArr5(revArr3(revArr3(revArr3(lvls[lvlnum][2]))))));
 world.chunks.push(new Chunk(-300,900,world.chunkSize,world.chunkSize,revArr4(revArr3(lvls[lvlnum][1]))));
 
 
 world.chunks.push(new Chunk(0,600,world.chunkSize,world.chunkSize,revArr3(revArr3(revArr3(revArr(lvls[lvlnum][0]))))));
 world.chunks.push(new Chunk(300,0,world.chunkSize,world.chunkSize,revArr4(lvls[lvlnum][2])));
 world.chunks[0].spawn(player);
 world.chunks[1].spawn(player);
 world.chunks[2].spawn(player);
 lvlnum++;}
 };
 loadLvl();
 noStroke();
 var camx=0;
 var camy=0;
 var fading=false;
 var txts=[
     'Hello, and welcome to Cubi.',
     'This game may look\nlike a platformer,\n but it is a\npuzzle game.',
     'Therefore, please\ndo not share solutions\nto levels.',
     'It takes away the\n"AHA!" moment, and\ncompleting the\ngame is meaningless.',
     'This game is designed\nto be hard.',
     'The point is that the\npuzzles are hard.',
     'And remember:',
     'Sometimes, \nyou have to\nsee life from\nanother angle.'];
 var txts2=[
     '',
     '',
     'Congratulations!',
     'You beat Cubi.',
     'Hopefully, you\nhad challenges',
     'and felt like\na genius, too.',
     'Thank you for playing...',
     'CUBI\n(Click to continue\nto the game)'];
 var word=0;
 var hasWon=false;
 var lvlPage=0;
 draw= function() {
     camx+=((player.x+player.sx/2)-camx)/10;
     camy+=((player.y+player.sy/2)-camy)/10;
     background(36, 27, 7);
     if((playing&&!played2)||hasWon){
         if(scene==='game'){
         word=0;
     pushMatrix();
   player.requestMove();
         player.inWater=false;
     placehold=get();
     for(var i=0; i<world.chunks.length; i++){
     fill(i*255/16);
     background(255, 0);
     pushMatrix();
     scale(0.968);
     translate(-world.chunks[i].x,-world.chunks[i].y);
     world.chunks[i].collide(player);
     world.chunks[i].draw();
     if(chunk===1){
         player.draw();
         player.x-=300;
         player.y+=600;
         player.draw();
         player.x+=300;
         player.y-=600;}
     if(chunk===2){
         player.draw();
     }
     if(chunk===0){
         player.draw();
         if(player.x>=300-player.sx){
         pushMatrix();
         translate(150,750);
         rotate(radToPi*90);
         translate(-150,-150);
         player.draw();
         popMatrix();}
     }
     placehold2[i]=get(0,0,300,300);
     popMatrix();}
     image(placehold,0,0);
     for(var i=0; i<world.chunks.length; i++){
     pushMatrix();
     translate(61,42);
     scale(scales);
     if(i===0){
     translate(200,0);
     scale(0.94,0.543);
     rotate(radToPi*45);}
     if(i===1){
     translate(0,-114);
     rotate(radToPi*-120);
     scale(0.94,0.543);
     rotate(radToPi*135);}
     if(i===2){
     translate(200,-460);
     rotate(radToPi*-60);
     scale(0.94,0.543);
     rotate(radToPi*45);}
     if(i<3){
     image(placehold2[i],world.chunks[i].x,world.chunks[i].y,412*300/400,412*300/400);
     
     }
     popMatrix();
         
 
     }
     popMatrix();
     if(player.x>300&&player.y>300){
         player.y+=600;
         player.x-=300;
         chunk=2;
     }
     if(player.x<0&&player.y>300){
         player.y-=600;
         player.x+=300;
         chunk=1;
     }
     if(player.x>300&&player.y<300){
         placehold=player.x;
         if(ygrav===0){
         player.x=300-player.y-35;}else{
         player.x=300-player.y-50;}
         player.y=-(300-placehold);
         player.y+=900;
         chunk=2;
         placehold=xgrav;
         xgrav=-ygrav;
         ygrav=placehold;
         placehold=player.xv;
         player.xv=-player.yv;
         player.yv=placehold;
     }
     if(player.y<300&&player.x<300){chunk=0;}
     if(player.y>300&&player.y<600){chunk=1;}
     if(player.y>900&&player.y+player.yv<=900){
         placehold=xgrav;
         xgrav=ygrav;
         ygrav=-placehold;
         placehold=player.xv;
         player.xv=player.yv;
         player.yv=-placehold;
         if(ygrav===0){
         placehold=player.x+35;}else{
         placehold=player.x+50;}
         
         player.x=300-(player.y-900);
         player.y=300-placehold;
     }
   player.move();
  
     for(var i=0; i<world.chunks.length; i++){
     world.chunks[i].kill(player);}
     if(keys[82]){
         lvlnum--;
         loadLvl();
     }
     fill(51, 39, 14);
     rect(300,25,75,50);
     fill(77, 63, 35);
     quad(300,25,375,25,370,30,305,30);
     fill(71, 57, 28);
     quad(375,75,375,25,370,30,370,70);
     fill(56, 47, 30);
     quad(300,75,375,75,370,70,305,70);
     fill(66, 53, 28);
     quad(300,75,300,25,305,30,305,70);
     fill(255);
     text('MENU',337.5,50);
         }
     else if(scene==='menu'){
         fill(56, 44, 20);
         
         rect(button,160,400-button*2,80);
         rect(button2,260,400-button2*2,80);
         if(mouseY>160&&mouseY<240){
             button-=button/10;
         }else{
            button+=(200-button)/10; 
         }
         if(mouseY>260&&mouseY<340){
             button2-=button2/10;
         }else{
            button2+=(200-button2)/10; 
         }
         fill(255);
         textSize(70);
         text('CUBI',200,100);
         textSize(50);
         text('Play',200,200);
         text('Levels',200,300);
         textSize(30);
     }
     else if(scene==='lvls'){
     fill(51, 39, 14);
     rect(300,25,75,50);
     fill(77, 63, 35);
     quad(300,25,375,25,370,30,305,30);
     fill(71, 57, 28);
     quad(375,75,375,25,370,30,370,70);
     fill(56, 47, 30);
     quad(300,75,375,75,370,70,305,70);
     fill(66, 53, 28);
     quad(300,75,300,25,305,30,305,70);
     fill(255);
     text('MENU',337.5,50);
     fill(51, 39, 14);
     for(var i=lvlPage*10; i<min(lvlPage*10+10,lvls.length); i++){
     fill(51, 39, 14);
     rect(25+((i-lvlPage*10)%4)*100,100+floor((i-lvlPage*10)/4)*100,50,50);
     fill(255);
     text(i+1,50+((i-lvlPage*10)%4)*100,125+floor((i-lvlPage*10)/4)*100);
     }
     if(lvlPage>0){
     fill(51, 39, 14);
     rect(225,300,50,50);
     fill(255);
     text('←',250,325);}
     if(lvlPage*10+10<lvls.length){
     fill(51, 39, 14);
     rect(325,300,50,50);
     fill(255);
     text('→',350,325);}
     }    
     }else if(!played2){
         fill(255);
         text(txts[word], 200, 200);
         scene='menu';
         if(fade<=0){word++; if(word>=txts.length){playing=true;}}
     }else if(!played&&played2){
         fill(255);
         text(txts2[word], 200, 200);}
         if(played&&fade>0){
             fade-=5;
             fading=false;
         }
         if(!played&&played2){
         if(fade<=0&&played2){word++; }}
         if(played&&fade<=0){
             played=false;
             played2=true;
             fading=true;
         }
         if(!fading&&fade<255){fade+=5;}
         if(fading){fade-=5;}
         if((!playing||played2||word<txts2.length)&&!(playing&&!played2)){
         if(fade<=0){fading=false;}}
         if(goto!==-1){
         fading=true;
         if(fade<=0){fading=false; scene=goto; goto=-1;}
         }
     fill(36, 27, 7, 255-fade);
     rect(0,0,400,400);
     if(word>=txts2.length&&played2){
         if(!hasWon){
         scene='menu';}
         hasWon=true;
     }
     
 };
 mouseClicked=function(){
 if((!playing||played2||word<txts2.length)&&!(playing&&!played2)&&!hasWon){
     fading=true;}
 if(mouseY>160&&mouseY<240&&scene==='menu'){
          goto='game';
         }
 if(mouseY>260&&mouseY<340&&scene==='menu'){
          goto='lvls';
         }
 if(mouseX>300&&mouseY>25&&mouseX<375&&mouseY<75&&scene!=='menu'){
     goto='menu';
 }
 if(scene==='lvls'){
     
     if(lvlPage>0&&mouseX>225&&mouseY>300&&mouseX<275&&mouseY<350){
         lvlPage--;}
     if(lvlPage*10+10<lvls.length&&mouseX>325&&mouseY>300&&mouseX<375&&mouseY<350){
         lvlPage++;}
     for(var i=lvlPage*10; i<min(lvlPage*10+10,lvls.length); i++){
     if(mouseX>25+((i-lvlPage*10)%4)*100&&mouseY>100+floor((i-lvlPage*10)/4)*100&&mouseX<75+((i-lvlPage*10)%4)*100&&mouseY<150+floor((i-lvlPage*10)/4)*100){
         lvlnum=i;
         loadLvl();
         goto='game';
     }
     }
 }
 };
 }
     }
   
   };
 
     var canvas = document.getElementById("game"); 
 
     var processingInstance = new Processing(canvas, sketchProc);