import Image from "next/image";
import Team from "@/public/images/team.jpg";

export default function Story() {
  return (
    <section className="relative">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs4-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fillRule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          ></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                Our story (so far)
              </h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image
                  className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]"
                  src={Team}
                  width={420}
                  height={280}
                  alt="Team"
                />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    We united over a shared vision of building a decentralized
                    platform that could address the challenges of Web2 and
                    unlock the full potential of blockchain technology. Ethereal
                    is not just for us; it's a product designed to help everyone
                    thrive in the Web3 ecosystem: from developers and creators
                    to users and investors.
                  </p>
                  <p>
                    Ethereal is a decentralized application (dApp) that connects
                    people around the fascinating world of blockchain and
                    cryptocurrency.{" "}
                    <strong className="text-slate-50 font-medium">
                      We believe in harnessing the power of decentralized
                      technology to elevate user experiences
                    </strong>
                    , revolutionizing how we interact with digital assets and
                    leaving a positive impact on the entire blockchain industry.
                  </p>
                  <p>
                    With Ethereal, you can explore the intricacies of smart
                    contracts, participate in decentralized finance (DeFi)
                    protocols, and engage with non-fungible tokens (NFTs). Our
                    goal is to create a decentralized hub for{" "}
                    <strong className="text-slate-50 font-medium">
                      knowledge sharing and collaborative innovation
                    </strong>
                    , making complex blockchain concepts more accessible and
                    easier to understand.
                  </p>
                  <p>
                    Contrary to common misconceptions, Ethereal isn't just
                    another cryptocurrency platform. It's rooted in the
                    fundamental principles of Web3, embracing concepts that are
                    reshaping the digital landscape. Vitalik Buterin, the
                    co-founder of{" "}
                    <a
                      className="text-purple-500 font-medium hover:underline"
                      href="#0"
                    >
                      Ethereum
                    </a>
                    , envisioned a world of decentralized applications, and
                    Ethereal is our contribution to this vision.
                  </p>
                  <p>
                    We thrive on the rapid innovations in blockchain technology,
                    constantly exploring new consensus mechanisms and layer 2
                    solutions. We're reimagining traditional financial services
                    through the lens of decentralization, excited by the myriad
                    possibilities to innovate. From decentralized identity
                    solutions to interoperable blockchain networks, we're at the
                    forefront of a digital revolution. Ethereal is our way of
                    addressing the limitations of centralized systems and
                    ushering in an era of true digital ownership, transparency,
                    and user empowerment in the ever-evolving Web3 landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
