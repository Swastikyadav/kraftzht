import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MailIcon, MapPinIcon, MenuIcon, PhoneCallIcon } from "lucide-react";

function Header() {
  return (
    <header className="px-12 md:px-28 py-6 flex justify-between items-center border-b sticky top-0">
      <h1 className="text-2xl">KRAFTz</h1>

      <nav className="hidden md:flex gap-4 text-gray-500">
        <p>Home</p>
        <p>Services</p>
        <p>About</p>
        <p>Travel</p>
        <p>Contact</p>
      </nav>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon
              size={36}
              className="block md:hidden bg-brand text-white rounded p-2 cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="py-2 dark text-gray-300">
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
              <h4 className="border-b border-gray-600">Home</h4>
              <h4 className="border-b border-gray-600">Services</h4>
              <h4 className="border-b border-gray-600">About</h4>
              <h4 className="border-b border-gray-600">Travel</h4>
              <h4 className="border-b border-gray-600">Contact</h4>
            </nav>

            <div className="px-5 py-6 flex flex-col gap-4">
              <div>
                <h4 className="text-2xl">Phone</h4>
                <span className="flex gap-2 items-center">
                  <PhoneCallIcon size={16} /> +91 1230550199
                </span>
              </div>
              <div>
                <h4 className="text-2xl">Email</h4>
                <span className="flex gap-2 items-center">
                  <MailIcon size={16} /> moonlit@gmail.com
                </span>
              </div>
              <div>
                <h4 className="text-2xl">Address</h4>
                <span className="flex gap-2 items-center">
                  <MapPinIcon size={16} /> 280 Augusta Avenue, M5T 2L9 Toronto
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
