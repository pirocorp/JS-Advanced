function solve(worker) {
    if(worker.dizziness) {
        const waterInput = worker.weight * worker.experience * 0.1;
        worker.levelOfHydrated += waterInput;
        worker.dizziness = false;
    }
    
    return worker;
}
console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));