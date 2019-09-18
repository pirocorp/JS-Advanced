class Command {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
}

//CommandExecutor is a mediator
class CommandExecutor {
    execute(command) {
        if(command.type == 'PRINT') {
            //some code...
        }
    }
}