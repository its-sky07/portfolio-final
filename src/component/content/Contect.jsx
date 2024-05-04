import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
   
    const sendEmail = (e) => {
        e.preventDefault();
    

        emailjs
            .sendForm('service_cwb3w2x', 'template_avq21a4', form.current, {
                publicKey: 'MLSzks_4Aw1dVZuDT',
            })
            .then(
                () => {
                    alert("send succesfully");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div class="max-w-md mx-auto bg-white mt-24 p-8 rounded-md shadow-md">
            
            <h2 class="text-2xl font-semibold text-center mb-4">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}  class="space-y-4">
                <div>
                    <label for="user_name" class="block text-gray-700 font-semibold">Name <span className='text-red-700'>*</span></label>
                    <input type="text" id="user_name" required name="from_name"
                        class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label for="user_email" class="block text-gray-700 font-semibold">Email<span className='text-red-700'>*</span></label>
                    <input type="email" id="user_email" required name="from_email"
                        class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label for="message" class="block text-gray-700 font-semibold">Message<span className='text-red-700'>*</span></label>
                    <textarea id="message" required name="message" rows="4"
                        class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"></textarea>
                </div>
                <div>
                    <button type="submit"
                        class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Send</button>
                </div>
            </form>
        </div>
    );
};