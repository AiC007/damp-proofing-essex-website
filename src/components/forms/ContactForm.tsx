"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  issue: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    issue: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setIsSubmitted(true);
    } catch {
      setError("Sorry, there was a problem sending your enquiry. Please call us on 01708 985 492.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-secondary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          Thank You for Your Enquiry
        </h3>
        <p className="text-neutral-600">
          We&apos;ve received your message and will be in touch within 24 hours to
          arrange your free survey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="07XXX XXXXXX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="label">
            Postcode <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            required
            value={formData.postcode}
            onChange={handleChange}
            className="input"
            placeholder="IG3 XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="issue" className="label">
          Type of Damp Issue <span className="text-red-500">*</span>
        </label>
        <select
          id="issue"
          name="issue"
          required
          value={formData.issue}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select an issue...</option>
          <option value="rising-damp">Rising Damp</option>
          <option value="penetrating-damp">Penetrating Damp</option>
          <option value="condensation">Condensation</option>
          <option value="basement">Basement/Cellar Damp</option>
          <option value="mould">Mould Problem</option>
          <option value="survey">General Damp Survey</option>
          <option value="other">Not Sure / Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Tell Us About Your Problem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="input resize-none"
          placeholder="Describe the damp issue you're experiencing, where it's located, and how long you've noticed it..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent btn-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Request Free Survey
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </>
        )}
      </button>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <p className="text-sm text-neutral-500 text-center">
        By submitting this form, you agree to be contacted about your enquiry.
        We respect your privacy and will never share your details.
      </p>
    </form>
  );
}
