"use client";

import { Map, Phone, Mail } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ContactUs() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!clientName) {
      toast.error("Name is required.");
      return;
    } else if (clientName.length < 2) {
      toast.error("Name must be at least 2 characters.");
      return;
    }

    if (!clientEmail) {
      toast.error("Email is required.");
      return;
    } else if (!isValidEmail(clientEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!clientMessage) {
      toast.error("Message is required.");
      return;
    } else if (clientMessage.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return;
    }

    setLoading(true);

    axios
      .post("/api/sendEmail", {
        clientName,
        clientEmail,
        clientMessage,
      })
      .then((response) => {
        toast.success("Message sent successfully!");
        setClientName("");
        setClientEmail("");
        setClientMessage("");
      })
      .catch((error) => toast.error(`Error: ${error.message}`))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <nav aria-label="breadcrumb" className="py-6 px-4 mx-auto w-full max-w-7xl">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-black font-medium" >
                  Home
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li aria-current="page" className="text-black">
                Guitars
              </li>
            </ol>
        </nav>
      </div>
      <div className="w-full bg-white">
        <section id="contact">
          <div className="mx-auto max-w-6xl px-4 py-24 lg:py-32">
            <div className="w-full grid md:grid-cols-2 gap-x-10">
              <div className="h-full pr-6">
                <div className="rounded-xl overflow-hidden">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Us</h2>
                  <p className="max-w-lg mt-6 mb-6">
                    Have something to say? We are here to help. Fill up the form or send an email or call.
                  </p>
                  <div className="flex items-center mt-8 space-x-2 text-dark-600">
                    <Map className="w-5 h-5" />
                    <span>14th Avenue, Glory Road</span>
                  </div>
                  <div className="flex items-center mt-2 space-x-2 text-dark-600">
                    <Phone className="w-5 h-5" />
                    <a href="mailto:hello@company.com">hello@company.com</a>
                  </div>
                  <div className="flex items-center mt-2 space-x-2 text-dark-600">
                    <Mail className="w-5 h-5" />
                    <a href="tel:11111111111">+51 11111111111</a>
                  </div>
                </div>
              </div>
              <div className="card h-fit max-w-6xl" id="form">
                <form id="contactForm" onSubmit={sendEmail}>
                  <div className="mb-6 mt-12 md:my-0">
                    <div className="mx-0 mb-2.5 md:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="border outline-none rounded-full w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0"
                      />
                    </div>
                    <div className="mx-0 mb-2.5 md:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="border outline-none rounded-full w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-2.5 md:mb-4">
                    <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea
                      id="message"
                      name="message"
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      cols="30"
                      rows="5"
                      placeholder="Your Message"
                      className="border outline-none rounded-3xl w-full bg-gray-100 text-gray-600 text-sm px-5 py-2 md:py-3 min-w-0"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-x-2 w-full bg-black text-white px-5 py-2.5 md:py-3 font-xl rounded-full sm:mb-0"
                      disabled={loading}
                    >
                      {loading && (
                        <svg
                          className="h-5 w-5 animate-spin stroke-white"
                          viewBox="0 0 256 256"
                        >
                          <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        </svg>
                      )}
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
