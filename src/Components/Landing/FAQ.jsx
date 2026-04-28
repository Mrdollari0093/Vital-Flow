import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a comprehensive range of services designed to meet diverse healthcare needs. These include personalized consultations, preventative care programs, advanced diagnostic tools, and specialized treatments.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Booking an appointment is simple and convenient. You can use our online scheduling platform, which allows you to select a time slot that suits you best. Alternatively, you can call our dedicated support line, where a friendly team member will assist you.",
  },
  {
    question: "Are your services available 24/7?",
    answer:
      "Yes, we provide round-the-clock services to meet your needs. Our virtual consultation platform is accessible 24/7, allowing you to connect with healthcare professionals anytime. For in-person visits, our emergency care is always ready.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans to make healthcare accessible and affordable for everyone. Our team can assist you in understanding your coverage and submitting claims.",
  },
  {
    question: "What makes your care unique?",
    answer:
      "Our care stands out because of our commitment to personalized attention and patient satisfaction. We take the time to understand your specific needs and preferences, ensuring tailored solutions for optimal outcomes.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 ">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
          <p className="text-sm sm:text-base font-medium text-gray-700">
            FAQ's
          </p>
        </div>

        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mt-4">
          Frequently asked questions <br className="hidden sm:block" />
          for quick answers
        </h2>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className="border-b border-gray-200">
              
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 group"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>

                {/* PRO ICON */}
           <div className="relative w-9 h-9 flex items-center justify-center rounded-full bg-blue-500">

  {/* Rotating wrapper (THIS is the key) */}
  <div
    className={`relative w-4 h-4 transition-transform duration-500 ease-in-out transform-gpu ${
      isOpen ? "rotate-45" : "rotate-0"
    }`}
  >
    {/* Horizontal line */}
    <span className="absolute top-1/2 left-0 w-4 h-[2px] bg-white rounded -translate-y-1/2"></span>

    {/* Vertical line */}
    <span className="absolute left-1/2 top-0 h-4 w-[2px] bg-white rounded -translate-x-1/2"></span>
  </div>

</div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-500 leading-relaxed pb-4 pr-10">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default FAQSection;