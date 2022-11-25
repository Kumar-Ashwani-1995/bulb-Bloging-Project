import { fireEvent, render, screen } from '@testing-library/react';
import SignInForm from '../SignInForm';
import { useDispatch } from 'react-redux';

jest.mock('react-redux');

describe("Sign test", () => {
    it('Sign loaded', async () => {
        useDispatch.mockReturnValue(function(){return "success"})
        const { container } = render(<SignInForm></SignInForm>)
        let submit = screen.queryByTestId("submit");

        await fireEvent.click(submit);
        setTimeout(() => {
            const linkElement = screen.getByText("email is required");
            expect(linkElement).toBeInTheDocument();
            const linkElement2 = screen.getByText("password is required");
            expect(linkElement2).toBeInTheDocument();
        }, 1000);


    })
    it('sign in success', async () => {
        useDispatch.mockReturnValue(function(){return "success"})
        const { container } = render(<SignInForm navigateToDashboard={jest.fn()}></SignInForm>)

        const email = screen.getByTestId('email');
        const password = screen.getByTestId('password');
 
        fireEvent.change(email, {target: {value: 'test@gmail.com'}});
        fireEvent.change(password, {target: {value: '1234'}});

        let submit = screen.queryByTestId("submit");

        await fireEvent.click(submit);
        setTimeout(() => {
            const linkElement = screen.getByText("email is required");
            expect(linkElement).not.toBeInTheDocument();
            const linkElement2 = screen.getByText("password is required");
            expect(linkElement2).not.toBeInTheDocument();
            const linkElement3 = screen.getByText("Invalid Email or password");
            expect(linkElement3).not.toBeInTheDocument();
        }, 1000);


    })
    it('sign in fail', async () => {
        useDispatch.mockReturnValue(function(){return "fail"})
        const { container } = render(<SignInForm navigateToDashboard={jest.fn()}></SignInForm>)

        const email = screen.getByTestId('email');
        const password = screen.getByTestId('password');
 
        fireEvent.change(email, {target: {value: 'test@gmail.com'}});
        fireEvent.change(password, {target: {value: '1234'}});

        let submit = screen.queryByTestId("submit");
        let toggle = screen.queryByTestId("toggle");
        

        await fireEvent.click(submit);
        await fireEvent.click(toggle);
        setTimeout(() => {
            const linkElement = screen.getByText("email is required");
            expect(linkElement).not.toBeInTheDocument();
            const linkElement2 = screen.getByText("password is required");
            expect(linkElement2).not.toBeInTheDocument();
            const linkElement3 = screen.getByText("Invalid Email or password");
            expect(linkElement3).not.toBeInTheDocument();
        }, 1000);


    })

})