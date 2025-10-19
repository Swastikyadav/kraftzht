import { PhoneCallIcon, MailIcon, MapPinIcon } from "lucide-react";

function PreHeader() {
  return (
    <section className="px-12 md:px-28 py-3 text-sm text-gray-500 hidden md:flex flex-col md:flex-row gap-2 justify-between items-center border-b">
      <div className="flex gap-4 items-center">
        <p className="flex gap-2 items-center">
          <PhoneCallIcon size={16} /> +91 1230550199
        </p>
        <p className="flex gap-2 items-center">
          <MailIcon size={16} /> moonlit@gmail.com
        </p>
      </div>
      <p className="flex gap-2 items-center">
        <MapPinIcon size={16} /> 280 Augusta Avenue, M5T 2L9 Toronto, Canada
      </p>
    </section>
  );
}

export default PreHeader;
