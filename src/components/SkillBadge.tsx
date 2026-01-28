import { Skill } from "@/data/skills";

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm dark:hover:shadow-gray-900/50 transition-all">
      <div className="shrink-0 w-8 h-8 flex items-center justify-center">
        {skill.icon ? (
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: skill.icon }}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded" />
        )}
      </div>

      {/* Nom de la compétence */}
      <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
        {skill.name}
      </span>
    </div>
  );
}
