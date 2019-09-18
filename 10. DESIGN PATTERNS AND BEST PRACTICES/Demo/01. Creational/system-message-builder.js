const SystemMessage = require('./system-message');

class SystemMessageBuilder {
    constructor() {
        this.state = {};
    }

    addUserId(userId) {
        this.state.userId = userId;
    }

    addExamId(examId) {
        this.state.examId = examId;
    }

    addTextTemplate(textTemplate) {
        this.state.textTemplate = textTemplate;
    }

    build() {
        const { userId, examId, textTemplate } = this.state;
        return new SystemMessage(userId, examId, textTemplate);
    }
}

module.exports = SystemMessageBuilder;