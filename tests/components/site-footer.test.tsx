import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../../src/i18n/language'
import { SiteFooter } from '../../src/components/site-footer'
import { PhotoBanner } from '../../src/components/photo-banner'

describe('SiteFooter', () => {
    test('displays the company name and contact email in French', () => {
        render(
            <LanguageProvider initialLang="fr">
                <SiteFooter />
            </LanguageProvider>
        )

        expect(screen.getByText(/NZY Informatique OÜ/)).toBeInTheDocument()
        expect(screen.getByText(/Conseil & développement informatique/)).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /contact@nzy\.info/i })).toHaveAttribute(
            'href',
            'mailto:contact@nzy.info'
        )
    })

    test('displays the tagline in the selected language', () => {
        render(
            <LanguageProvider initialLang="en">
                <SiteFooter />
            </LanguageProvider>
        )

        expect(screen.getByText(/IT consulting & development — Europe & the Americas/)).toBeInTheDocument()
    })
})

describe('PhotoBanner', () => {
    test('renders the three banner photos', () => {
        const { container } = render(<PhotoBanner />)

        expect(container.querySelectorAll('.photo-banner-img')).toHaveLength(3)
    })
})
