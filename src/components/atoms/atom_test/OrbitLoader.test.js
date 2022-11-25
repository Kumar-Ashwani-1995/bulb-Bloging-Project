import { render, screen } from '@testing-library/react';
import OrbitLoader from '../OrbitLoader';



describe("orbit test", () => { 
it('orbit loaded',()=>{
    const { debug } = render(<OrbitLoader></OrbitLoader>)
    expect(screen.queryByTestId('orbitSpinner')).toBeTruthy();
})

})