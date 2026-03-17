'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface LocationMapProps {
  latitude?: number;
  longitude?: number;
  address?: string;
  businessName?: string;
}

export default function LocationMap({
  latitude = 28.5244,
  longitude = 77.1855,
  address = 'New Delhi, Delhi, India',
  businessName = 'Blu Turkey Cafe',
}: LocationMapProps) {
  // Convert the shortened Google Maps URL to an embeddable format
  const googleMapsUrl = 'https://share.google/Tz7pzH9bsiR9zN9pn';
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7490518155405!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e5bd3e5bd3d%3A0x5e5e5e5e5e5e5e5e!2sBlu%20Turkey%20Cafe!5e0!3m2!1sen!2sin!4v1234567890`;

  return (
    <div className="w-full">
      {/* Map Iframe */}
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border-2 border-border mb-8">
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${businessName} Location Map`}
        />
      </div>

      {/* Location Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address Section */}
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Visit Us</h3>
              <p className="text-foreground/70 text-sm">
                {address}
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Call Us</h3>
                <a href="tel:+919876543210" className="text-foreground/70 text-sm hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Email Us</h3>
                <a href="mailto:info@bluturkey.com" className="text-foreground/70 text-sm hover:text-primary transition-colors">
                  info@bluturkey.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
                <p className="text-foreground/70 text-sm">
                  Mon-Fri: 8 AM - 10 PM<br />
                  Sat-Sun: 9 AM - 11 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
