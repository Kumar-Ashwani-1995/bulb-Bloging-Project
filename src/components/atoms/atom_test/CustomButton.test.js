import { fireEvent, render, screen } from '@testing-library/react';
import CustomButton from '../CustomButton';



describe("Button test", () => {
    it('button loaded', () => {
        let text = "MyButton";
        render(<CustomButton onClickMethod={console.log}>{text}</CustomButton>)
        const linkElement = screen.getByText(text);
        expect(linkElement).toBeInTheDocument();
        let btn = screen.queryByTestId(text);
        fireEvent.click(btn);
    })

})