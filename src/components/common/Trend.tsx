import { ArrowDown, ArrowUp } from "lucide-react";

// Reusable +/- trend badge. Any card that shows a percentage change
// (stat cards, chart headers, etc.) should use this instead of
// re-implementing its own arrow + color logic.
const Trend = ({ value, positive }: { value: string; positive: boolean }) => {
  return (
    <span
      className={`inline-flex items-center gap-[4px] text-[12px] ${
        positive ? "text-[#2CCB7F]" : "text-[#E5484D]"
      }`}
    >
      {positive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
      <span style={{ fontWeight: 600 }}>{value}</span>
    </span>
  );
};

export default Trend;
