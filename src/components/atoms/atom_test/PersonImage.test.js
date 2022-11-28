import { render, screen } from '@testing-library/react';
import PersonImage from '../PersonImage';



describe("pi test", () => { 
it('pi loaded',()=>{
    const { debug } = render(<PersonImage></PersonImage>)
    expect(screen.queryByTestId('personImage')).toBeTruthy();
})

})