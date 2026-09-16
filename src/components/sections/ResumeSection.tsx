import { Download, ExternalLink, FileText } from 'lucide-react'
import { useResumeDocument } from '@/hooks/useResumeData'

export function ResumeSection() {
  const resume = useResumeDocument()
  const viewerUrl = resume.externalUrl
    ? resume.externalUrl
    : `${resume.fallbackPdf}#page=1&zoom=page-width&navpanes=0&pagemode=none`

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FileText size={22} className="text-[var(--color-brand)]" />
            <h2 className="text-2xl font-bold">Résumé</h2>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">
            {resume.label} · Updated {new Date(`${resume.lastUpdated}T00:00:00`).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={viewerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border)]
              text-sm font-medium hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors"
          >
            <ExternalLink size={15} />
            Open
          </a>
          <a
            href={resume.fallbackPdf}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-brand)]
              text-white text-sm font-medium hover:bg-[var(--color-brand-dark)] transition-colors"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>
      </div>

      <div className="hidden md:block overflow-hidden rounded-xl border border-[var(--color-border)] bg-white">
        <iframe
          src={viewerUrl}
          title={`${resume.label} for Abizeyimana Victor Iradukunda`}
          className="block w-full h-[72vh] min-h-[620px]"
        />
      </div>

      <a
        href={viewerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden block overflow-hidden rounded-xl border border-[var(--color-border)] bg-white"
        aria-label={`Open ${resume.label}`}
      >
        <img
          src={resume.previewImage}
          alt={`First-page preview of ${resume.label}`}
          width={1191}
          height={1684}
          className="block w-full h-auto"
        />
      </a>

      {!resume.externalUrl && (
        <p className="text-xs text-[var(--color-text-secondary)]">
          Showing the latest PDF export because the hosted resume is not currently public.
        </p>
      )}
    </div>
  )
}
