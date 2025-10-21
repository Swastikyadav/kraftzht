import Image from "next/image";
import ContactForm from "../home/contactform";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/lib/data";

function FormContainer() {
  return (
    <section className="px-8 md:px-28 py-28 text-center lg:text-start bg-white flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-12 lg:gap-4 border-b">
      <div className="w-full lg:w-1/2">
        {/* <Image
          src="https://moonlit-nextjs.netlify.app/assets/images/pages/contact.webp"
          width={543}
          height={471}
          alt="about"
          className="rounded-lg mx-auto lg:mx-0"
        /> */}
        <h6
          className={cn(
            // before content
            "before:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg)]",
            // after content
            "after:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg)]",
            // general
            "text-brand text-xl"
          )}
        >
          Contact Details
        </h6>
        <h2 className="my-8 text-4xl md:text-6xl">Get In Touch</h2>
        <p className="text-gray-500 leading-[1.5] text-lg">
          <span className="font-semibold">Email</span>: {contactInfo.email}
          <br />
          <br />
          <span className="font-semibold">UAE Phn No</span>:{" "}
          {contactInfo.phone_uae}
          <br />
          <br />
          <span className="font-semibold">India Phn No</span>:{" "}
          {contactInfo.phone_ind}
          <br />
          <br />
          <span className="font-semibold">UAE Address</span>:{" "}
          {contactInfo.address_uae}
          <br />
          <br />
          <span className="font-semibold">India Address</span>:{" "}
          {contactInfo.address_ind}
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <ContactForm isContactPage={true} formTitle="Send Your Query" />
      </div>
    </section>
  );
}

export default FormContainer;
