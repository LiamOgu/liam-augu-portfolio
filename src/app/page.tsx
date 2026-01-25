import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skillCategories, skills } from "@/data/skills";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section */}
      <Section id="hero" background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Bonjour, je suis{" "}
            <span className="text-blue-600">Développeur Full-Stack</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Passionné par la création d&apos;applications web modernes,
            performantes et accessibles. Je transforme vos idées en solutions
            digitales innovantes.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-gray-200"
            >
              Me contacter
            </a>
          </div>
        </div>
      </Section>

      {/* À propos */}
      <Section
        id="about"
        title="À propos de moi"
        subtitle="Découvrez mon parcours et ma passion pour le développement web"
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Développeur Full-Stack avec plusieurs années d&apos;expérience
              dans la création d&apos;applications web modernes. Je me
              spécialise dans l&apos;écosystème JavaScript/TypeScript, avec une
              expertise particulière en React, Next.js et Node.js.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Passionné par les nouvelles technologies et les bonnes pratiques
              de développement, je m&apos;efforce constamment d&apos;apprendre
              et d&apos;améliorer mes compétences. J&apos;aime résoudre des
              problèmes complexes et créer des expériences utilisateur
              exceptionnelles.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              En dehors du code, j&apos;apprécie partager mes connaissances avec
              la communauté et contribuer à des projets open source.
            </p>
          </div>
        </div>
      </Section>

      {/* Projets */}
      <Section
        id="projects"
        title="Mes Projets"
        subtitle="Découvrez quelques-uns de mes projets récents"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </Section>

      {/* Compétences */}
      <Section
        id="skills"
        title="Mes Compétences"
        subtitle="Les technologies et outils que je maîtrise"
      >
        {skillCategories.map((category) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      <Section
        id="experience"
        title="Mon Expérience"
        subtitle="Mon parcours professionnel"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Contactez-moi"
        subtitle="Discutons de votre prochain projet"
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Envoyer le message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">
                Ou contactez-moi directement par email :
              </p>
              <a
                href="mailto:contact@example.com"
                className="block text-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
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
