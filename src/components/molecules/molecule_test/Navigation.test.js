import { render, screen } from '@testing-library/react';
import NavigationLeftSection from '../NavigationLeftSection';
import NavigationRightSection from '../NavigationRightSection';
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';



jest.mock('react-redux');


describe("Bulb test", () => {
    it('bulb loaded', () => {
        useSelector.mockReturnValue({
            isLoggedIn: true
        })
        const { container } = render(
            <BrowserRouter>
                <NavigationLeftSection></NavigationLeftSection>
                <NavigationRightSection></NavigationRightSection>
            </BrowserRouter>
        )
        // container()

    })

})