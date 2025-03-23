'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Package, ShieldCheck, Layers, Search } from 'lucide-react'

const Navbar = () => {
    const [isProductOpen, setIsProductOpen] = useState(false)

    return (
        <header className='flex justify-between items-center'>
            <ul className='flex items-center gap-5'>
                <li>
                    <Image
                        src="/slack-logo.png"
                        alt="Slack Logo"
                        width={100}
                        height={100}
                    />
                </li>
                <li
                    className='relative font-semibold flex items-center gap-1 cursor-pointer'
                    onMouseEnter={() => setIsProductOpen(true)}
                    onMouseLeave={() => setIsProductOpen(false)}
                >
                    Products
                    {isProductOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

                    {/* Dropdown Menu */}
                    {isProductOpen && (
                        <div className='absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2'>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                    <Package size={18} className="text-blue-500" />
                                    <span>Slack Pro</span>
                                </li>
                                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                    <ShieldCheck size={18} className="text-green-500" />
                                    <span>Slack Secure</span>
                                </li>
                                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                    <Layers size={18} className="text-purple-500" />
                                    <span>Slack Teams</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>

                <li className='font-semibold cursor-pointer'>Enterprise</li>
                <li className='font-semibold cursor-pointer'>Resources</li>
                <li className='font-semibold cursor-pointer'>Prices</li>
            </ul>
            <ul className='flex items-center gap-5'>
                <li className='cursor-pointer'><Search /></li>
                <li className='font-semibold cursor-pointer'>Sign In</li>
                <li className='border-2 border-[#642067] text-[#642067] p-2 hover:text-white hover:bg-[#642067] font-semibold cursor-pointer'>TALK TO SALES</li>
                <li className='bg-[#642067] text-white p-2 font-semibold border-2 border-[#642067] hover:bg-transparent hover:text-[#642067] cursor-pointer'>TRY FOR FREE</li>
            </ul>
        </header>
    )
}

export default Navbar
