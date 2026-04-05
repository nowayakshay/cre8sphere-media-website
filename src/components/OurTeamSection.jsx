import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Akshay Nair",
    role: "Founder",
    description:
      "Leads the vision behind Cre8sphere Media, building platforms that simplify technology and explore emerging digital trends.",
  },
  {
    name: "Ashwini Nair",
    role: "Director of Operations",
    description:
      "Oversees operations and ensures smooth execution across platforms and internal workflows.",
  },
  {
    name: "Ankita Srivastava",
    role: "Legal Advisor",
    description:
      "Manages legal and compliance aspects, ensuring transparency and responsible operations.",
  },
  {
    name: "Mayank Yadav",
    role: "Team Manager — GizmoGeek Hub & TechOrbis",
    description:
      "Handles platform-level coordination and execution across content and operations.",
  },
  {
    name: "Varun Polisetty",
    role: "Technical Content Strategist",
    description:
      "Focuses on content strategy and ensures clarity and accuracy across technical topics.",
  },
];

function OurTeamSection() {
  return (
    <section className="py-16 sm:py-20" id="our-team">
      <PageContainer>
        <SectionReveal>
          {/* Section header */}
          <div className="mb-12">
            <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
            <h2 className="text-[28px] font-bold tracking-tight text-black sm:text-[34px]">
              Our Team
            </h2>
            <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#6B7280] sm:text-[16px]">
              Cre8sphere Media is built by a passionate team focused on media,
              technology, and innovation.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.07 }}
                className="group border-t border-[#E5E7EB] py-8 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Hover tint strip */}
                <div className="pointer-events-none absolute -inset-x-3 -inset-y-1 rounded-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,128,128,0.04)]" />

                <div className="relative">
                  {/* Name */}
                  <h3 className="text-[17px] font-bold leading-snug tracking-tight text-black sm:text-[18px]">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#008080]">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-[14px] leading-[1.75] text-[#6B7280]">
                    {member.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default OurTeamSection;
