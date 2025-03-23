'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='my-3'>
            <p className='bg-[#0064A0] text-white w-full rounded-full p-5 text-lg flex justify-between'>
                <span className='flex gap-1'>Slack is your digital HQ. meet the new features keepking teams connected in work-from-anywhere world.<Link className='underline flex items-center' href="/login">Let's go<ArrowRight size={20} /></Link></span>
                <X />
            </p>
            <div className='flex flex-col lg:flex-row items-center gap-8 mt-10'>
                {/* Left: Content */}
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='font-bold text-2xl md:text-5xl leading-tight'>
                        Slack is where the future works
                    </h1>
                    <p className='text-lg mt-4 text-gray-700'>
                        Transform the way you work with one place for everyone and everything you need to get stuff done.
                    </p>

                    {/* Buttons */}
                    <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                        <button className='bg-[#642067] text-white px-6 py-2 font-semibold border-2 border-[#642067] rounded-md hover:bg-transparent hover:text-[#642067] cursor-pointer'>
                            TRY FOR FREE
                        </button>
                        <button className='flex items-center gap-1 bg-sky-500 px-0.5 py-[1px] font-semibold text-white border-2 border-sky-500 rounded-md hover:bg-sky-600'>
                            <span className='bg-white p-1 h-full flex items-center justify-center'>
                                <Image src="/google-icon.webp" alt="Google" width={20} height={20}  />
                            </span>
                            <span>START WITH GOOGLE</span>
                        </button>
                    </div>
                </div>

                <div className='flex-1 relative'>
                    <Image src="/img-project-management-hero.png" alt="Hero Image" width={600} height={400} />

                    <div className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold flex items-center gap-1'>
                        👍 3
                    </div>

                    <div className='absolute left-[-15px] top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold flex items-center gap-1'>
                        🎉 5
                    </div>

                    <div className='absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold flex items-center gap-1'>
                        💡 8
                    </div>

                    <div className='absolute bottom-[30px] right-[30px] bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold flex items-center gap-1'>
                        👀 5
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
