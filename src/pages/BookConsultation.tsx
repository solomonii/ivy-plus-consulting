import React from "react";

const BookConsultation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 px-8 text-center border-b border-gray-200">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-lg text-gray-600 mb-8">
              We love our customers, so feel free to visit during normal
              business hours.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Ivy+ Consulting</h2>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                1270 Broadway #808, New York, NY 10001
              </p>
              <p className="text-gray-600">(212) 884-3705</p>
              <p className="text-gray-600">info@ivy-plus.com</p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700">Open today 09:00 am – 06:00 pm</p>
              </div>
            </div>

            <button className="bg-white text-black border-2 border-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition-colors duration-200">
              DROP US A LINE!
            </button>
          </div>

          {/* Right Column - Map */}
          <div className="h-96 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6090049242944!2d-73.99054098828766!3d40.74862827126872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25985c8c22d19%3A0x13834c419e76b32f!2sIvyPlus%20Consulting!5e0!3m2!1sen!2sus!4v1749928531227!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
