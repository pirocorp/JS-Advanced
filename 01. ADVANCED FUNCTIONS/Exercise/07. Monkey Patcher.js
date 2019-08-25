function solve(command) {
    function producePostRating(post) {
        const result = {};
        const totalVotes = post.upvotes + post.downvotes;

        result.upvotes = post.upvotes;
        result.downvotes = post.downvotes;

        result.score = post.upvotes - post.downvotes;

        if (totalVotes > 50) {
            const maxValue = Math.max(post.upvotes, post.downvotes);
            const obfuscatedModifier = Math.ceil(maxValue * 0.25);

            result.upvotes += obfuscatedModifier;
            result.downvotes += obfuscatedModifier;
        }

        const positiveMajority = post.upvotes / totalVotes > 0.66;

        result.rating = 'new';

        if (positiveMajority) {
            result.rating = 'hot';
        } else if (result.score >= 0 && (post.upvotes > 100 || post.downvotes > 100)) {
            result.rating = 'controversial';
        }

        if (result.score < 0) {
            result.rating = 'unpopular';
        }

        if (totalVotes < 10) {
            result.rating = 'new';
        }

        return [result.upvotes, result.downvotes, result.score, result.rating];
    }

    switch (command) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            return producePostRating(this);
    }
}

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

var forumPost = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};

var answer = solve.call(forumPost, 'score');
var expected = [150, 60, 90, 'hot'];

compareScore(expected, answer);

function compareScore(expected, answer) {
    expect(expected[0] === answer[0], 'Incorrect number of upvotes');
    expect(expected[1] === answer[1], 'Incorrect number of downvotes');
    expect(expected[2] === answer[2], 'Incorrect score');
    expect(expected[3] === answer[3], 'Incorrect rating');

    console.log(expected[0], answer[0]);
    console.log(expected[1], answer[1]);
    console.log(expected[2], answer[2]);
    console.log(expected[3], answer[3]);

}

function expect(equal, err) {
    if (!equal) {
        console.log(err);
    }
}