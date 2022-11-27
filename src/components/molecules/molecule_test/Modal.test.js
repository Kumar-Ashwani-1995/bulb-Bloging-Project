import { fireEvent, render, screen } from '@testing-library/react';
import Modal from "../Modal"


describe("Modal test", () => {
    it('Modal loaded', () => {
        const { container } = render(<Modal setcloseDialog={jest.fn()}></Modal>)
        // container()
        const cancel = screen.getByTestId('cancel');
        fireEvent.click(cancel);
        const close = screen.getByTestId('close');
        fireEvent.click(close);
        const submit = screen.getByTestId('confirm');
        fireEvent.click(submit);
        

    })

})