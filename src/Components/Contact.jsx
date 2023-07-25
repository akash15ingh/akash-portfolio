import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-15 text-white px-4" id="contact">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to contact me?
          </h1>
          <p>
            Send an email to me at-aksingh888555@gmail.com OR
            singhak888@icloud.com.Attached below are my LinkedIn and GitHub.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 mx-auto md:mx-0 py-3 text-black">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
