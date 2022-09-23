import logo from './psyche-logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProgramCard from './components/ProgramCard';
import MembershipCard from './components/MembershipCard';
import TrainerCard from './components/TrainerCard';
import headerImg from './assests/header.jpg'
import weightLossImg from './assests/weight-loss.jpg'
import weightLiftingImg from './assests/weight-lifting.jpg'
import cardioImg from './assests/cardio.jpg'
import muscleGainImg from './assests/muscle-gain.jpg'
import weightLossTrainerImg from './assests/weight-loss-trainer.jpg'
import weightLiftingTrainerImg from './assests/weight-lifting-trainer.jpg'
import cardioTrainerImg from './assests/cardio-trainer.jpg'
import muscleGainTrainerImg from './assests/muscle-gain-trainer.jpg'
import g1Img from './assests/g1.jpg'
import g2Img from './assests/g2.jpg'
import g3Img from './assests/g3.jpg'
import g4Img from './assests/g4.jpg'
import g5Img from './assests/g5.jpg'
import g6Img from './assests/g6.jpg'

function App() {
  return (
    <div className={`text-gray-400 bg-zinc-900 overflow-hidden`}>

      {/* header */}
      <header id='home' className={`relative w-full h-screen header-section`}>
      {/* navbar */}
        <Navbar logoUrl ={logo}/>
        <section className={`container z-10 relative flex h-full mx-auto sm:flex-row sm:justify-between sm:items-center flex-col justify-center items-center`}>
          <div className="sm:hidden w-full mb-4">
            <img alt='' src={headerImg} className="mx-auto w-96 h-auto rounded-lg" />
          </div>
          <div className="sm:w-1/2 w-full sm:px-0 px-4 ">
            <p className="sm:text-4xl text-center font-bold text-2xl mb-2">Gym for true Gymers!</p>
            <p className="sm:text-lg text-center text-base">Get your self in shape with our highly profficient trainers | Various programs for everyone | Complete assistance | Competition opportunities</p>
          </div>
          <div className="sm:w-1/2 hidden sm:flex">
            <img alt='' src={headerImg} className="mx-auto w-96 h-auto rounded-lg justify-self-end" />
          </div>
        </section>
      </header>

      {/* programs */}
      <section id='programs' className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">TRAINING PROGRAMS</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Attain best form of your self.</p>
        </div>
        <div className='overflow-x-auto'>
          <div className='grid sm:grid-rows-2 grid-rows-4 grid-flow-col gap-4 overflow-x-auto w-max mx-auto scroll-hidden'>
            <ProgramCard imgUrl={weightLossImg} title={'Weight Loss'} body={'Get your self in a perfect shape with a well structured program for everyone.'} />
            <ProgramCard imgUrl={muscleGainImg} title={'Muscle Gain'} body={'Great way of starting your career as a body builder.'} />
            <ProgramCard imgUrl={cardioImg} title={'Cardio'} body={'One of the best programs for keeping youself healthly and energetic,'} />
            <ProgramCard imgUrl={weightLiftingImg} title={'Weight Ligting'} body={'Structured program for aspiring weight lifters of and level experience.'} />
          </div>
        </div>
      </section>

      {/* memberships */}
      <section id='memberships' className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">GYM MEMBERSHIP</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We have got the solution for almost everyone.</p>
        </div>
        <div className='overflow-x-auto'>
          <div className='flex justify-start w-max mx-auto py-4 scroll-hidden'>
            <MembershipCard price={2999.00} center={false} title={'Starter'} details={[['Program flexibility.', true], ['Complete access to all the equipments for workout.', true], ['10 hrs / week maximum time limit,', true], ['Diet and suppliment support.', false], ['Personalised trainer.', false], ['Access to various gyming competition.', false], ['Injury insurance.', false]]} />
            <MembershipCard price={5999.00} center={true} title={'Advanced'} details={[['Program flexibility.', true], ['Complete access to all the equipments for workout.', true], ['21 hrs / week maximum time limit,', true], ['Diet and suppliment support.', true], ['Personalised trainer.', false], ['Access to various gyming competition.', false], ['Injury insurance.', false]]} />
            <MembershipCard price={9999.00} center={false} title={'Professional'} details={[['Program flexibility.', true], ['Complete access to all the equipments for workout.', true], ['No maximum time limit,', true], ['Diet and suppliment support.', true], ['Personalised trainer.', true], ['Access to various gyming competition.', true], ['Injury insurance.', true]]} />
          </div>
        </div>
      </section>

      {/* gallary */}
      <section id='gallery' className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">IMAGE GALLERY</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Take a look at our training facilities.</p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={g1Img} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={g2Img} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src={g3Img} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src={g4Img} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={g5Img} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={g6Img} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* trainers */}
      <section id='trainers' className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TRAINERS</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get to know about our highly qualified trainers.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <TrainerCard imgUrl={weightLossTrainerImg} name='Rajdeep Singh' discipline='Weight Loss Trainer' about='Well qualified trainer with the 5 years of experience in the industry.' />
            <TrainerCard imgUrl={muscleGainTrainerImg} name='Suryakant Tripathi' discipline='Muscle Gain Trainer' about='Professional trainer with the 7 years of experience of trainer more than 1000 people.' />
            <TrainerCard imgUrl={cardioTrainerImg} name='Ayushi Sharma' discipline='Cardio Trainer' about='A expert gymnastist with the the experience of over 4 years as a Cardio trainer.' />
            <TrainerCard imgUrl={weightLiftingTrainerImg} name='Praveen Yadav' discipline='Weight Lifting Trainer' about='A professional weight lifter with 2 year of trainer many aspiring weight lifters.' />
          </div>
        </div>
      </section>

      {/* contact */}
      <section id='contact' className="body-font relative container mx-auto">
        <div className="absolute rounded-lg inset-0 bg-zinc-900">
          <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.4903869726627!2d78.03977152600993!3d30.308566302368412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909292d93feb6c5%3A0x89eb2a29fad8ff!2sKhalsa%20Cricket%20Academy%20Dehradun!5e0!3m2!1sen!2sin!4v1663769603868!5m2!1sen!2sin" className='rounded-lg' style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-zinc-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-lg mb-1 font-medium title-font">Contact</h2>
            <p className="leading-relaxed mb-5">+91 6893099021</p>
            <p className="leading-relaxed mb-5">pankajsharma5491922@gmail.com</p>
            <p className="leading-relaxed mb-5">Tyagi Road, Race Course, Dehradun, Uttarakhand, India, 248001</p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-zinc-800 rounded-lg border border-zinc-800 focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-zinc-800 rounded-lg border border-zinc-800 focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-zinc-800 rounded-lg border border-zinc-800 focus:border-orange-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-500 ease-in-out"></textarea>
            </div>
            <button className="hover:text-black text-orange-500 text-lg border-2 transition-all duration-500 border-orange-500 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded-lg text-lg">Send</button>
            <p className="text-xs text-gray-500 mt-3">Your queries will be answered with full responsibility.</p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
