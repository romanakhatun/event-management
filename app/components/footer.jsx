import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import FooterImage1 from "@/public/footer-1.jpg";
import FooterImage2 from "@/public/footer-2.jpg";
import FooterImage3 from "@/public/footer-3.jpg";
import FooterImage4 from "@/public/footer-4.jpg";
import DishEventLogo from "@/public/dishvent.png";

// Define links for easy mapping
const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Corporate Events", href: "/services/corporate" },
  { name: "Custom Menus", href: "/services/custom" },
  { name: "Wedding Catering", href: "/services/wedding" },
  { name: "Private Parties", href: "/services/private" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral text-base-content pt-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col xl:flex-row justify-center">
          <div className="flex flex-col md:flex-row">
            <Image
              className="w-[600px] h-[300px] max-w-full object-cover"
              src={FooterImage1}
              alt="Footer 1"
            />
            <Image
              className="w-[600px] h-[300px] max-w-full object-cover"
              src={FooterImage2}
              alt="Footer 2"
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <Image
              className="w-[600px] h-[300px] max-w-full object-cover"
              src={FooterImage3}
              alt="Footer 3"
            />
            <Image
              className="w-[600px] h-[300px] max-w-full object-cover"
              src={FooterImage4}
              alt="Footer 4"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 pb-10 border-b border-gray-700 mt-12">
          {/*Dishvent/Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <Image src={DishEventLogo} alt="LOGO" />
            <div className="space-y-3 text-sm text-gray-400 mt-4">
              <p>+76 (564) 764 52 54</p>
              <p>hello@dishvent.com</p>
              <p>Canada, Toronto, Avenue 3(B)</p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* Using <a> as a stand-in for Next.js Link */}
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1">
            <h3 className="footer-heading">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social*/}
          <div className="col-span-2 md:col-span-1">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive offers.
            </p>

            {/* Newsletter Form */}
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email..."
                className="input w-full bg-transparent border border-gray-600 text-white rounded-xl focus:border-primary placeholder-gray-500"
              />
              <button className="btn-secondary w-full h-auto py-3 cursor-pointer">
                Subscribe
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Policy Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-5 text-xs text-gray-400">
          <p className="order-2 md:order-1 mb-3 md:mb-0">
            &copy; Copyright {new Date().getFullYear()} Dishvent. All Rights
            Reserved.
          </p>
          <div className="order-1 md:order-2 flex gap-4 text-sm">
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
