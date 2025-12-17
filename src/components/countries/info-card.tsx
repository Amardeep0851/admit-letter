
type InfoCardProps = {
  icon:React.ReactNode;
  label:string;
  value:string;
  bg:string
}
// Sub-component for clean code
export default function InfoCard({ icon, label, value, bg }:InfoCardProps) {
  return (
  <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-white mb-4 sm:mb-0">
    <div className={`p-2.5 rounded-lg ${bg}`}>
      {icon}
    </div>
    <div>
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</p>
      <p className="text-slate-900 font-semibold mt-0.5">{value}</p>
    </div>
  </div>
  )
}