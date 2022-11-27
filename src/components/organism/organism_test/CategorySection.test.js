import { render, screen } from '@testing-library/react';
import CategorySection from '../CategorySection';
import { useNavigate } from 'react-router-dom';


jest.mock('react-router-dom');

describe("cs test", () => { 
it('cs loaded',()=>{
    useNavigate.mockReturnValue(jest.fn())

    const { container } = render(<CategorySection></CategorySection>)
    const linkElement = screen.getByText(/DISCOVER MORE OF WHAT MATTERS TO YOU/i);
        expect(linkElement).toBeInTheDocument();
    // container()

})

})