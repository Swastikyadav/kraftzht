function ContactForm({
  isContactPage = false,
  formTitle = "Get In Touch",
}: {
  isContactPage?: boolean;
  formTitle?: string;
}) {
  return (
    <div
      className={`w-full ${
        isContactPage ? "shadow-lg" : "md:w-5/12"
      } bg-white rounded-lg text-gray-800 p-12 text-center`}
    >
      <h4 className="text-3xl">{formTitle}</h4>
      <form className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-gray-200 rounded w-full p-3 my-4"
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="bg-gray-200 rounded w-full p-3 my-4"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="bg-gray-200 rounded w-full p-3 my-4"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="bg-gray-200 rounded w-full p-3 my-4"
        />

        <input
          type="submit"
          value="Send"
          className="bg-brand text-white rounded cursor-pointer w-full p-3 my-4"
        />
      </form>
    </div>
  );
}

export default ContactForm;
