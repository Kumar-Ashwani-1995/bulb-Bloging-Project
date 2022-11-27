import { fireEvent, render, screen } from '@testing-library/react';
import CategoryListing from '../CategoryListing';
import { useNavigate } from 'react-router-dom';


jest.mock('react-router-dom');



describe("CategoryListing test", () => {
    it('bulbCategoryListing loaded', () => {
        useNavigate.mockReturnValue(jest.fn())

        const { container } = render(<CategoryListing categoryId={["1", "2"]} setId={jest.fn()}></CategoryListing>)
        // container()
        expect(screen.getByText(/Others/i)).toBeInTheDocument();
        expect(screen.getByText(/Science/i)).toBeInTheDocument();
        expect(screen.getByText(/Nature/i)).toBeInTheDocument();
        expect(screen.getByText(/Motivational/i)).toBeInTheDocument();
        expect(screen.getByText(/Travel/i)).toBeInTheDocument();
        expect(screen.getByText(/Movies/i)).toBeInTheDocument();
        expect(screen.getByText(/Technology/i)).toBeInTheDocument();

        let select = screen.queryByTestId("Science");
        fireEvent.click(select);
        let select2 = screen.queryByTestId("Movies");
        fireEvent.click(select2);

    })
    it('bulbCategoryListing loaded', () => {
        useNavigate.mockReturnValue(jest.fn())

        const { container } = render(<CategoryListing categoryId={false} setId={jest.fn()}></CategoryListing>)
        // container()
        expect(screen.getByText(/Others/i)).toBeInTheDocument();
        expect(screen.getByText(/Science/i)).toBeInTheDocument();
        expect(screen.getByText(/Nature/i)).toBeInTheDocument();
        expect(screen.getByText(/Motivational/i)).toBeInTheDocument();
        expect(screen.getByText(/Travel/i)).toBeInTheDocument();
        expect(screen.getByText(/Movies/i)).toBeInTheDocument();
        expect(screen.getByText(/Technology/i)).toBeInTheDocument();

        let select = screen.queryByTestId("Science");
        fireEvent.click(select);
        let select2 = screen.queryByTestId("Movies");
        fireEvent.click(select2);

    })

})