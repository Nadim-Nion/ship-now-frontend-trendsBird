import React from "react";
import { COLOR, cardStyle } from "../../theme/tokens";
import Trend from "./Trend";

const StatCard = ({
  title,
  value,
  unit,
  trend,
  positive,
  note,
  icon: Icon,
}: {
  title: string;
  value: string;
  unit: string;
  trend: string;
  positive: boolean;
  note: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;
}) => {
  return (
    <div className="flex flex-col justify-between" style={cardStyle}>
      <div className="flex justify-between items-start">
        <div
          style={{ fontSize: 14, color: COLOR.textSecondary, fontWeight: 500 }}
        >
          {title}
        </div>
      </div>
      <div className="flex justify-between items-end mt-3.5">
        <div>
          <div className="flex items-baseline gap-[6px]">
            <span
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: COLOR.textPrimary,
              }}
            >
              {value}
            </span>
            {unit && (
              <span style={{ fontSize: 13, color: COLOR.textSecondary }}>
                {unit}
              </span>
            )}
          </div>
          <div className="mt-[8px] flex items-center gap-[4px]">
            <Trend value={trend} positive={positive} />
            <span style={{ fontSize: 12, color: COLOR.textSecondary }}>
              {note}
            </span>
          </div>
        </div>
        <div className="w-[44px] h-[44px] rounded-[12px] bg-[#7B61FF] flex items-center justify-center shrink-0">
          <Icon size={20} color="#fff" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
