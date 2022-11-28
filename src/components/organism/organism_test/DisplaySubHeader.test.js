import { fireEvent, render, screen } from '@testing-library/react';
import DisplaySubHeader from '../DisplaySubHeader';



describe("dh test", () => {
    it('dh loaded', () => {
        const { container } = render(<DisplaySubHeader></DisplaySubHeader>)
        // container()
        const linkElement = screen.getByText("Stay curious.");
        expect(linkElement).toBeInTheDocument();
        const linkElement2 = screen.getByText("Start Reading");
        expect(linkElement2).toBeInTheDocument();
        let scroll = screen.queryByTestId("Start Reading");
        fireEvent.click(scroll);

    })

})