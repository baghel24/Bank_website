import { card} from "../assets";
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
  <div className={layout.sectionInfo}> 
  <h2 className={styles.heading2}>Find a better card deal
    <br className='sm:block hidden'/>
    in few easy steps.</h2>
    <p className={`${styles.paragraph} text-slate-300  max-w-[470px] mt-5`}>
    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
     eget mauris tortor.ç Aliquet ultrices ac, ametau.
</p>
<Button styles="mt-10"/>
  </div>
  <div className={layout.sectionImgReverse}>
      <img src={card} alt="carddeal" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[80%] h-[90%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[90%] h-[90%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  
  </section>
  )
}

export default CardDeal
