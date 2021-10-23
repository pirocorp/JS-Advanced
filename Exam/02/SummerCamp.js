class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;

        this.priceForTheCamp = {
            "child": 150, 
            "student": 300, 
            "collegian": 500
        };

        this.listOfParticipants = [];
    };

    registerParticipant (name, condition, money) {
        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if(this.listOfParticipants.some(p => p.name === name)) {
            return `The ${name} is already registered at the camp.`
        }

        if(money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`
    };

    unregisterParticipant(name) {
        if(!this.listOfParticipants.some(p => p.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(p => p.name !== name);
        return `The ${name} removed successfully.`;
    };

    timeToPlay (typeOfGame, participant1, participant2) {
        participant1 = this.listOfParticipants.find(p => p.name === participant1);

        if(typeOfGame === 'WaterBalloonFights') {
            participant2 = this.listOfParticipants.find(p => p.name === participant2);

            if(participant1 === undefined || participant2 === undefined) {
                throw new Error('Invalid entered name/s.');
            }

            if(participant1.condition !== participant2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if(participant1.power > participant2.power) {
                participant1.wins += 1;

                return `The ${participant1.name} is winner in the game ${typeOfGame}.`;
            }

            if(participant2.power > participant1.power) {
                participant1.wins += 2;

                return `The ${participant2.name} is winner in the game ${typeOfGame}.`;
            }
        }

        if(typeOfGame === 'Battleship') {
            if(participant1 === undefined) {
                throw new Error('Invalid entered name/s.')
            }

            participant1.power += 20;

            return `The ${participant1.name} successfully completed the game ${typeOfGame}.`
        }

        return 'There is no winner.';
    };

    toString() {
        const result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        this.listOfParticipants.forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return result.join('\n');
    };
}