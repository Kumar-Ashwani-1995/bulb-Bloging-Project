import { fireEvent, render, screen } from '@testing-library/react';
import CommentSection from '../CommentSection';
import { useSelector } from 'react-redux'

jest.mock('react-redux');


describe("cs test", () => {
    it('cs loaded',async () => {
        useSelector.mockReturnValue({
            isLoggedIn: {"1":true}
        })
        const { container } = render(<CommentSection></CommentSection>)
        const linkElement = screen.getByText(/Comment/i);
        expect(linkElement).toBeInTheDocument();
        const comment = screen.getByTestId('commentArea');

        fireEvent.change(comment, { target: { value: 'comment' } });
        let submit = screen.queryByTestId("commentbtn");
        await fireEvent.click(submit);
        // container()

    })

})