import Image from "next/image";
import { CheckCircle } from "lucide-react";

type AdmitCardProps = {
  university: string;
  logo: string;
  documentImage: string;
  intake: string;
};

export default function VerifiedAdmitCard({
  university,
  logo,
  documentImage,
  intake,
}: AdmitCardProps) {
  return (
    <div className="max-w-sm rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] border border-zinc-200 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-5">
        <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
          <Image src={logo} alt={university} width={32} height={32} />
        </div>

        <div className="flex-1">
          <p className="text-sm text-zinc-500">Offer Letter</p>
          <h3 className="text-lg font-semibold text-zinc-900">
            {university}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-sm text-emerald-600 font-medium">
          <CheckCircle className="h-4 w-4" />
          Verified
        </div>
      </div>

      {/* Document preview */}
      <div className="relative mt-4 px-5 pb-5">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50">
          <Image
            src={documentImage}
            alt="University admit letter"
            fill
            className="object-contain"
          />
        </div>

        {/* Meta */}
        <div className="mt-4 flex justify-between text-sm text-zinc-500">
          <span>{intake}</span>
          <span>Issued by university</span>
        </div>
      </div>
    </div>
  );
}
