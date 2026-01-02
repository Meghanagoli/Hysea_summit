import React from "react";
import heroImg from "../../assets/expect_img.png";

const What_to_expect = () => {
  return (
    <div className="w-full mx-auto max-w-9xl bg-white overflow-hidden">
      <div className="flex flex-col md:flex-col lg:flex-row">
        {/* TEXT BLOCK */}
        <div
          className="
            w-full md:w-full lg:w-3/5
            px-8 md:px-12 py-16 lg:py-20 text-[#222]
            border-[6px] border-[#0530A8]
            order-2 md:order-2 lg:order-1
            md:[writing-mode:horizontal-tb]
            md:whitespace-normal
            md:break-normal
            md:text-left
          "
        >
          <h2
            className="
          text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0530A8]
          mb-3 md:mb-5

          "
          >
            WHAT TO EXPECT
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            The future is here, and it’s accelerating fast. Artificial
            intelligence isn’t evolving in isolation anymore. It’s converging
            with quantum computing, robotics, edge computing, synthetic data,
            autonomous systems, and next-gen cloud to transform how we live and
            work.
          </p>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            This isn’t just innovation, it’s reinvention. As digital
            transformation scales, organizations are moving beyond pilots to
            secure, responsible, and high-impact deployment.{" "}
            <span className="font-bold">
              Join the leaders shaping this new era
            </span>{" "}
            and discover how intelligence everywhere is powering smarter
            decisions, faster workflows, and bold strategies.
          </p>

          <ul className="list-disc ml-5 text-sm md:text-base leading-relaxed space-y-1 mb-4">
            <li>
              <span className="font-bold">Lead the Change:</span> Master
              adaptive leadership in a tech-driven world
            </li>
            <li>
              <span className="font-bold">Stay Secure:</span> Navigate cloud
              sovereignty and next-level cybersecurity
            </li>
            <li>
              <span className="font-bold">Innovate Responsibly:</span> Explore
              ethical AI and sustainable solutions
            </li>
            <li>
              <span className="font-bold">Future-Proof Your Workforce:</span>{" "}
              Build resilience and unlock human–AI collaboration
            </li>
          </ul>

          <p className="text-sm md:text-base leading-relaxed">
            Get ready for actionable insights, game-changing ideas, and a
            roadmap to competitive advantage.{" "}
            <span className="font-bold">Don’t just keep up, get ahead.</span>
          </p>
        </div>

        {/* IMAGE BLOCK */}
        <div
          className="
          lg:w-[50%]
            bg-cover bg-center
            order-1 md:order-1 lg:order-2 sm:order-1

            /* Increased height for mobile and tablet */
            h-[360px] sm:h-[420px] md:h-[480px] lg:h-auto
          "
          style={{
            backgroundImage: `url(${heroImg})`,
            boxShadow: "-10px 4px 34px 20px rgba(0, 0, 0, 0.30) inset",
          }}
        />
      </div>
    </div>
  );
};

export default What_to_expect;
