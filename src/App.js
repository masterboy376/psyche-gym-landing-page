import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import ProgramCard from './components/ProgramCard';
import MembershipCard from './components/MembershipCard';

function App() {
  return (
    <div  className={`bg-zinc-900 overflow-hidden text-white`}>
      {/* header */}
      <header id='home' className={`relative w-full h-screen header-section`}>
        <section className={`container z-10 relative flex h-full mx-auto sm:flex-row sm:justify-between sm:items-center flex-col justify-end items-start`}>
          <div className="sm:hidden w-full mb-4">
            <div className="mx-auto w-72 h-96 bg-orange-300"></div>
          </div>
          <div className="sm:w-1/2 w-full sm:px-0 px-4">
            <p className="sm:text-4xl font-bold text-2xl mb-2">Gym for true Gymers!</p>
            <p className="sm:text-lg text-base">Get your self in shape with our highly profficient trainers | Various programs for everyone | Complete assistance | Competition opportunities</p>
          </div>
          <div className="sm:w-1/2 hidden sm:flex">
            <div className="mx-auto w-72 h-96 bg-orange-300 justify-self-end"></div>
          </div>
        </section>
      </header>

      {/* programs */}
      <section id='programs' className="container  h-screen flex flex-col items-center mx-auto">
      <p className="sm:text-4xl font-bold text-2xl mb-8 sm:px-0 px-4 text-center">Programs</p>
      <div className='flex sm:justify-evenly justify-start overflow-x-auto w-full'>
        <ProgramCard imgUrl={'abc'} title={'Weight Loss'} body={''}/>
        <ProgramCard imgUrl={'abc'} title={'Muscle Gain'} body={''}/>
        <ProgramCard imgUrl={'abc'} title={'Cardio'} body={''}/>
        <ProgramCard imgUrl={'abc'} title={'Weight Ligting'} body={''}/>
      </div>
      </section>

      {/* memberships */}
      <section id='memberships' className="container mx-auto">
      <p className="sm:text-4xl font-bold text-2xl mb-8 mt-20 sm:px-0 px-4 text-center">Members</p>
      <div className='flex sm:justify-evenly justify-start overflow-x-auto'>
        <MembershipCard imgUrl={'abc'} title={'Weight Loss'} body={''}/>
        <MembershipCard imgUrl={'abc'} title={'Muscle Gain'} body={''}/>
        <MembershipCard imgUrl={'abc'} title={'Cardio'} body={''}/>
      </div>
      </section>

      {/* gallary */}
      {/* trainers */}
      {/* footer */}
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
