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
          <div className="sm:w-1/2 w-full sm:px-0 px-4 ">
            <p className="sm:text-4xl text-center font-bold text-2xl mb-2">Gym for true Gymers!</p>
            <p className="sm:text-lg text-center text-base">Get your self in shape with our highly profficient trainers | Various programs for everyone | Complete assistance | Competition opportunities</p>
          </div>
          <div className="sm:w-1/2 hidden sm:flex">
            <div className="mx-auto w-72 h-96 bg-orange-300 justify-self-end"></div>
          </div>
        </section>
      </header>

      {/* programs */}
      <section id='programs' className="container my-10 mx-auto">
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
      <p className="sm:text-4xl font-bold text-2xl mb-8 mt-20 sm:px-0 px-4 text-center">Memberships</p>
      <div className='flex sm:justify-evenly justify-start overflow-x-auto'>
        <MembershipCard price={999.00} center={false} title={'Starter'} details={[ ['Program flexibility.',true], ['Complete access to all the equipments for workout.',true], ['10 hrs / week maximum time limit,',true], ['Diet and suppliment support.',false], ['Personalised trainer.',false], ['Access to various gyming competition.',false], ['Injury insurance.', false] ]}/>
        <MembershipCard price={1999.00} center={true} title={'Advanced'} details={[ ['Program flexibility.',true], ['Complete access to all the equipments for workout.',true], ['21 hrs / week maximum time limit,',true], ['Diet and suppliment support.',true], ['Personalised trainer.',false], ['Access to various gyming competition.',false], ['Injury insurance.', false] ]}/>
        <MembershipCard price={4999.00} center={false} title={'Professional'} details={[ ['Program flexibility.',true], ['Complete access to all the equipments for workout.',true], ['No maximum time limit,',true], ['Diet and suppliment support.',true], ['Personalised trainer.',true], ['Access to various gyming competition.',true], ['Injury insurance.', true] ]}/>
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
