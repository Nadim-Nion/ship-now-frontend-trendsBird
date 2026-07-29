import { COLOR } from "../../theme/tokens";

// One row of the sidebar nav. Used for both the main nav list and
// the bottom nav list — kept generic (icon/label/active/badge) so
// neither caller needs a special case.
const NavRow = ({
  icon: Icon,
  label,
  active,
  badge,
}: {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;
  label: string;
  active?: boolean;
  badge?: number;
}) => {
  return (
    <div
      className={`
        flex items-center justify-between
        px-3 py-2.5
        rounded-[10px]
        cursor-pointer
        mb-1
        ${active ? "bg-[#ECE8FF]" : "bg-transparent"}
      `}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={18}
          strokeWidth={2}
          color={active ? COLOR.primary : COLOR.navInactive}
        />
        <span
          className={`text-[14px] ${
            active
              ? "font-semibold text-navActiveText"
              : "font-medium text-navInactive"
          }`}
        >
          {label}
        </span>
      </div>
      {badge != null && (
        <span className="bg-[#7B61FF] text-white text-[11px] font-semibold rounded-full px-[7px] py-[1px] leading-[16px]">
          {badge}
        </span>
      )}
    </div>
  );
};

export default NavRow;
