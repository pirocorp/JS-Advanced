function personalBMI(name, age, weight, height){
    const patient = {
        name,
        personalInfo: {
            age,
            weight,
            height,
        },
    };

    patient.BMI = Math.round((weight / (height / 100) ** 2));

    switch (true) {
        case (patient.BMI < 18.5):
            patient.status = 'underweight';
            break;
        case (patient.BMI < 25):
            patient.status = 'normal';
            break;
        case (patient.BMI < 30):
            patient.status = 'overweight';
            break;
        case (patient.BMI >= 30):
            patient.status = 'obese';
            break;
    }

    if (patient.status === 'obese') {
        patient.recommendation = 'admission required';
    }

    return patient;
}
console.log(personalBMI('Peter', 29, 130, 175));