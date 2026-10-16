import { render, screen } from '@testing-library/react'
import { UnderConstruction } from '../../src/components/under-construction'

describe('UnderConstruction', () => {
    test('displays the under construction heading', () => {
        render(<UnderConstruction />)

        expect(screen.getByRole('heading', { name: /under construction/i })).toBeInTheDocument()
        expect(screen.getByText(/this website is being built/i)).toBeInTheDocument()
    })
})
