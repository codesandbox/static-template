function StopWatch() {
 let duration =0;
 let running = false;
 let startTime, endTime;


 this.start= function(){
    if(running){
    console.log("StopWatch is already running ");
    return ;
    }
    running = true;
    startTime = Date.now();
 };

 this.stop = function() {
   if(!running){
     console.log("StopWatch has already Stopped");
     return;
   }
   running= false;
   endTime= Date.now();
   duration= (endTime-startTime)/1000;
 };

 this.reset= function() {
  running= false;
  duration = 0;
  startTime=null;
  endTime=null;
 };

Object.defineProperty(this,"duration",{
  get: function(){
    return duration;
  }
});
}