import React, { useState } from 'react';

interface PhoneVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (email: string, phoneNumber: string) => void;
  selectedPackage: string;
  error: string;
}

export function PhoneVerificationModal({ isOpen, onClose, onVerify, selectedPackage, error }: PhoneVerificationModalProps) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationError, setValidationError] = useState('');

  const validatePhoneNumber = (phone: string) => {
    // Basic US phone number validation (XXX) XXX-XXXX or XXXXXXXXXX
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!email && !phoneNumber) {
      setValidationError('Please enter both email and phone number');
      return;
    }

    if (!email) {
      setValidationError('Please enter your email address');
      return;
    }

    if (!phoneNumber) {
      setValidationError('Please enter your phone number');
      return;
    }

    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setValidationError('Please enter a valid phone number (e.g., (123) 456-7890 or 1234567890)');
      return;
    }

    // Format phone number to consistent format (remove any non-digits)
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    onVerify(email, formattedPhone);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-600 mb-6">
          To proceed with booking the {selectedPackage} package, please enter your contact information.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidationError('');
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setValidationError('');
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="(123) 456-7890"
            />
            <p className="text-gray-500 text-sm mt-1">Format: (123) 456-7890 or 1234567890</p>
          </div>
          {(validationError || error) && (
            <p className="text-red-500 text-sm">{validationError || error}</p>
          )}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}