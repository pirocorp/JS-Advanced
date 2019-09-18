const SystemMessage = require('./system-message');

class SystemMessageFactory {
    createUpcomingExam(userId, examId) {
        return new SystemMessage(
            userId,
            examId,
            `You have an exam EXAM_ID`
        );
    }
}

module.exports = SystemMessageFactory;