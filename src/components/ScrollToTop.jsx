import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = (props) => {
  return (
    <div className={`fixed bottom-6 right-8 w-14 h-14 rounded-full deep-shadow hover-action bg-slate-100 flex items-center justify-center transition-all duration-500 ${props.navInView ? "translate-x-[200%]" : "translate-x-0"}`}>
      <FontAwesomeIcon icon={faChevronUp} color="black" size="xl" />
    </div>
  )
}

export default ScrollToTop;
