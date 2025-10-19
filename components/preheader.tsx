import { PhoneCallIcon, MailIcon, MapPinIcon } from "lucide-react";

import { contactInfo } from "@/lib/data";

function PreHeader() {
  return (
    <section className="px-12 md:px-28 py-3 text-sm text-gray-500 hidden md:flex flex-col md:flex-row gap-2 justify-between items-center border-b">
      <div className="flex gap-4 items-center">
        <p className="flex gap-2 items-center">
          <PhoneCallIcon size={16} /> {contactInfo.phone_uae}
        </p>
        <p className="flex gap-2 items-center">
          <MailIcon size={16} /> {contactInfo.email}
        </p>
      </div>
      <p className="flex gap-2 items-center">
        <MapPinIcon size={16} /> {contactInfo.address_uae}
      </p>
    </section>
  );
}

export default PreHeader;
