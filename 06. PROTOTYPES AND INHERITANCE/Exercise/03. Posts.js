function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        };

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        };
    };

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);

            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        };

        addComment(comment) {
            this.comments.push(comment);
        };

        toString() {
            let result = super.toString() + 
            `\nRating: ${this.likes - this.dislikes}`;            

            if (this.comments.length > 0) {
                result += `\nComments:`;
                result += `\n${this.comments.map(x => ` * ${x}`).join('\n')}`;
            }

            return result;
        }
    };

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);

            this.views = views;
        }

        view() {
            this.views++;

            return this;
        }

        toString() {
            return super.toString() +
                `\nViews: ${this.views}`;
        }
    };

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

const { Post, SocialMediaPost, BlogPost } = solve();

let post = new Post("Post", "Content");
console.log(post.toString());
console.log(`${'-'.repeat(50)}`);

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());