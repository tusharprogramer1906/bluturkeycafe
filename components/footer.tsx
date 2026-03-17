import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import InstagramFollowSection from '@/components/InstagramFollowSection';

export default function Footer() {
  return (
    <>
      <InstagramFollowSection />
      <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Blu Turkey Cafe</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Premium specialty coffee destination in Delhi. Experience exceptional coffee blends, cozy ambiance, and perfect moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:opacity-75 transition-opacity">Menu</Link></li>
              <li><Link href="/cafe-gallery" className="hover:opacity-75 transition-opacity">Gallery</Link></li>
              <li><Link href="/about" className="hover:opacity-75 transition-opacity">About Us</Link></li>
              <li><Link href="/contact" className="hover:opacity-75 transition-opacity">Contact</Link></li>
              <li><Link href="/blog" className="hover:opacity-75 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 8 AM - 10 PM</p>
                  <p>Sat - Sun: 9 AM - 11 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:opacity-75 transition-opacity">+91 123 456 7890</a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@bluturkey.com" className="hover:opacity-75 transition-opacity">info@bluturkey.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; 2024 Blu Turkey Cafe. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:opacity-75 transition-opacity">Privacy Policy</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
