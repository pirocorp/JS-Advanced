class SystemMessage {
    constructor(userId, examId, textTemplate) {
        this.userId = userId;
        this.examId = examId;
        this.textTemplate = textTemplate;
    }
}

module.exports = SystemMessage;