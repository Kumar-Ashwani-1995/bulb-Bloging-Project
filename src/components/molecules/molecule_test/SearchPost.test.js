import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SearchPost from '../SearchPost';
import { useNavigate } from 'react-router-dom';


jest.mock('react-redux');
jest.mock('react-router-dom');


describe("search test", () => { 
    it('search', async () => {
        useNavigate.mockReturnValue(jest.fn())
        useDispatch.mockReturnValue(function(){})
        const { container } = render(<SearchPost></SearchPost>)
    
        const searchBox = screen.getByTestId('searchBox');
        fireEvent.change(searchBox, {target: {value: 'how'}});
        let submit = screen.queryByTestId("search");
        await fireEvent.click(submit);
        fireEvent.change(searchBox, {target: {value: ''}});
        fireEvent.keyDown(searchBox, {key: 'Enter'})
    })

})









