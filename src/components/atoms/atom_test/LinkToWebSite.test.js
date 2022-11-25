import { render, screen } from '@testing-library/react';
import LinkToWebSite from '../LinkToWebSite'
import { BrowserRouter } from 'react-router-dom';




describe("link test", () => {
    it('link loaded', () => {
        const { debug } = render(
            <BrowserRouter>
                <LinkToWebSite linkName="home"></LinkToWebSite>
            </BrowserRouter>
        )
        // debug()
        const linkElement = screen.getByText("home");
        expect(linkElement).toBeInTheDocument();

    })

})