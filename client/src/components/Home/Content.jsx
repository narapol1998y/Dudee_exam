import * as React from 'react';
import { useState, useEffect } from 'react';
import washingmachine from '../../assets/washingmachine.png'
import putcoin from '../../assets/putcoin.png'
import soundeff from '../../assets/coineff.mp3'
import Pagination from '@mui/material/Pagination';
const Content = () => {
    const [washingMachines, setWashingMachines] = useState([
        { id: 1, name: 'WashingMatchine 01', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 2, name: 'WashingMatchine 02', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 3, name: 'WashingMatchine 03', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 4, name: 'WashingMatchine 04', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 5, name: 'WashingMatchine 05', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 6, name: 'WashingMatchine 06', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 7, name: 'WashingMatchine 07', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 8, name: 'WashingMatchine 08', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 9, name: 'WashingMatchine 09', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } },
        { id: 10, name: 'WashingMatchine 10', showImage: false, badgeText: 'Available', countdown: { minutes: 0, seconds: 0 } }
    ]);

    const handleButtonClick = (machineId) => {
        const audio = new Audio(soundeff);
        audio.play();
      
        setWashingMachines((prevMachines) => {
          return prevMachines.map((machine) => {
            if (machine.id === machineId) {
              // Start the countdown timer for the clicked machine with 40 minutes
              const countdownDuration = 40 * 60; // 40 minutes in seconds
              let remainingTime = countdownDuration;
      
              const countdownInterval = setInterval(() => {
                setWashingMachines((prevMachines) => {
                  return prevMachines.map((m) => {
                    if (m.id === machineId) {
                      // Decrease the countdown timer value by 1 second
                      const minutes = Math.floor(remainingTime / 60);
                      const seconds = remainingTime % 60;
      
                      if (minutes === 0 && seconds === 0) {
                        // Countdown reached 0, reset the machine state
                        clearInterval(countdownInterval);
                        return {
                          ...m,
                          showImage: false,
                          badgeText: 'Available',
                          countdown: { minutes: 0, seconds: 0 },
                        };
                      }
      
                      return {
                        ...m,
                        countdown: {
                          minutes,
                          seconds,
                        },
                      };
                    }
                    return m;
                  });
                });
      
                remainingTime--; // Decrement remainingTime after the calculations
              }, 1000);
            }
      
            if (machine.id === machineId) {
              return {
                ...machine,
                showImage: true,
                badgeText: 'Unavailable',
              };
            }
            return machine;
          });
        });
      
        setTimeout(() => {
          setWashingMachines((prevMachines) => {
            return prevMachines.map((machine) => {
              if (machine.id === machineId) {
                return {
                  ...machine,
                  showImage: false,
                };
              }
              return machine;
            });
          });
        }, 3000);
      
        console.log(`Clicked on machine with ID: ${machineId}`);
      };
      
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const displayedMachines = washingMachines.slice(startIndex, endIndex);

    return (
        <div className='py-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {displayedMachines.map((machine) => (
                        <div key={machine.id} className="hover:cursor-pointer text-center tooltip relative rounded-xl p-2" data-tip="Click the image to put coin">
                            <p className="text-base font-semibold">{machine.name}</p>
                            <img
                                onClick={machine.badgeText === 'Unavailable' ? null : () => window['my_modal_' + machine.id].showModal()}
                                src={washingmachine}
                                alt="washingmachine"
                                className="hover:scale-105 duration-150"
                            />
                            {machine.showImage && <img src={putcoin} alt="putcoin" className="absolute top-20 right-8   w-28 lg:w-36" />}
                            <div className='flex  justify-center '>
                                <div className={`badge ${machine.badgeText === 'Available' ? '' : 'badge-error'} badge-outline flex `}>{machine.badgeText}</div>
                                {machine.badgeText === 'Available' ? null : (
                                    <span className="countdown font-mono text-2xl">
                                        <span style={{ "--value": machine.countdown.minutes }}></span>:
                                        <span style={{ "--value": machine.countdown.seconds }}></span>
                                    </span>
                                )}
                            </div>

                            <dialog id={`my_modal_${machine.id}`} className="modal">
                                <form method="dialog" className="modal-box">
                                    <h3 className="font-bold text-lg">Washing Machine {machine.id}!</h3>
                                    <p className="py-4">Do you want to put the coin?</p>
                                    <div className="modal-action">
                                        <button className="btn" onClick={() => handleButtonClick(machine.id)}>OK</button>
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-10'>
                    <Pagination className="join" count={Math.ceil(washingMachines.length / itemsPerPage)} page={page} onChange={handlePageChange} variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default Content