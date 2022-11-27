import { render, screen } from '@testing-library/react';
import LoginForm from '../LoginForm';

import { useNavigate } from 'react-router-dom';


jest.mock('react-router-dom');
jest.mock('react-redux');

describe("Login test", () => { 
it('login loaded',()=>{
    useNavigate.mockReturnValue(jest.fn())
    const { container } = render(<LoginForm toggleLoginForm={true}></LoginForm>)
    // container()

})
it('login loaded',()=>{
        useNavigate.mockReturnValue(jest.fn())
        const { container } = render(<LoginForm toggleLoginForm={false}></LoginForm>)
    // container()

})
})