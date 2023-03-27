// import React from "react";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-max bg-primary py-32 text-white" id="contact"
//     >
//       <div className="container mx-auto grid items-center md:justify-between">
//         <div className="pb-8">
//         <p className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
//             Contact
//           </p>
//           <p className="text-[25px] py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className=" flex justify-center items-center">
//           <form
//             method="POST"
//             className=" flex flex-col w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             ></textarea>

//             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react'

function Contact() {
  return (
    <>
    <section class="bg-primary dark:bg-gray-900" id='contact'>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="text-4xl font-bold mb-5 pb-2 mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-white">Submit the form below to get in touch with me</p>
      <form action="#" method="POST" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your email" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>
      </form>
  </div>
</section>
    </>
  )
}

export default Contact