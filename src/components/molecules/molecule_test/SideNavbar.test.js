import { render, screen } from '@testing-library/react';
import SideNavbar from '../SideNavbar';
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';


jest.mock('react-redux');

describe("sn test", () => {
    it('sn loaded', () => {
        useSelector.mockReturnValue({
            loggedInData: { email: "test@gmail.com", fullName: "", password: "", id: 2 },
            isLoggedIn: true
        })
        const { container } = render(
            <BrowserRouter>
                <SideNavbar></SideNavbar>
            </BrowserRouter>
        )
        // container()

    })
    it('sn loaded logged out', () => {
        useSelector.mockReturnValue({
            loggedInData: null,
            isLoggedIn: false
        })
        const { container } = render(
            <BrowserRouter>
                <SideNavbar></SideNavbar>
            </BrowserRouter>
        )
        // container()

    })

})