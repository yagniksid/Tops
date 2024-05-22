import React from 'react';
import appleLogo from "../../Image/applelogo.webp";
import googleLogo from "../../Image/googleplay.webp";
import faceLogo from "../../Image/facebook.svg";
import instaLogo from "../../Image/instagram.svg";
import twitterLogo from "../../Image/Twitter.svg";
import youtubeLogo from "../../Image/youtube.svg";
import whatsappLogo from "../../Image/whatsapp.svg";
import visa from "../../Image/visa.svg";
import mastercard from "../../Image/mastercard.svg";
import paypal from "../../Image/paypal.svg";
import americanexp from "../../Image/express.svg";
import dinnersClub from "../../Image/dinersclub.svg";
import rupay from "../../Image/rupay.svg";
import icici from "../../Image/icici.svg";
import axis from "../../Image/axisbank.svg";
import { Button } from 'reactstrap';
import { ChevronUp } from 'lucide-react';

const footerLinksData = [
    {
        title: 'CUSTOMER SERVICE',
        links: [
            'Payment Options',
            'Track Order',
            'Encircle Program',
            'Find A Store'
        ]
    },
    {
        title: 'CONTACT US',
        links: [
            '1800-266-0123',
            'customercare@titan.co.in',
            'Help & Contact',
            'FAQs'
        ]
    },
    {
        title: 'POLICIES',
        links: [
            'Brand Protection'
        ]
    },
    {
        title: 'ABOUT TITAN',
        links: [
            'Corporate',
            'Careers'
        ]
    }
];

export default function Footer() {
    return (
        <>
            <div className='px-16 bg-black text-white pt-5 mt-7 relative'>
                <div className='flex justify-between'>
                    <div className='grid grid-cols-4 gap-24'>
                        {footerLinksData.map((section, index) => (
                            <div key={index}>
                                <h6 role='button' className='pb-3'>{section.title}</h6>
                                {section.links.map((link, linkIndex) => (
                                    <p key={linkIndex} role='button' className='text-sm text-white font-normal hover:underline underline-offset-4'>{link}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div>
                        <h6>Download World Of Titan App</h6>
                        <div className='flex w-50 gap-3 pt-3'>
                            <img role='button' className='h-10' src={appleLogo} alt="" />
                            <img role='button' className='h-10' src={googleLogo} alt="" />
                        </div>
                        <div>
                            <h6 className='pt-4 pb-2'>Follow Us With</h6>
                            <div className='flex gap-2 pb-7'>
                                <img role='button' src={faceLogo} alt="" />
                                <img role='button' src={instaLogo} alt="" />
                                <img role='button' src={twitterLogo} alt="" />
                                <img role='button' src={youtubeLogo} alt="" />
                            </div>
                            <div className='flex items-center gap-2 pb-2'>
                                <h6>Want Help? <span role='button' className='underline underline-offset-2'>Click Here</span> To Chat With Us On</h6>
                                <img role='button' src={whatsappLogo} alt="" />
                            </div>
                            <h6 className='w-80'>Operating Hours: 10:00AM To 10:00PM Monday To Sunday</h6>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-300 opacity-15 pb-6"></div>
                <div className='flex items-center pt-4 pb-3 justify-between'>
                    <div className='flex gap-3 items-center'>
                        <img className="opacity-40" src={visa} alt="" />
                        <img className="opacity-40" src={mastercard} alt="" />
                        <img className="opacity-40" src={paypal} alt="" />
                        <img className="opacity-40" src={americanexp} alt="" />
                        <img className="opacity-40" src={dinnersClub} alt="" />
                        <img className="opacity-40" src={rupay} alt="" />
                        <img className="opacity-40" src={icici} alt="" />
                        <img className="opacity-40" src={axis} alt="" />
                    </div>
                    <div className='flex'>
                        <p className='text-xs text-white border-r  border-gray-300 px-2'>© 2023 Titan Company Limited. All Rights Reserved.</p>
                        <p role='button' className='text-xs text-white hover:underline underline-offset-4 border-r border-gray-300 px-2'>Terms & Conditions</p>
                        <p role='button' className='text-xs text-white hover:underline underline-offset-4 border-r border-gray-300 px-2'>Privacy Policy</p>
                        <p role='button' className='text-xs text-white hover:underline underline-offset-4 border-r border-gray-300 px-2'>Wearable Privacy Policy</p>
                    </div>

                </div>
                <div style={{ zIndex: "3" }} onClick={() => window.scrollTo(0, 0)} className='fixed right-10 bottom-10'>
                    <button className='h-[45px] w-[45px] flex justify-center items-center !rounded-full !bg-[#CA8A04] !border-none shadow-none'>
                        <ChevronUp />
                    </button>
                </div>
            </div>
        </>
    );
}
