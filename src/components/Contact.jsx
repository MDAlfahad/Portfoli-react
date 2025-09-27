import React from 'react';

// --- SVG Icons for Input Fields ---
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const MessageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-5 text-gray-400">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);


const Contact = () => {
  return (
    <div className='min-h-screen bg-[#F0FBF1] flex items-center justify-center'>
        <div className='w-full mx-auto bg-[#F0FBF1] overflow-hidden md:flex'>
            {/* Info Section */}
            <div className='w-full md:w-1/2 bg-gradient-to-br from-[#829873] to-[#6a8259] sm:p-12 text-white flex flex-col justify-center'>
                <h2 className='text-3xl lg:text-4xl font-bold mb-4'>Get in Touch</h2>
                <p className='text-gray-200 leading-relaxed mb-8'>
                    Have a question  in mind? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.
                </p>
                <div className='space-y-4'>
                    <p className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                        Raipur, Chhattisgarh, India
                    </p>
                     <p className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        +918305499762
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className='w-full md:w-1/2 p-8 sm:p-12'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center'>Contact Me</h1>
                <form className="flex flex-col gap-6">
                    <div className='relative'>
                        <UserIcon />
                        <input className='border-b-2 px-10 py-3 w-full outline-none focus:border-[#829873] transition-colors duration-300 bg-transparent' type="text" placeholder='Your Name' required />
                    </div>
                     <div className='relative'>
                        <MailIcon />
                        <input className='border-b-2 px-10 py-3 w-full outline-none focus:border-[#829873] transition-colors duration-300 bg-transparent' type="email" placeholder='Your Email' required />
                    </div>
                     <div className='relative'>
                        <MessageIcon />
                        <textarea className='border-b-2 px-10 py-3 w-full min-h-[120px] max-h-[20rem] outline-none focus:border-[#829873] transition-colors duration-300 bg-transparent' name="message" id="message" placeholder='Your Message' required></textarea>
                    </div>
                    <button type='submit' className='w-full px-6 py-3 mt-4 rounded-lg bg-[#829873] text-white font-semibold hover:bg-[#FFC60A] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;

