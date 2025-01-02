import React from 'react'
import downloadApp from '../../assets/images/appstore_web.svg'
import Playstore from '../../assets/images/playstore.png'
import Applestore from '../../assets/images/applestore.png'

const DownloadApp: React.FC = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-5 py-2'>
            <h2 aria-label="Download our app now" className='text-h3 md:text-h2 font-bold text-[#605F5F] md:pb-36'>Download our app now</h2>
            <div className='w-full md:h-[256px] bg-white shadow-md my-5 md:my-10 rounded-lg flex'>
                <div className='flex flex-col md:flex-row justify-between items-end gap-x-40 px-5'>
                    <div><img src={downloadApp} alt="Download App Illustration" className="mx-2" /></div>
                    <div className="max-w-[580px] hidden md:block">
                        <h4 aria-label="Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks."
                            className='text-h4 text-[#263238]'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</h4>
                        <div className='flex justify-start gap-x-4 items-center py-6'>
                        <a href="#" aria-label="Download on Play Store"> <img src={Playstore} alt="playstore link" /></a>
                        <a href="#" aria-label="Download on App Store"> <img src={Applestore} alt='applestore link' /></a>
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <div className='flex justify-start gap-x-4 items-center py-2'>
                        <a href="#" aria-label="Download on Play Store"> <img src={Playstore} alt="playstore link" /></a>
                            <a href="#" aria-label="Download on App Store"><img src={Applestore} alt='applestore link' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadApp
