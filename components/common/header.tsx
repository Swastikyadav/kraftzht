import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDownIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  PhoneCallIcon,
} from "lucide-react";

import { contactInfo } from "@/lib/data";
import Link from "next/link";

function Header() {
  return (
    <header className="px-8 md:px-28 py-6 flex justify-between items-center border-b sticky top-0 bg-white z-50">
      <Link href="/">
        <h1 className="text-2xl">KRAFTz</h1>
      </Link>

      <nav className="hidden md:flex gap-4 text-gray-500">
        <Link href="/">
          <p className="hover:text-brand">Home</p>
        </Link>
        <Popover>
          <PopoverTrigger className="hover:text-brand flex gap-2 items-center cursor-pointer">
            Services <ChevronDownIcon size={16} />
          </PopoverTrigger>
          <PopoverContent>
            <Link href="/services/hospitality">
              <p className="text-base text-gray-500 leading-[1.5] py-1 hover:text-brand">
                Hospitality Services
              </p>
            </Link>
            <Link href="/services/digital-marketing">
              <p className="text-base text-gray-500 leading-[1.5] py-1 hover:text-brand">
                Digital Marketing Solutions
              </p>
            </Link>
            <Link href="/services/travel">
              <p className="text-base text-gray-500 leading-[1.5] py-1 hover:text-brand">
                Travel Experiences
              </p>
            </Link>
          </PopoverContent>
        </Popover>
        <Link href="/about">
          <p className="hover:text-brand">About</p>
        </Link>
        <Link href="/services/travel">
          <p className="hover:text-brand">Travel</p>
        </Link>
        <Link href="/contacts">
          <p className="hover:text-brand">Contact</p>
        </Link>
      </nav>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon
              size={36}
              className="block md:hidden bg-brand text-white rounded p-2 cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="py-2 dark text-gray-300 overflow-y-scroll">
            <SheetHeader>
              <SheetTitle>
                <h1 className="text-2xl">KRAFTz</h1>
              </SheetTitle>
              <SheetDescription className="py-2 text-base text-gray-300">
                At KRAFTz, we provide end-to-end hospitality and travel
                solutions, all designed elevate performance and accelerate
                growth.
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-6 md:hidden px-5 text-2xl">
              <Link href="/">
                <h4 className="border-b border-gray-600 hover:text-brand">
                  Home
                </h4>
              </Link>
              <div className="border-b border-gray-600">
                <h4 className="hover:text-brand">Services</h4>
                <div className="px-4">
                  <Link href="/services/hospitality">
                    <p className="text-base text-gray-500 leading-[1.5] py-1 hover:text-brand">
                      Hospitality Services
                    </p>
                  </Link>
                  <Link href="/services/digital-marketing">
                    <p className="text-base text-gray-500 leading-[1.5] py-1 hover:text-brand">
                      Digital Marketing Solutions
                    </p>
                  </Link>
                  <Link href="/services/travel">
                    <p className="text-base text-gray-500 leading-[1.5] py-1 hover:text-brand">
                      Travel Experiences
                    </p>
                  </Link>
                </div>
              </div>
              <Link href="/about">
                <h4 className="border-b border-gray-600 hover:text-brand">
                  About
                </h4>
              </Link>
              <Link href="/services/travel">
                <h4 className="border-b border-gray-600 hover:text-brand">
                  Travel
                </h4>
              </Link>
              <Link href="/contacts">
                <h4 className="border-b border-gray-600 hover:text-brand">
                  Contact
                </h4>
              </Link>
            </nav>

            <div className="px-5 py-6 flex flex-col gap-4">
              <div>
                <h4 className="text-2xl">Phone</h4>
                <span className="flex gap-2 items-center">
                  <PhoneCallIcon size={16} /> {contactInfo.phone_uae}
                </span>
              </div>
              <div>
                <h4 className="text-2xl">Email</h4>
                <span className="flex gap-2 items-center">
                  <MailIcon size={16} /> {contactInfo.email}
                </span>
              </div>
              <div>
                <h4 className="text-2xl">Address</h4>
                <span className="flex gap-2 items-center">
                  <MapPinIcon size={16} /> {contactInfo.address_uae}
                </span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
