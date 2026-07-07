import React from 'react';
import { SEO } from "../seo/SEO";
import { Phone, Mail, MapPin, Clock, Send, ShieldAlert, ExternalLink } from "lucide-react";

export function ContactPage() {
  // Encoded address link for native/external map redirection
  const mapsExternalUrl = "https://www.google.com/maps/search/?api=1&query=Texron+Power+Plant+Systems+V-17+2nd+C+main+2nd+stage+Peenya+Industrial+Estate+Bengaluru+Karnataka+560058";

  return (
    <div className="w-full bg-[#F5F5F5] font-sans">
      <SEO 
        title="Contact Texron Power | Turbine Services & Products - Bengaluru" 
        description="Get in touch with Texron Power Plant Systems in Bengaluru for turbine manufacturing, retrofit, overhauling, and power plant services. Call us or send an enquiry today." 
      />

      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[32px] md:text-[44px] font-bold leading-tight mb-4 text-white max-w-4xl">
            Let's Talk Turbines.
          </h1>
          <p className="text-white/80 text-[16px] md:text-[18px] max-w-3xl leading-relaxed">
            Whether you have a project in mind, a turbine in trouble, or just want to explore your options - we're here for it. Reach out directly or fill in the enquiry form and our engineering team will get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#E8EAED]">
            <h2 className="text-[#1E3A5F] text-[22px] md:text-[24px] font-semibold mb-6">Send an Enquiry</h2>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1.5">Full Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors text-[#1A2A3A]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1.5">Company Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors text-[#1A2A3A]" placeholder="Your Power Plant" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1.5">Email Address *</label>
                  <input type="email" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors text-[#1A2A3A]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors text-[#1A2A3A]" placeholder="+91 ..." />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1.5">Nature of Enquiry</label>
                <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors text-[#5A6B7D]">
                  <option>Products</option>
                  <option>Services</option>
                  <option>Spares</option>
                  <option>General</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1.5">Turbine Type / Plant Details</label>
                <input type="text" className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors text-[#1A2A3A]" placeholder="e.g. 15 MW Back Pressure / BHEL" />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1.5">Your Message *</label>
                <textarea rows={4} className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors resize-none text-[#1A2A3A]" placeholder="How can we help you?"></textarea>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full flex justify-center items-center gap-2 bg-[#1E3A5F] hover:bg-[#152a45] text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-sm">
                  <Send className="w-4 h-4" /> Send Enquiry
                </button>
                <p className="mt-3 text-[13px] text-[#5A6B7D] leading-relaxed text-left">
                  Are you an existing turbine service Bengaluru customer facing an emergency? Please call our 24/7 hotline directly.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6 flex flex-col w-full">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#E8EAED]">
              <h3 className="text-[#1E3A5F] text-[20px] font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Office Info */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">Our Office</h4>
                    <p className="text-[#5A6B7D] text-[14px] leading-relaxed mb-2">
                      V-17, 2nd 'C' main, 2nd stage<br />
                      Peenya Industrial Estate<br />
                      Bengaluru, Karnataka, India 560058
                    </p>
                    <a 
                      href={mapsExternalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-[12px] text-[#FF6B35] font-semibold hover:underline"
                    >
                      Open in Maps <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">Phone</h4>
                    <p className="text-[#5A6B7D] text-[14px] leading-relaxed">
                      Main: <a href="tel:+918904017774" className="hover:text-[#FF6B35] transition-colors font-medium">+91 89040 17774</a><br />
                      Alt: <a href="tel:+918904017775" className="hover:text-[#FF6B35] transition-colors font-medium">+91 89040 17775</a><br />
                      Mobile: <a href="tel:+916364829650" className="hover:text-[#FF6B35] transition-colors font-medium">+91 6364 829 650</a>
                    </p>
                  </div>
                </div>

                {/* Email Info */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div className="w-full text-[14px] text-[#5A6B7D]">
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-2">Email</h4>
                    
                    <div className="flex flex-col gap-1.5">
                      <p className="m-0 leading-normal">
                        <strong className="text-[#1A2A3A] font-bold">General: </strong>
                        <a href="mailto:info@texronpower.com" className="hover:text-[#FF6B35] transition-colors font-medium ml-1">
                          info@texronpower.com
                        </a>
                      </p>

                      <p className="m-0 leading-normal">
                        <strong className="text-[#1A2A3A] font-bold">Technical: </strong>
                        <a href="mailto:jagadish@texronpower.com" className="hover:text-[#FF6B35] transition-colors font-medium ml-1">
                          jagadish@texronpower.com
                        </a>
                      </p>

                      {/* FIXED: Removed duplicate 'Technical' label string, aligned to match indentation cleanly */}
                      <p className="m-0 leading-normal">
                        <span className="inline-block w-[73px]"></span>
                        <a href="mailto:stanley@texronpower.com" className="hover:text-[#FF6B35] transition-colors font-medium">
                          stanley@texronpower.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">Office Hours</h4>
                    <p className="text-[#5A6B7D] text-[14px] leading-relaxed">
                      Monday to Saturday: 8:30 AM – 5:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-[#1E3A5F] rounded-xl p-6 text-white flex items-start gap-4 shadow-md">
               <ShieldAlert className="w-8 h-8 text-[#FF6B35] shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-semibold text-[16px] mb-1.5 text-white">24/7 Emergency Support</h4>
                  <p className="text-[13px] text-white/80 leading-relaxed mb-4">
                    If you are experiencing an unplanned trip or severe turbine fault, bypass the form and call us directly.
                  </p>
                  <a href="tel:+918904017774" className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white font-semibold py-2 px-5 rounded text-[13px] transition-colors shadow-sm">
                     Emergency Line
                  </a>
               </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-12 bg-white p-2 rounded-xl shadow-sm border border-[#E8EAED] w-full h-[400px] overflow-hidden relative mt-4">
             <iframe 
                src="https://maps.google.com/maps?q=Texron%20Power%20Plant%20Systems%20V-17%202nd%20C%20main%202nd%20stage%20Peenya%20Industrial%20Estate%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Texron Power Plant Systems Location Map"
             ></iframe>
          </div>

        </div>
      </section>

      {/* JSON-LD Schema Script Injection for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Texron Power Plant Systems",
            "image": "https://texronpower.com/logo.png",
            "@id": "https://texronpower.com",
            "url": "https://texronpower.com",
            "telephone": "+918904017774",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "V-17, 2nd 'C' main, 2nd stage, Peenya Industrial Estate",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:30",
              "closes": "17:30"
            }
          })
        }}
      />
    </div>
  );
}