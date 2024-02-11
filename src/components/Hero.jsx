
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';
const Hero = () => (

  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
     <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[15px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> 
            <span className="text-slate-400">{" "}Discount For{" "}</span>
            <span className="text-white">1 Month</span>
            <span className="text-slate-400">{" "}Account{" "}</span>
          </p>
        </div>

      <div className="flex flexx-row justify-between items-center w-full">
      <h1 className='felx-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
        The Next  <br className="sm:block hidden"/> {" "}
      <span className='text-gradient'>Generation
      </span> {" "} 
      
      </h1>
      <div className="ss:flex md:mr-4 mr-0 hidden sm:block">
        <GetStarted/>
      </div>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
      Payment Method 
      </h1>
      <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p></div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[60%] h-[50%] top-0 skyblue__gradient" />
        <div className="absolute z-[1] w-[90%] h-[90%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[65%] h-[60%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>  
      </section>



)

export default Hero
