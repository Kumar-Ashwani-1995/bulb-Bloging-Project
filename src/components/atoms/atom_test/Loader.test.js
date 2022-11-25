import { render, screen } from '@testing-library/react';
import { DotLoader, OrbitSpinner, PostLoader } from '../Loader';



describe("loader test", () => { 
it('OrbitSpinner loaded',()=>{
    const { debug } = render(<OrbitSpinner></OrbitSpinner>)
    expect(screen.queryByTestId('orbitSpinner')).toBeTruthy();
})
it('dot loaded',()=>{
    const { debug } = render(<DotLoader></DotLoader>)
    expect(screen.queryByTestId('dot')).toBeTruthy();
})
it('simple loaded',()=>{
    const { debug } = render(<PostLoader></PostLoader>)
    expect(screen.queryByTestId('simple')).toBeTruthy();
})


})