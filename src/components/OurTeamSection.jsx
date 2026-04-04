import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Akshay Nair",
    role: "Founder",
    description:
      "Leads the vision behind Cre8sphere Media, building platforms that simplify technology and explore emerging digital trends."
  },
  {
    name: "Ashwini",
    role: "Director of Operations",
    description:
      "Oversees operations and ensures smooth execution across platforms and internal workflows."
  },
  {
    name: "Ankita",
    role: "Legal Advisor",
    description:
      "Manages legal and compliance aspects, ensuring transparency and responsible operations."
  },
  {
    name: "Mayank",
    role: "Team Manager (GizmoGeek Hub & TechOrbis)",
    description:
      "Handles platform-level coordination and execution across content and operations."
  },
  {
    name: "Varun",
    role: "Technical Content Strategist",
    description:
      "Focuses on content strategy and ensures clarity and accuracy across technical topics."
  }
];

function OurTeamSection() {
  return (
    <section className="pb-16 sm:pb-20" id="our-team">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer p-8">
            <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Cre8sphere Media is built by a passionate team focused on media, technology, and innovation.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
                  className="surface-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {member.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default OurTeamSection;
