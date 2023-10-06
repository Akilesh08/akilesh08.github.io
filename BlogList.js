import React, { useState } from 'react';
import BlogPost from './BlogPost';
const blogPosts = [
    {
        title: 'A Game of Thrones',
        content:"A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter. A seventh novel, A Dream of Spring, is planned to follow.",
        author:"George R. R. Martin",
    },
    {
        title: 'To Kill a Mockingbird',
        content:"To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature; a year after its release, it won the Pulitzer Prize. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.Despite dealing with the serious issues of rape and racial inequality, the novel is renowned for its warmth and humor. Atticus Finch, the narrator's father, has served as a moral hero for many readers and as a model of integrity for lawyers. The historian Joseph Crespino explains, 'In the twentieth century, To Kill a Mockingbird is probably the most widely read book dealing with race in America, and its main character, Atticus Finch, the most enduring fictional image of racial heroism.'As a Southern Gothic novel and Bildungsroman, the primary themes of To Kill a Mockingbird involve racial injustice and the destruction of innocence. Scholars have noted that Lee also addresses issues of class, courage, compassion, and gender roles in the Deep South. Lessons from the book emphasize tolerance and decry prejudice. Despite its themes, To Kill a Mockingbird has been subject to campaigns for removal from public classrooms, often challenged for its use of racial epithets. In 2006, British librarians ranked the book ahead of the Bible as one 'every adult should read before they die'.",
        author:"Harper Lee"
    },
    {
        title:' Harry Potter and the Philosopher Stone ',
        content:"Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
        author:"J. K. Rowling",
    }];

function BlogList(){
    const [selectedPost, setSelectedPost] = useState(null);
    const handlePostClick = (index) => {setSelectedPost(blogPosts[index]);
    };
    return (
    <div className='list'>
        <ul>
            {blogPosts.map((post, index) => (
            <li key={index} onClick={() => handlePostClick(index)}>
                {post.title}
            </li>
            ))}
        </ul>
        {selectedPost && (
        <BlogPost
        title={selectedPost.title}
        content={selectedPost.content}
        author={selectedPost.author}/>
        )}
    </div>
    );
}
export default BlogList;
