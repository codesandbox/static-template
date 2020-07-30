EPT._arrays = {
  ArraysMLog: function(val) {
    console.log('\n EPT.ArraysM:', val);
  },
  ranArr(min, max,count){
    var arr= [];
    var val = this.random(min, max);
    while(arr.length<count){
      val = this.random(min, max);
      if(arr.indexOf(val)===-1){
        arr.push(val);
      }
    }

    return arr;
  },
  
  random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  initFramesWithKey(key, count){
    var arr = [];
    for(var i=1;i<count+1;i++){
      arr.push({ key: key+i })
    }
    return arr;
  }
};