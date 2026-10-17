import tallinn from '../../assets/images/tallinn.jpg'
import montBlanc from '../../assets/images/mont-blanc.jpg'
import budapest from '../../assets/images/budapest.jpg'

export function PhotoBanner() {
  return (
    <div className="photo-banner" aria-hidden="true">
      <img src={tallinn} alt="" className="photo-banner-img" />
      <img src={montBlanc} alt="" className="photo-banner-img" />
      <img src={budapest} alt="" className="photo-banner-img" />
      <div className="photo-banner-overlay" />
    </div>
  )
}
