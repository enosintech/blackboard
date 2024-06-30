import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = (props) => {
  return (
    <div onClick={() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      })
    }} className={`fixed bottom-12 right-5 w-14 h-14 rounded-full deep-shadow hover-action bg-slate-100 flex items-center justify-center transition-all duration-500 ${props.navInView ? "translate-x-[200%]" : "translate-x-0"}`}>
      <FontAwesomeIcon icon={faChevronUp} color="black" size="xl" />
    </div>
  )
}

export default ScrollToTop;
