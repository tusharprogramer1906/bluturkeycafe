import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, IndianRupee } from 'lucide-react';
import InstagramFollowSection from '@/components/InstagramFollowSection';

export default function Footer() {
  return (
    <>
      <InstagramFollowSection />
      <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        {/* Business Info Block */}
        <div className="mb-10 p-6 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
          <h3 className="text-lg font-bold mb-3">Blu Turkey Cafe</h3>
          <div className="flex flex-col gap-2 text-sm opacity-90">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="flex-shrink-0" />
              Greater Kailash I, New Delhi
            </span>
            <span className="flex items-center gap-2">
              <Star size={16} className="flex-shrink-0 fill-amber-400 text-amber-400" />
              4.9 Google Rating
            </span>
            <span className="flex items-center gap-2">
              <IndianRupee size={16} className="flex-shrink-0" />
              ₹400–₹600 • Cafe
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">About</h4>
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
                <span>Greater Kailash I, New Delhi 110048</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+919971124279" className="hover:opacity-75 transition-opacity">099711 24279</a>
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
            <p>&copy; 2026 Blu Turkey Cafe. All rights reserved.</p>
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
