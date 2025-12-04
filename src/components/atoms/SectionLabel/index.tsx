export const SectionLabel = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-5 h-10 bg-danger rounded-sm"></div>
      <span className="text-danger font-semibold text-base">{text}</span>
    </div>
  );
};