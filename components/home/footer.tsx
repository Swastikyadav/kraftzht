import { contactInfo } from "@/lib/data";

function Footer() {
  return (
    <footer>
      <div className="px-8 md:px-28 py-28 flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="w-1/4">
          <h1 className="text-2xl">KRAFTz</h1>
          <br />
          <p className="text-base text-gray-500 leading-[1.5]">
            Empowering hotel and travel ecosystem to perform, grow, and lead.
          </p>
        </div>
        <div>
          <h4 className="text-xl">Services</h4>
          <br />
          <p className="text-base text-gray-500 leading-[1.5] py-1">
            Hospitality Services
          </p>
          <p className="text-base text-gray-500 leading-[1.5] py-1">
            Digital Marketing Solutions
          </p>
          <p className="text-base text-gray-500 leading-[1.5] py-1">
            Travel Experiences
          </p>
        </div>
        <div>
          <h4 className="text-xl">Contact</h4>
          <br />
          <p className="text-base text-gray-500 leading-[1.5] py-1">
            {contactInfo.phone_uae}
          </p>
          <p className="text-base text-gray-500 leading-[1.5] py-1">
            {contactInfo.email}
          </p>
          <p className="text-base text-gray-500 leading-[1.5] py-1">
            {contactInfo.address_uae}
          </p>
        </div>
        <div>
          <h4 className="text-xl">Get In Touch</h4>
          <br />
          <button className="bg-brand text-white rounded cursor-pointer p-3 my-4 w-full">
            Connect
          </button>
        </div>
      </div>
      <section className="px-8 md:px-28 py-6 border-t border-gray-300 text-gray-500">
        Copyright © 2025 KRAFTz. All rights reserved.
      </section>
    </footer>
  );
}

export default Footer;
