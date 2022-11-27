
import { render, screen } from '@testing-library/react';
import SocialMediaLogin from '../SocialMediaLogin';



describe("sm test", () => {
    it('sm loaded', () => {
        const { container } = render(<SocialMediaLogin></SocialMediaLogin>)
        // container()
        const linkElement = screen.getByText(/Sign in with Google/i);
        expect(linkElement).toBeInTheDocument();
        const linkElement2 = screen.getByText(/Sign in with Facebook/i);
        expect(linkElement2).toBeInTheDocument();
        const linkElement3 = screen.getByText(/Sign in with Apple/i);
        expect(linkElement3).toBeInTheDocument();
        const linkElement4 = screen.getByText(/Sign in with Twitter/i);
        expect(linkElement4).toBeInTheDocument();
        const linkElement5 = screen.getByText(/Sign in with email/i);
        expect(linkElement5).toBeInTheDocument();
        

    })

})




