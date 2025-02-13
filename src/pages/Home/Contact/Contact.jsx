import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex-1 w-10/12 mx-auto shadow-lg rounded-lg p-8 bg-neutral-900 mb-9">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <ul className="space-y-6">
          {/* Email */}
          <li className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <div>
              <p className="text-lg font-medium">Email</p>
              <p className="text-gray-600">apuroy2785@gmail.com</p>
            </div>
          </li>
          {/* Phone */}
          <li className="flex items-center gap-4">
            <FaPhone className="text-green-500 text-2xl" />
            <div>
              <p className="text-lg font-medium">Phone</p>
              <p className="text-gray-600">01786209895</p>
            </div>
          </li>
          {/* WhatsApp */}
          <li className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <div>
              <p className="text-lg font-medium">WhatsApp</p>
              <p className="text-gray-600">01786209895</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
