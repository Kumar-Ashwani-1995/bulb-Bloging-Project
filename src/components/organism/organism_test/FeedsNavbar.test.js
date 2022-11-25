import { fireEvent, render, screen } from '@testing-library/react';
import FeedsNavbar from '../FeedsNavbar';
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';


jest.mock('react-redux');
jest.mock('react-router-dom');

describe("Nav bar", () => {
    it('nav loaded for logged in user', () => {
        useSelector.mockReturnValue({
            isLoggedIn: { email: "test@gmail.com", fullName: "Sunny Kumar", password: "", id: 2 }
        })
        useNavigate.mockReturnValue(jest.fn())
        useParams.mockReturnValue({
            pageType: "all"
        })
        const { debug } = render(<FeedsNavbar></FeedsNavbar>)
        // debug();
        // const text = screen.queryByTestId("mypost");
        // expect(text).toBe("My Posts")
        let select = screen.queryByTestId("select");
        fireEvent.click(select);
        setTimeout(() => {
            let all = screen.queryByTestId("all");
            fireEvent.click(all);
        }, 1000);
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
        const linkElement2 = screen.getByText(/Log Out/i);
        expect(linkElement2).toBeInTheDocument();
        const linkElement3 = screen.getByText(/Create New/i);
        expect(linkElement3).toBeInTheDocument();
        const linkElement4 = screen.getByText(/Trending/i);
        expect(linkElement4).toBeInTheDocument();
        const linkElement5 = screen.getByText(/Profile/i);
        expect(linkElement5).toBeInTheDocument();
        const linkElement6 = screen.queryByText(/Log In/i);
        expect(linkElement6).not.toBeInTheDocument();
    })
    it('nav loaded for logged out user', async () => {
        useSelector.mockReturnValue({
            isLoggedIn: undefined
        })
        useNavigate.mockReturnValue(jest.fn())
        useParams.mockReturnValue({
            pageType: "all"
        })
        const { debug } = render(<FeedsNavbar></FeedsNavbar>)
        // debug();
        // const text = screen.queryByTestId("mypost");
        // expect(text).toBe("My Posts")
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
        const linkElement2 = screen.getByText(/Log In/i);
        expect(linkElement2).toBeInTheDocument();
        const linkElement3 = screen.queryByText(/Create New/i);
        expect(linkElement3).not.toBeInTheDocument();
        const linkElement4 = screen.getByText(/Trending/i);
        expect(linkElement4).toBeInTheDocument();
        const linkElement5 = screen.queryByText(/Profile/i);
        expect(linkElement5).not.toBeInTheDocument();
        const linkElement6 = screen.queryByText(/Log Out/i);
        expect(linkElement6).not.toBeInTheDocument();

    })

})