import React from 'react'
import Image from 'next/image'

const companyLogos = [
    { name: 'Fox', src: '/fox-logo.png' },
    { name: 'Lonely Planet', src: '/Lonely_Planet.png' },
    { name: 'Intuit', src: '/Intuit_Logo.png' },
    { name: 'Cavanna', src: '/carvana-logo.png' },
    { name: 'Kiva', src: '/Kiva-logo.png' },
    { name: 'Target Small', src: '/logo-target-small.png' },
    { name: 'Google', src: '/google-logo.png' },
    { name: 'OpenAI', src: '/logo-openai.png' }
]

const Companies = () => {
    return (
        <div className="lg:flex justify-center gap-8 my-10 hidden">
            {companyLogos.map((company, index) => (
                <div 
                    key={index} 
                    className="px-4 rounded-md transition-all duration-300 hover:bg-transparent hover:shadow-md"
                >
                    <Image 
                        src={company.src} 
                        alt={company.name} 
                        width={80} 
                        height={80} 
                        className="w-20 h-20 object-contain"
                    />
                </div>
            ))}
        </div>
    )
}

export default Companies
