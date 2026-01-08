type AdmissionSummaryProps = {
  university: string
  studentInitials: string
  program?: string
  intake?: string
}

export default function AdmissionSummaryCard({
  university,
  studentInitials,
  program,
  intake,
}: AdmissionSummaryProps) {
  return (
    <div className="max-w-xl rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <h3 className="text-lg font-semibold text-neutral-900">
        Admission Outcome Summary
      </h3>

      {/* Body */}
      <div className="mt-4 space-y-2 text-sm text-neutral-700">
        <p>
          Student <span className="font-medium">{studentInitials}</span> has
          received an admission offer from{" "}
          <span className="font-medium">{university}</span>.
        </p>

        {program && (
          <p>
            Program: <span className="font-medium">{program}</span>
          </p>
        )}

        {intake && (
          <p>
            Intake: <span className="font-medium">{intake}</span>
          </p>
        )}

        <p>
          This outcome was achieved after profile assessment and application
          support.
        </p>
      </div>

      {/* Divider */}
      <hr className="my-4 border-neutral-200" />

      {/* Disclaimer */}
      <p className="text-xs text-neutral-500 leading-relaxed">
        This summary is provided for informational purposes only. Admission
        decisions and offer letters are issued solely by universities to
        eligible students. We do not issue, control, or guarantee admissions.
      </p>
    </div>
  )
}
