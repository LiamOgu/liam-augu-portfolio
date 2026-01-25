import { Experience } from '@/data/experiences';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const monthNames = [
      'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
      'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const startDate = formatDate(experience.startDate);
  const endDate = experience.endDate ? formatDate(experience.endDate) : 'Présent';

  return (
    <div className="relative pl-8 pb-12 border-l-2 border-blue-200 last:pb-0">
      {/* Dot sur la timeline */}
      <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>

      {/* Contenu */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
        {/* En-tête */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {experience.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-gray-600">
            <span className="font-semibold text-blue-600">
              {experience.company}
            </span>
            <span>•</span>
            <span>{experience.location}</span>
            <span>•</span>
            <span className="text-sm">
              {startDate} - {endDate}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          {experience.description}
        </p>

        {/* Tâches */}
        {experience.tasks && experience.tasks.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Responsabilités :
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {experience.tasks.map((task, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Technologies :
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
