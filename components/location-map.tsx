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
  address = 'Ground Floor, of Amara Hotel, C-30, Blu Turkey Cafe, Greater Kailash I, New Delhi, Delhi 110048',
  businessName = 'Blu Turkey Cafe',
}: LocationMapProps) {
  const googleMapsUrl = 'https://maps.app.goo.gl/gpTadszLu4q26g6X7';
  // Embed using address so map and "Open In Maps" point to correct location
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="w-full">
      {/* Map Iframe */}
      <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg border-2 border-border mb-8">
        {/* Open In Maps button - overlay so it always uses our link */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg shadow-lg font-medium text-foreground hover:bg-gray-50 transition-colors text-sm"
          aria-label="Open in Google Maps"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Open In Maps
        </a>
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
                <a href="tel:+919971124279" className="text-foreground/70 text-sm hover:text-primary transition-colors">
                  099711 24279
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Email Us</h3>
                <a href="mailto:bluturkeycafe@gmail.com" className="text-foreground/70 text-sm hover:text-primary transition-colors">
                  bluturkeycafe@gmail.com
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
                  Mon - Sun 9:30 AM - 11 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
