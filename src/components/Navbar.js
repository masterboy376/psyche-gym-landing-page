import React, {useState, useEffect} from 'react'

const Navbar = ({logoUrl}) => {
    const [navbar, setNavbar] = useState(false);
    const [displayFixed, setDisplayFixed] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => { window.scrollY > 70 ? setDisplayFixed(true) : setDisplayFixed(false) })
    }, [])
    

    return (
        <nav className={`w-full ${displayFixed?'fixed':'relative'} bg-zinc-900 bg-opacity-70 backdrop-blur-sm top-0 left-0 z-20`}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <img src={logoUrl} alt="" className='w-36'/>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="transition-all duration-500 hover:text-orange-500">
                                <a href="#home">Home</a>
                            </li>
                            <li className="transition-all duration-500 hover:text-orange-500">
                                <a href="#programs">Programs</a>
                            </li>
                            <li className="transition-all duration-500 hover:text-orange-500">
                                <a href="#memberships">Memberships</a>
                            </li>
                            <li className="transition-all duration-500 hover:text-orange-500">
                                <a href="#gallery">Gallery</a>
                            </li>
                            <li className="transition-all duration-500 hover:text-orange-500">
                                <a href="#trainers">Trainers</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <a
                        href="#contact"
                        className="transition-all duration-500 inline-block w-full px-4 py-4 text-center text-orange-500 hover:text-zinc-900 bg-zinc-900 rounded-lg hover:bg-orange-500 border-2 border-orange-500 text-lg font-semibold"
                    >
                        Contact Us
                    </a>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="#contact"
                        className="transition-all duration-500 px-4 py-4 text-orange-500 hover:text-zinc-900 bg-zinc-900 rounded-lg hover:bg-orange-500 border-2 border-orange-500 text-lg font-semibold"
                    >
                        Contact us
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar