//classical singleton
class Data {
   static getInstance() {
        this._instance = this._instance || new Data();
        return this._instance;
   }

   //behavior
}

//Module pattern
/* const data = (function(){
    //behavior
    const getInstance = () => {};

    return {
        getInstance
    }
})(); */