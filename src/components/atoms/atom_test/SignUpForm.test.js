import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SignUpForm from "../SignUpForm"

jest.mock('react-redux');

describe("Sign test", () => {
    it('Sign loaded', async () => {
        useDispatch.mockReturnValue(function(){return "success"})
        const { container } = render(
            <BrowserRouter>
                <SignUpForm></SignUpForm>
            </BrowserRouter>)
        let submit = screen.queryByTestId("submit");

        await fireEvent.click(submit);
        setTimeout(() => {
            const linkElement = screen.getByText("email is required");
            expect(linkElement).toBeInTheDocument();
            const linkElement2 = screen.getByText("password is required");
            expect(linkElement2).toBeInTheDocument();
            const linkElement3 = screen.getByText("Name is required");
            expect(linkElement3).toBeInTheDocument();
            const linkElement4 = screen.getByText("Confirm Password is required");
            expect(linkElement4).toBeInTheDocument();
        }, 1000);


    })
    it('sign up', async () => {
        useDispatch.mockReturnValue(function(){return "success"})
        const { container } = render(
            <BrowserRouter>
                <SignUpForm navigateToDashboard={jest.fn()}></SignUpForm>
            </BrowserRouter>)

        const email = screen.getByTestId('email');
        const password = screen.getByTestId('password');
        const cnfpassword = screen.getByTestId('cnfpassword');
        const fullname = screen.getByTestId('fullname');

        fireEvent.change(email, { target: { value: 'ashwani' } });
        fireEvent.change(password, { target: { value: 'ashwani@gmail.com' } });
        fireEvent.change(cnfpassword, { target: { value: 'ashwani@g' } });
        fireEvent.change(fullname, { target: { value: 'ashwani@gmail.com' } });

        let submit = screen.queryByTestId("submit");
        let toggle = screen.queryByTestId("toggle");
        let togglecnf = screen.queryByTestId("cnftoggle");



        await fireEvent.click(submit);
        await fireEvent.click(toggle);
        await fireEvent.click(togglecnf);
        setTimeout(() => {
            const linkElement = screen.getByText("email is required");
            expect(linkElement).toBeInTheDocument();
            const linkElement2 = screen.getByText("password is required");
            expect(linkElement2).toBeInTheDocument();
            const linkElement3 = screen.getByText("Name is required");
            expect(linkElement3).toBeInTheDocument();
            const linkElement4 = screen.getByText("Confirm Password is required");
            expect(linkElement4).toBeInTheDocument();
        }, 1000);


    })
    it('sign fail', async () => {
        useDispatch.mockReturnValue(function(){return "failure"})
        const { container } = render(
            <BrowserRouter>
                <SignUpForm navigateToDashboard={jest.fn()}></SignUpForm>
            </BrowserRouter>)

        const email = screen.getByTestId('email');
        const password = screen.getByTestId('password');
        const cnfpassword = screen.getByTestId('cnfpassword');
        const fullname = screen.getByTestId('fullname');

        fireEvent.change(email, { target: { value: 'ashwani@gmail.com' } });
        fireEvent.change(password, { target: { value: 'ashwani@gmail.com' } });
        fireEvent.change(cnfpassword, { target: { value: 'ashwani@gmail.com' } });
        fireEvent.change(fullname, { target: { value: 'ashwani@gmail.com ash' } });

        let submit = screen.queryByTestId("submit");

        await fireEvent.click(submit);
        setTimeout(() => {
            const linkElement = screen.getByText("email is required");
            expect(linkElement).not.toBeInTheDocument();
            const linkElement2 = screen.getByText("password is required");
            expect(linkElement2).not.toBeInTheDocument();
            const linkElement3 = screen.getByText("Name is required");
            expect(linkElement3).not.toBeInTheDocument();
            const linkElement4 = screen.getByText("Confirm Password is required");
            expect(linkElement4).not.toBeInTheDocument();
        }, 1000);


    })

})