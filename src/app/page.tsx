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
            <div className="relative w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-gray-100 dark:border-gray-800 shadow-lg overflow-hidden">
              <Image
                src="/images/profile/profilev1.jpg"
                alt="Photo de profil"
                sizes="128"
                fill
                className="object-cover rounded-full scale-97 "
              />
            </div>
          </div>

          {/* Nom et titre */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Lïam Augu
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Développeur Full-Stack
          </p>

          {/* Bouton CV */}
          <Link
            href="/cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
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
        <div className="mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Étudiant en 2ᵉ année à l’IPI Igensia Toulouse, passionné par le
              développement informatique et son apprentissage, j’aime relever
              des défis techniques et collaborer sur des projets concrets
              alliant innovation et travail d’équipe. Je développe avec un large
              éventail de technologies incluant HTML, CSS, JavaScript,
              TypeScript, C++, Java, Python, ainsi que des frameworks comme
              React et Next avec une bonne maîtrise des bases de données en
              MySQL, MongoDB. Mon approche combine créativité, rigueur technique
              et attention aux détails pour offrir des solutions web de qualité.
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
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
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

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              N&apos;hésitez pas à me contacter.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:augu.liam@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-10 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    augu.liam@gmail.com
                  </p>
                </div>
              </a>

              {/* Téléphone */}
              <a
                href="tel:+33612345678"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-10 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Téléphone
                  </p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    +33 7 65 74 97 00
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
