import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider } from '../../src/i18n/language'
import { LanguageSelector } from '../../src/components/language-selector'

describe('LanguageSelector', () => {
    test('shows the currently selected language', () => {
        const { container } = render(
            <LanguageProvider initialLang="fr">
                <LanguageSelector />
            </LanguageProvider>
        )

        const label = container.querySelector('.p-dropdown-label')!
        expect(label.querySelector('img.lang-flag')).not.toBeNull()
        expect(label).not.toHaveTextContent('Français')
    })

    test('changes language when an option is clicked', () => {
        render(
            <LanguageProvider initialLang="fr">
                <LanguageSelector />
            </LanguageProvider>
        )

        fireEvent.click(screen.getByRole('combobox'))
        fireEvent.click(screen.getAllByText('English')[0])

        expect(localStorage.getItem('nzy-lang')).toBe('en')
    })
})
