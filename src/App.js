import { useEffect, useState } from 'react';
import Logo from './assets/logo.svg';
import RedLogo from './assets/red_logo.svg';
import AppleLogo from './assets/apple_logo.webp';
import MetaLogo from './assets/meta_logo.webp';
import GoogleLogo from './assets/google_logo.webp';
import Jindal from './assets/gaurav_jindal.webp';
import Vijay from './assets/gaurav_vijay.webp';

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const personsCards = document.querySelectorAll('.person-card');
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');

    const navbar = document.querySelector('.navbar-custom');

    window.onscroll = () => {
        if (window.scrollY > 300) {
          navbar.classList.add('nav-active');
        } else {
          navbar.classList.remove('nav-active');
        }
    };

    const cardsObserver = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.animation = "fadeInAnimate .3s ease-in";
        }
      })
    };

    const heroTitleObserver = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInAnimate .8s ease-in-out";
          entry.target.style.opacity = 1;
        }
      })
    }; 

    const heroDescriptionObserver = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeUpAnimate .7s ease-in-out";
          entry.target.style.opacity = 1;
        }
      })
    }; 

    const options = { 
      threshold: 0.5,
      rootMargin: '0px',
    }

    const myObserver = new IntersectionObserver(cardsObserver, options);
    const myObserver2 = new IntersectionObserver(heroTitleObserver, options);
    const myObserver3 = new IntersectionObserver(heroDescriptionObserver, options);

    personsCards.forEach(function(element){
      myObserver.observe(element)
    });

    myObserver2.observe(heroTitle);
    myObserver3.observe(heroDescription);
  }, []);

  return (
    <main>
      <section className="text-white h-[120vh] hero-section">
        <nav className="bg-transparent transition-all py-4 fixed top-0 left-0 right-0 z-40 navbar-custom">
          <div className="container mx-auto md:px-0 px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center gap-2">
                  <img className="h-8 w-8 object-cover" src={Logo} alt="Logo" />
                  <h1 className="text-white font-medium text-[26px]">Delovita</h1>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <a href="#about" className="link mx-4">About Us</a>
                  <a href="#locations" className="link mx-4">Locations</a>
                  <a href="#contact" className="link mx-4">Contact</a>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button onClick={() => setToggle(!toggle)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {
            toggle
            && <div className="container mx-auto md:px-0 px-4 md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 md:px-3">
                  <a href="#about" className="block link py-2">About Us</a>
                  <a href="#locations" className="block link py-2">Locations</a>
                  <a href="#contact" className="block link py-2">Contact</a>
                </div>
              </div> 
          }
        </nav>
        <div className="container mx-auto py-40 md:px-0 px-8">
          <div className="lg:w-[50%] w-[100%]">
            <h1 className="md:text-[80px] text-[50px] text-white leading-[1.2em] hero-title opacity-0">
              <span className="text-[#E5E341]">Reimagine EV sourcing</span> with our network
            </h1>
            <h6 className="md:text-[30px] text-[30px] leading-normal hero-description opacity-0 pt-8">Use Digital-Supply-Networks to reimagine your Business</h6>
          </div>
        </div>
      </section>
      <section className="bg-[#8A8A8A] py-10 text-white py-20" id="about">
        <div className="container mx-auto md:px-0 px-8">
          <h2 className="text-5xl text-center font-bold mb-14 text-[#E5E341]">Who are we</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-20 md:w-[50%] w-[100%] mx-auto">
            <div className="person-card opacity-0">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110" src={Jindal} alt="Person 1" />
              </div>
              <div>
                <h3 className="text-[23px] font-bold text-center">Gaurav Jindal</h3>
                <div className="flex flex-col items-center justify-between">
                  <p className="text-[14px]">CoFounder, Business -  Ex Apple Ex COO</p>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={AppleLogo} className="rounded-full" alt="Apple" width="50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="person-card opacity-0">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110" src={Vijay} alt="Person 2" />
              </div>
              <div>
                <h3 className="text-[23px] font-bold text-center">Gaurav Vijay</h3>
                <div className="flex flex-col items-center justify-between">
                  <p className="text-[14px]">CoFounder, Tech -  Ex Google Ex Meta</p>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={MetaLogo} className="rounded-full" alt="Meta" width="50" />
                    <img src={GoogleLogo} className="rounded-full" alt="Google" width="50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-24" id="locations">
        <div className="container mx-auto md:px-0 px-8">
          <div className="flex items-center gap-2 mb-10">
            <img className="h-8 w-8 object-cover" src={RedLogo} alt="Logo" />
            <h1 className="text-white font-medium text-[26px]">Locations</h1>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <h5 className="text-[24px]">United Kingdom</h5>
              <h6 className="text-[18px] mb-4">64 Romney Close, HA27EH, London</h6>
              <div className="h-[300px] bg-white w-full overflow-hidden">
                <iframe title="map1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5083098531045!2d-0.3663247846208555!3d51.577246713415384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761338747140bd%3A0x19450a335d3b3342!2s64%20Romney%20Cl%2C%20Harrow%20HA2%207EH%2C%20UK!5e0!3m2!1sen!2s!4v1677599645319!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div>
              <h5 className="text-[24px]">INDIA</h5>
              <h6 className="text-[18px] mb-4">64 Romney Close, HA27EH, London</h6>
              <div className="h-[300px] bg-white w-full overflow-hidden">
                <iframe title="map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5083098531045!2d-0.3663247846208555!3d51.577246713415384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761338747140bd%3A0x19450a335d3b3342!2s64%20Romney%20Cl%2C%20Harrow%20HA2%207EH%2C%20UK!5e0!3m2!1sen!2s!4v1677599645319!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white pt-18 pb-24" id="contact">
        <div className="container mx-auto md:px-0 px-8">
          <div className="md:w-[50%] w-[100%] mx-auto p-10 flex flex-col justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-3 text-[#E5E341]">Contact Us</h2>
              <p>Leave us your email and we will surely get back to you</p>
            </div>
            <form className="mt-6" action="mailto:delovita@gmail.com" method="post" encType="text/plain">
              <div className="flex flex-col items-center w-full">
                <input required type="email" placeholder="Enter your email" className="w-full mb-4 text-black py-2 px-4 bg-white rounded-md outline-none border-none focus:border-2 focus:border-black" />
                <button className="outline-none border-none bg-white rounded-md px-14 block w-[100%] md:w-[50%] py-2 text-black hover:bg-black hover:text-white transition-all">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App;
