import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import ProgramCard from './components/ProgramCard';
import MembershipCard from './components/MembershipCard';

function App() {
  return (
    <div className={`text-gray-400 bg-slate-900 overflow-hidden`}>
      {/* header */}
      <header id='home' className={`relative w-full h-screen header-section`}>
        <section className={`container z-10 relative flex h-full mx-auto sm:flex-row sm:justify-between sm:items-center flex-col justify-end items-start`}>
          <div className="sm:hidden w-full mb-4">
            <div className="mx-auto w-72 h-96 rounded-lg bg-orange-300"></div>
          </div>
          <div className="sm:w-1/2 w-full sm:px-0 px-4 ">
            <p className="sm:text-4xl text-center font-bold text-2xl mb-2">Gym for true Gymers!</p>
            <p className="sm:text-lg text-center text-base">Get your self in shape with our highly profficient trainers | Various programs for everyone | Complete assistance | Competition opportunities</p>
          </div>
          <div className="sm:w-1/2 hidden sm:flex">
            <div className="mx-auto w-72 h-96 rounded-lg bg-orange-300 justify-self-end"></div>
          </div>
        </section>
      </header>

      {/* programs */}
      <section id='programs' className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">TRAINING PROGRAMS</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
        <div className='overflow-x-auto'>
          <div className='flex sm:justify-evenly justify-start overflow-x-auto w-max mx-auto'>
            <ProgramCard imgUrl={'abc'} title={'Weight Loss'} body={''} />
            <ProgramCard imgUrl={'abc'} title={'Muscle Gain'} body={''} />
            <ProgramCard imgUrl={'abc'} title={'Cardio'} body={''} />
            <ProgramCard imgUrl={'abc'} title={'Weight Ligting'} body={''} />
          </div>
        </div>
      </section>

      {/* memberships */}
      <section id='memberships' className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">GYM MEMBERSHIP</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
        <div className='overflow-x-auto'>
          <div className='flex justify-start w-max mx-auto'>
            <MembershipCard price={999.00} center={false} title={'Starter'} details={[['Program flexibility.', true], ['Complete access to all the equipments for workout.', true], ['10 hrs / week maximum time limit,', true], ['Diet and suppliment support.', false], ['Personalised trainer.', false], ['Access to various gyming competition.', false], ['Injury insurance.', false]]} />
            <MembershipCard price={1999.00} center={true} title={'Advanced'} details={[['Program flexibility.', true], ['Complete access to all the equipments for workout.', true], ['21 hrs / week maximum time limit,', true], ['Diet and suppliment support.', true], ['Personalised trainer.', false], ['Access to various gyming competition.', false], ['Injury insurance.', false]]} />
            <MembershipCard price={4999.00} center={false} title={'Professional'} details={[['Program flexibility.', true], ['Complete access to all the equipments for workout.', true], ['No maximum time limit,', true], ['Diet and suppliment support.', true], ['Personalised trainer.', true], ['Access to various gyming competition.', true], ['Injury insurance.', true]]} />
          </div>
        </div>
      </section>

      {/* gallary */}
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">IMAGE GALLERY</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/500x300" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/501x301" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src="https://dummyimage.com/600x360" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src="https://dummyimage.com/601x361" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/502x302" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/503x303" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* trainers */}
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TRAINERS</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">Holden Caulfield</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">Alper Kamu</h2>
                  <h3 className="text-gray-500 mb-3">Designer</h3>
                  <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">Atticus Finch</h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">Henry Letham</h2>
                  <h3 className="text-gray-500 mb-3">Designer</h3>
                  <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="text-gray-600 body-font relative container mx-auto">
  <div className="absolute rounded-lg inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{"filter": "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
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
