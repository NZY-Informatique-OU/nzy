import { Link, useNavigate } from '@tanstack/react-router'
import { Menubar } from 'primereact/menubar'
import type { MenuItem } from 'primereact/menuitem'
import { useLanguage } from '@/i18n/language-context'
import { LanguageSelector } from './language-selector'
import logo from '../../assets/images/logo-informatique.png'

export function SiteHeader() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const items: MenuItem[] = [
    {
      label: t.nav.home,
      icon: 'pi pi-home',
      command: () => navigate({ to: '/' }),
    },
    {
      label: t.nav.expertise,
      icon: 'pi pi-cog',
      command: () => navigate({ to: '/expertise' }),
    },
    {
      label: t.nav.about,
      icon: 'pi pi-info-circle',
      command: () => navigate({ to: '/a-propos' }),
    },
  ]

  const start = (
    <Link to="/" aria-label="NZY Informatique — Accueil">
      <img src={logo} alt="NZY Informatique" className="site-logo" />
    </Link>
  )

  const end = <LanguageSelector />

  return (
    <header className="site-header">
      <Menubar model={items} start={start} end={end} className="site-menubar" />
    </header>
  )
}
