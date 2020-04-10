import { faYinYang, faPhoneVolume, faMapMarkedAlt, faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons" 
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

const Icons = () => {
  return library.add( faYinYang, faPhoneVolume, faMapMarkedAlt, faChevronCircleLeft, faChevronCircleRight, faFacebookSquare)
}

export default Icons;