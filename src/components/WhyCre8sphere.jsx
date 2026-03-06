import { motion } from "framer-motion";
import { Compass, Globe2 } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const keyPoints = [
  {
    title: "Future-Focused Perspective",
    description:
      "We explore technologies that are shaping tomorrow from artificial intelligence and emerging innovation to electric mobility and digital ecosystems."
  },
  {
    title: "Simplifying Complex Technology",
    description:
      "Our goal is to break down complex topics and make them clear, practical, and engaging for everyday audiences."
  },
  {
    title: "Platform-Driven Media",
    description:
      "Cre8sphere Media is building a network of digital platforms focused on different areas of technology, innovation, and creative media."
  },
  {
    title: "Innovation Through Media",
    description:
      "By combining storytelling with technology insights, we aim to create meaningful digital experiences that inform, inspire, and connect communities."
  }
];

function WhyCre8sphere() {
  return (
    <section className="bg-gray-50/70 py-20">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer px-7 py-9 sm:px-10 sm:py-12">
            <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              <Compass className="h-7 w-7 text-brand-accent" />
              Why Cre8sphere Media
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
              Cre8sphere Media is more than just a media platform. It is a growing digital
              ecosystem focused on exploring the technologies shaping the future. By
              combining media, innovation, and creativity, Cre8sphere Media aims to simplify
              complex technological ideas and make them meaningful for modern audiences.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
              Our platforms and initiatives are built around curiosity, exploration, and
              the belief that technology should be understandable, accessible, and
              inspiring.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {keyPoints.map((point, index) => (
                <motion.article
                  key={point.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.24 }}
                  className={`elevate-card rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl ${
                    index === 0 || index === 3 ? "feature-tile" : "gradient-card"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-brand-accent">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                    {point.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <p className="mt-10 text-base font-medium leading-7 text-slate-800 sm:text-lg">
              At Cre8sphere Media, we believe the future of technology should not only be
              built - it should also be understood.
            </p>

            <div className="gradient-card mt-8 p-6 sm:p-8">
              <h3 className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                <Globe2 className="h-6 w-6 text-brand-accent" />
                Exploring Tomorrow&apos;s Technology Today
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                Cre8sphere Media exists to explore innovation, amplify meaningful ideas, and
                create platforms that help people understand the technologies shaping the
                future.
              </p>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhyCre8sphere;









