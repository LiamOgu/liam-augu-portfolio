import { Experience } from "@/data/experiences";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan",
      "Fév",
      "Mar",
      "Avr",
      "Mai",
      "Juin",
      "Juil",
      "Août",
      "Sep",
      "Oct",
      "Nov",
      "Déc",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const startDate = formatDate(experience.startDate);
  const endDate = experience.endDate
    ? formatDate(experience.endDate)
    : "Présent";

  return (
    <div className="border-l-2 border-gray-200 pl-6 pb-8 last:pb-0 relative">
      {/* Dot */}
      <div className="absolute -left-2.25 top-0 w-4 h-4 bg-gray-900 rounded-full border-2 border-white"></div>

      {/* Contenu */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {experience.title}
          </h3>
          <span className="text-sm text-gray-500">
            {startDate} - {endDate}
          </span>
        </div>

        <div className="text-sm text-gray-700 mb-3">
          <span className="font-medium">{experience.company}</span> ·{" "}
          {experience.location}
        </div>

        <p className="text-sm text-gray-600 mb-3">{experience.description}</p>

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-gray-600 bg-gray-100 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
