import * as React from 'react';
import logo from '../../assets/Laundrylogo.svg'

const Navbar = ({ onThemeToggle }) => {


    return (
        <div >
            <div className='container mx-auto'>
                <div className='flex justify-between '>
                    {/* logo */}
                    <div>
                       <a href="#"> <img src={logo} alt="logo" className='w-20 py-1 hover:scale-105 duration-150' /></a>
                    </div>
                    <div className='flex gap-5'>             
                        {/* notify */}
                        <div className="dropdown dropdown-end my-auto">
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-54">
                                <li>
                                    <a className="justify-between">
                                        Washing Machine01
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* profile */}
                        <div className="dropdown dropdown-end my-auto" >
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li> <a > Profile  </a> </li>
                                <li><a>Credits</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                          {/* toggle */}
                          <div className='my-auto flex gap-2'>
                            <input type="checkbox" className="toggle toggle-info" onChange={onThemeToggle} />
                            <p className='text-base'>Theme</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar