import { Skill } from '@/data/skills';

interface SkillBadgeProps {
  skill: Skill;
  variant?: 'default' | 'compact';
}

export default function SkillBadge({ skill, variant = 'default' }: SkillBadgeProps) {
  const getLevelColor = (level: number) => {
    if (level >= 4) return 'bg-green-100 text-green-800 border-green-300';
    if (level >= 3) return 'bg-blue-100 text-blue-800 border-blue-300';
    return 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const renderStars = (level: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-sm ${
              index < level ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
        <span className="text-xl">{skill.icon}</span>
        <span className="font-medium text-gray-900">{skill.name}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center p-6 rounded-lg border-2 ${getLevelColor(
        skill.level
      )} hover:shadow-lg transition-all`}
    >
      {/* Icône */}
      <div className="text-4xl mb-3">{skill.icon}</div>

      {/* Nom */}
      <h3 className="text-lg font-semibold mb-2 text-center">{skill.name}</h3>

      {/* Catégorie */}
      <span className="text-xs uppercase tracking-wide text-gray-600 mb-3">
        {skill.category}
      </span>

      {/* Niveau */}
      {renderStars(skill.level)}

      {/* Label du niveau */}
      <span className="text-xs text-gray-600 mt-2">
        {skill.level === 5 && 'Expert'}
        {skill.level === 4 && 'Avancé'}
        {skill.level === 3 && 'Intermédiaire'}
        {skill.level === 2 && 'Débutant'}
        {skill.level === 1 && 'Notions'}
      </span>
    </div>
  );
}
