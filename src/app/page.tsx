import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skillCategories, skills } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header Section - Photo + Infos */}
      <Section id="home" className="pt-20 pb-12">
        <div className="flex flex-col items-center text-center">
          {/* Photo de profil ronde */}
          <div className="relative w-32 h-32 mb-6">
            <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
              <Image
                src="/images/profile/avatar.jpg"
                alt="Photo de profil"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Nom et titre */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lïam Augu</h1>
          <p
            className="text-lg text-gray-600 mb-6
"
          >
            Développeur Full-Stack
          </p>

          {/* Bouton CV */}
          <Link
            href="/cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Télécharger mon CV
          </Link>
        </div>
      </Section>

      {/* À propos - Version simple */}
      <Section id="about" title="À propos">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Développeur Full-Stack passionné par la création
              d&apos;applications web modernes et performantes. Je me spécialise
              dans l&apos;écosystème JavaScript/TypeScript avec React, Next.js
              et Node.js. J&apos;aime créer des expériences utilisateur fluides
              et des solutions techniques élégantes.
            </p>
          </div>
        </div>
      </Section>

      {/* Projets - Grille compacte */}
      <Section id="projects" title="Projets">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Compétences - Design sobre et compact */}
      <Section id="skills" title="Compétences">
        {skillCategories.map((category) => (
          <div key={category} className="mb-8 last:mb-0">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillBadge key={skill.id} skill={skill} />
                ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Expérience */}
      <Section id="experience" title="Expérience">
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </Section>

      {/* Contact - Version simple */}
      <Section id="contact" title="Contact">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Envoyer le message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Ou par email directement :
              </p>
              <a
                href="mailto:contact@example.com"
                className="text-gray-900 hover:text-gray-700 font-medium"
              >
                contact@example.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
