import { render, screen } from '@testing-library/react';
import UtilitySection from '../UtilitySection';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


jest.mock('react-router-dom');
jest.mock('react-redux');


describe("us test", () => {
    it('us loaded', () => {
        useNavigate.mockReturnValue(jest.fn())
        useSelector.mockReturnValue(jest.fn())
        const { container } = render(<UtilitySection></UtilitySection>)
        const linkElement = screen.getByText(/A living network of curious minds./i);
        expect(linkElement).toBeInTheDocument();
        const linkElement2 = screen.getByText(/Anyone can write on Bulb. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications./i);
        expect(linkElement2).toBeInTheDocument();
        // container()

    })

})