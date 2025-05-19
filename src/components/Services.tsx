import { Code, Laptop, Rocket, Search } from "lucide-react";
import Copy from "./Copy";

export default function Services() {
  return (
    <div className="wrapper py-24">
      <Copy>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center">
          Services
        </h2>
      </Copy>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-6 gap-6">
        {/* Custom Website Development */}
        <div className="lg:col-span-2 lg:row-span-6 rounded-xl p-8 bg-neutral-50">
          <div className="h-full flex flex-col">
            <span className="p-2 bg-primary-100 rounded-xl mb-4 w-12 h-12 flex items-center justify-center">
              <Code className="text-primary-500" />
            </span>
            <Copy            >
              <h3 className="text-2xl font-semibold mb-2">
                Custom Website Development
              </h3>
              <p className="text-gray-600 flex-grow leading-relaxed">
                Tailored websites built from the ground up to match brand goals and business needs. From portfolios to e-commerce, each site is crafted with performance, design, and scalability in mind.
              </p>
            </Copy>
          </div>
        </div>

        {/* Custom Software Development */}
        <div className="lg:col-span-4 lg:row-span-3 rounded-xl p-8 duration-300 bg-neutral-50">
          <span className="p-2 bg-primary-100 rounded-xl mb-4 w-12 h-12 flex items-center justify-center">
            <Laptop className="text-primary-500" />
          </span>
          <Copy
          >
            <h3 className="text-2xl font-semibold mb-2">
              Custom Software Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Software solutions designed to streamline operations, automate tasks, and improve workflows. Built with clean architecture and modern frameworks to support long-term growth.
            </p>
          </Copy>
        </div>

        {/* Landing Page Development */}
        <div className="lg:col-span-2 lg:row-span-3 rounded-xl p-8 duration-300 bg-neutral-50">
          <span className="p-2 bg-primary-100 rounded-xl mb-4 w-12 h-12 flex items-center justify-center">
            <Rocket className="text-primary-500" />
          </span>
          <Copy
          >
            <h3 className="text-2xl font-semibold mb-2">
              Landing Page Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              High-converting landing pages that speak clearly, load quickly, and move visitors to take action. Perfect for offers, launches, and lead capture.
            </p>
          </Copy>
        </div>

        {/* Website Audit and Redesign */}
        <div className="lg:col-span-2 lg:row-span-3 rounded-xl p-8 duration-300 bg-neutral-50">
          <span className="p-2 bg-primary-100 rounded-xl mb-4 w-12 h-12 flex items-center justify-center">
            <Search className="text-primary-500" />
          </span>
          <Copy
          >
            <h3 className="text-2xl font-semibold mb-2">
              Website Audit & Redesign
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A deep dive into what's working and what's not — followed by a strategic redesign focused on better UX, stronger messaging, and improved SEO performance.
            </p>
          </Copy>
        </div>
      </div>
    </div>
  );
}
