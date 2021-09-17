function solve() {
    let sectionIterator = createSectionIterator();
    let checkAnswer = createAnswerChecker();
    let currentSection = sectionIterator();
    let rightAnswersCount = 0;

    let answersElements = Array.from(document.getElementsByClassName("answer-text"));
    answersElements.forEach(x => x.addEventListener("click", onClickAnswerEventHandler))

    function onClickAnswerEventHandler(e) {
        let currentAnswerElement = e.target;
        let currentAnswerValue = currentAnswerElement.textContent;

        if (checkAnswer(currentAnswerValue)) {
            rightAnswersCount++;
        }

        currentSection = sectionIterator();

        if (!currentSection) {
            proccessResult();
        }
    }

    function proccessResult() {
        let resultElement = document.getElementById("results");
        let innerResult = document.querySelector("#results .results-inner h1");

        if (rightAnswersCount === 3) {
            innerResult.textContent = 'You are recognized as top JavaScript fan!';
        } else {
            innerResult.textContent = `You have ${rightAnswersCount} right answers`;
        }


        resultElement.style.display = "block";
    }

    function createAnswerChecker() {
        let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
        let currentAnswerIndex = -1;

        return function (inputAnswer) {
            currentAnswerIndex++;

            if (currentAnswerIndex < correctAnswers.length) {
                return inputAnswer === correctAnswers[currentAnswerIndex];
            }

            return undefined;
        }
    }

    function createSectionIterator() {
        let sectionElements = Array.from(document.getElementsByTagName("section"));
        let currentSectionIndex = -1;

        return function () {
            if (currentSectionIndex < 0) {
                currentSectionIndex = 0
                return sectionElements[currentSectionIndex];
            }

            let currentSection = sectionElements[currentSectionIndex];
            currentSection.style.display = 'none';

            if (currentSectionIndex === sectionElements.length - 1) {
                return undefined;
            }

            currentSectionIndex++;
            let newSection = sectionElements[currentSectionIndex];
            newSection.style.display = 'block';


            return newSection;
        }
    }
}