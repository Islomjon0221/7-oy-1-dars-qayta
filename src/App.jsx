import './App.css'
import down from "./assets/download.svg"
import line from "./assets/Line 9.svg"
import one from "./assets/icon-1.svg"
import two from "./assets/icon-2.svg"
import three from "./assets/icon-3.svg"

function App() {

  return (
    <div className='wrapper px-[123px] w-full h-full text-white bg-black'>
      <header className='py-[23px] flex justify-between items-center'>
        <div className="logo">
          <h3 className='text-xl font-bold text-[30px]'>Alifreza<span className='text-xl font-bold text-[#079211]'>.</span></h3>
        </div>

        <nav className='flex items-center'>
          <ul className='flex'>
            <li className='font-bold text-sm mr-[38px] text-[#ffffffb2] cursor-pointer hover:text-white duration-200'>Home</li>
            <li className='font-bold text-sm mr-[38px] text-[#ffffffb2] cursor-pointer hover:text-white duration-200'>Services</li>
            <li className='font-bold text-sm mr-[38px] text-[#ffffffb2] cursor-pointer hover:text-white duration-200'>Work</li>
            <li className='font-bold text-sm mr-[38px] text-[#ffffffb2] cursor-pointer hover:text-white duration-200'>About us</li>
            <li className='font-bold text-sm mr-[58px] text-[#ffffffb2] cursor-pointer hover:text-white duration-200'>Blog</li>
          </ul>

          <button className='font-bold text-sm outline px-[16px] py-[10px] outline-[#079211] hover:bg-[#079211] duration-300'>Contact</button>
        </nav>
      </header>
      <div className="hero-page">
        <h3 className='text-[#079211] text-[38px] leading-[94px] font-bold mt-[100]'>Hello, I’m Alif Reza</h3>
        <h1 className='text-white border-r-4 w-[771px] border-r-white text-[88px] leading-[94px] font-bold mt-[100]'>Product Designer</h1>
        <p className='text-[#808080] w-[550px] leading-[28px] mt-[38px] mb-[58px]'>I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.</p>
        <div className="buttons flex gap-1 mb-[140px]">
          <button className='font-bold text-sm outline px-[28px] py-[13px] bg-[#079211] outline-[#079211] hover:bg-black duration-300'>Email Me</button>
          <button className='flex items-center gap-[10px] font-bold text-sm outline px-[28px] py-[13px] bg-black outline-black text-[#808080] hover:bg-[#252525] hover:outline-[#252525] duration-300'><img src={down} alt="download icon" /> Download CV</button>
        </div>
      </div>
      <div className="footers">
        <div className="starter flex item-center justify-between mb-[90px]">
          <h3 className='font-bold text-[46px] leading-[56px]'>7+ years experience <br />working</h3>
          <p className='text-[16px] leading-[19.36px] text-[#808080]'><span className='flex mb-[8px] items-center gap-[16px] text-[#079211] font-bold text-[20px] leading-[24.2px]'><img src={line} alt="line" />Services</span>
          Discover the best services I offer, designed to <br /> ensure the success of your project.</p>
        </div>
        <div className="selectors flex items-center justify-between">
          <div className="w-[360px] bg-[#313131] border-b-4 border-b-[#079211] px-[25px] py-[68px]"><img className='mb-[46px]' src={one} alt="one" /> <h4 className='font-bold text-[26px] mb-[18px] leading-[32px]'>Product design</h4> <p className='w-[310px] text-[16px] leading-[19.36px] text-[#808080]'>I offer innovative and attention-grabbing product design services. From initial ideation to implementation.</p></div>
          <div className="w-[360px] bg-[#313131] border-b-4 border-b-[#079211] px-[25px] py-[68px]"><img className='mb-[46px]' src={two} alt="one" /> <h4 className='font-bold text-[26px] mb-[18px] leading-[32px]'>Frontend develop</h4> <p className='w-[310px] text-[16px] leading-[19.36px] text-[#808080]'>Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.</p></div>
          <div className="w-[360px] bg-[#313131] border-b-4  border-b-[#079211] px-[25px] py-[68px]"><img className='mb-[46px]' src={three} alt="one" /> <h4 className='font-bold text-[26px] mb-[18px] leading-[32px]'>Brand strategy</h4> <p className='w-[310px] text-[16px] leading-[19.36px] text-[#808080]'>I help design strong and captivating brand strategies. Through thorough research and market analysis.</p></div>
        </div>
        <div className="nones ">
          <h1 className='text-black h-[140px]'> </h1></div>
      </div>
    </div>
  )
}

export default App
