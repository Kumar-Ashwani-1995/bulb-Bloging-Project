import { render, screen } from '@testing-library/react';
import CommentCard from '../CommentCard';



describe("comment test", () => { 
it('comment loaded',()=>{
    const { container } = render(<CommentCard comment={{
        "body": "new comment\n",
        "userId": 6,
        "username": "Ashwani Kumar",
        "date": "2022-11-23T15:00:00.498Z",
        "postId": "9",
        "id": 9
    }}></CommentCard>)
    // container()

})

})