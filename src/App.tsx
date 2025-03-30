import React from 'react';
import { Phone, Mail, Facebook, Instagram, Clock, Check, Car, MapPin } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function App() {
  const handleBookNow = (packageName: string) => {
    window.location.href = 'https://book.cdkautospa.com';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={18} />
            <a href="tel:+14046410961" className="text-sm">1 (404) 641-0961</a>
            <Mail size={18} />
            <a href="mailto:cdkautospa@gmail.com" className="text-sm">business@cdkautospa.com</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="assets/CDK logo.png" alt="CDK Auto Spa" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-800 hover:text-primary">Home</a>
              <a href="#services" className="text-gray-800 hover:text-primary">Services</a>
              <a href="#pricing" className="text-gray-800 hover:text-primary">Pricing</a>
              <a href="#gallery" className="text-gray-800 hover:text-primary">Gallery</a>
              <a href="#contact" className="text-gray-800 hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="assets/cdk_hero_video (720p).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Professional Auto Detailing Services</h1>
            <p className="text-xl mb-8">Experience the finest car detailing services in town. We treat your vehicle with the care it deserves.</p>
            <button 
              onClick={() => handleBookNow('Express Refresh')}
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/80 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Interior Detailing",
                description: "Our interior detailing service includes a thorough cleaning of all interior surfaces, including leather cleaning and conditioning, carpet and upholstery shampooing, and cleaning of all panels, dashboard, and console areas.",
                image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Exterior Detailing",
                description: "Our exterior detailing includes a thorough wash and dry, clay bar treatment to remove contaminants, polishing to remove light scratches and swirl marks, and paint sealant or wax application for protection.",
                image: "https://images.unsplash.com/photo-1600045972606-a8561c5ff6d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Paint Correction",
                description: "Our paint correction service removes scratches, swirl marks, and other imperfections from your vehicle's paint, restoring its original shine and luster.",
                image: "https://images.unsplash.com/photo-1619927228268-552be4e72b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Ceramic Coating",
                description: "Our ceramic coating service provides long-lasting protection for your vehicle's paint, with enhanced gloss and hydrophobic properties that make maintenance easier.",
                image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Paint Protection Film",
                description: "Our paint protection film (PPF) service provides the ultimate protection against rock chips, scratches, and other road debris, while maintaining the original look of your paint.",
                image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Maintenance Wash",
                description: "Our maintenance wash service helps maintain your vehicle's appearance between full details, including a thorough exterior wash, wheel cleaning, and interior vacuum.",
                image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Packages</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Choose the perfect detailing package for your vehicle. All packages include our signature attention to detail and premium products.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Express Refresh",
                price: "160",
                time: "1.5 HOURS",
                description: "Quick and effective refresh",
                features: [
                  "Wipe & Clean All Surfaces",
                  "Vacuum Interior",
                  "Clean Windows & Mirrors",
                  "Clean Floor Mats & Carpets",
                  "Air Freshener Treatment",
                  "Detail Trunk",
                  "Professional Hand Wash",
                  "Clean & Wash Wheel Wells",
                  "Detail Rim Faces & Tires",
                  "Dress Exterior Trim/Tires",
                  "Clean Door Jams",
                  "Wax Protection (30 Days)"
                ]
              },
              {
                name: "Spa Day Package",
                price: "250",
                time: "3 HOURS",
                description: "Most Popular Package",
                featured: true,
                features: [
                  "Wipe & Clean All Surfaces",
                  "Double Vacuum Interior",
                  "Steam Clean Full Interior",
                  "Clean Crevices, Vents, Cup Holders",
                  "Clean & Protect Plastic",
                  "Clean Windows & Mirrors",
                  "Leather Conditioner Treatment",
                  "Deep Clean Floor Mats & Carpets",
                  "Air Freshener Treatment",
                  "Detail Trunk",
                  "Professional Hand Wash",
                  "Paint Decontamination (Clay Bar)",
                  "Clean & Wash Wheel Wells",
                  "Detail Rim Faces & Tires",
                  "Dress Exterior Trim/Tires",
                  "Clean Door Jams",
                  "Clean Windows",
                  "Ceramic Sealant (6 Months)"
                ]
              },
              {
                name: "Royal Treatment",
                price: "375",
                time: "4 HOURS",
                description: "The ultimate care package",
                features: [
                  "Deep Clean All Surfaces",
                  "Double Vacuum Interior",
                  "Shampoo Carpets & Seats",
                  "Steam Clean Full Interior",
                  "Clean Crevices, Vents, Cup Holders",
                  "Clean & Protect Plastic",
                  "Leather Conditioner Treatment",
                  "Clean Windows & Mirrors",
                  "Deep Clean Floor Mats & Carpets",
                  "Air Freshener Treatment",
                  "Detail Trunk",
                  "Premium One Step Polish & Sealant",
                  "Professional Hand Wash",
                  "Paint Decontamination (Clay Bar)",
                  "Detail Rim Faces & Tires",
                  "Clean & Wash Wheel Wells",
                  "Dress Exterior Trim/Tires",
                  "Clean Door Jams",
                  "Detail Windows"
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className="relative">
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-lg font-bold shadow-lg z-10">
                    Most Popular
                  </div>
                )}
                <div 
                  className={`rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                    pkg.featured 
                      ? 'bg-primary text-white transform scale-105 shadow-xl' 
                      : 'bg-white text-gray-800 border border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-sm font-medium mr-2">Starts at</span>
                      <span className="text-4xl font-bold">${pkg.price}</span>
                    </div>
                    <p className={`mb-2 ${pkg.featured ? 'text-white/80' : 'text-gray-600'}`}>{pkg.time}</p>
                    <p className={pkg.featured ? 'text-white/80' : 'text-gray-600'}>{pkg.description}</p>
                    
                    <ul className="mt-6 space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check size={20} className={`mr-3 ${pkg.featured ? 'text-white/80' : 'text-primary'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => handleBookNow(pkg.name)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                        pkg.featured
                          ? 'bg-white text-primary hover:bg-gray-100'
                          : 'bg-primary text-white hover:bg-primary/80'
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Need a custom package? We've got you covered!</p>
            <button className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition duration-300">
              Contact for Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
          
          {/* Before/After Comparison Slider */}
          <div className="mb-12 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://images.unsplash.com/photo-1600045972606-a8561c5ff6d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Before"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="After"
                />
              }
              className="h-[500px]"
            />
            <div className="bg-white p-4 text-center">
              <p className="text-lg font-semibold text-gray-800">Slide to see the transformation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Luxury Car Detail",
                image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Interior Transformation",
                image: "https://images.unsplash.com/photo-1616544255080-d93a46c0bd22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Paint Correction",
                image: "https://images.unsplash.com/photo-1619927228268-552be4e72b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Ceramic Coating",
                image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Wheel Detail",
                image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Full Service Detail",
                image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <p>Atlanta, GA, USA</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <p>1 (404) 641-0961</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <p>cdkautospa@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-4" />
                  <p>Mon-Fri: 8am-6pm<br />Sat: 9am-4pm<br />Sun: Closed</p>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.webp" alt="CDK Auto Spa" className="h-8" />
              </div>
              <p className="text-gray-400">Professional auto detailing services that bring out the best in your vehicle.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CDK Auto Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;