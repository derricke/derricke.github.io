import React from 'react';
import ContactMap from '@/components/ContactMap'; // Import the new client component

export default function ContactPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h3 className="text-2xl font-semibold text-center mb-4">Don’t hesitate to reach out!</h3>
      
      {/* - Changed from 'grid' to 'flex' to control stacking order on mobile.
        - 'flex-col-reverse' stacks the form below the map on mobile screens.
        - 'md:flex-row' makes it a two-column layout on medium screens and up.
      */}
      <div className="flex flex-col-reverse md:flex-row gap-8">
        
        {/* Left Column for Contact Form */}
        <div className="w-full md:w-5/12">
          <div className="h-[821px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfbOtPTuB60eO9PTivqZkWJ_o6C1r1BcXLbdChIvIqgq5hqXA/viewform?embedded=true" 
              className="w-full h-full"
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Right Column for the Map and contact info */}
        <div className="w-full md:w-7/12">
          <div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <ContactMap />
            </div>
          </div>
          
          {/* Contact Information Section */}
          <div className="mt-8">
            
            <p className="text-gray-600 mb-4">
              Derrick Emery currently lives and works in The Woodlands, Texas. For any questions, work or partnership requests please feel free to get in touch.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Phone:</strong> +1 936.931.7467</p>
              <p><strong>Email:</strong> derrick@derrickemery.com</p>
              <p><strong>Skype:</strong> derrick.emery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
