var events = {
    events: {},
    on: function(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    off: function(eventName, fn) {
        if(this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i++) {
                // === can use findIndex
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }                
            }
        }
    },
    emit: function(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                fn(data)
            });
        }
    }
}

events.on('showNotification', function(data) {
    alert(data);
});

events.on('showNotification', function (data) {
    console.log(data);
});

events.emit('showNotification', 'Hello!')