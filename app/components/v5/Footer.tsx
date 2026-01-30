'use client';

export function FooterV5() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-12 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-xl font-bold text-gray-900">anagen</div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="https://anagen.xyz/privacy" className="hover:text-gray-900">Privacy</a>
            <a href="https://anagen.xyz/terms" className="hover:text-gray-900">Terms</a>
            <a href="mailto:support@anagen.xyz" className="hover:text-gray-900">Contact</a>
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Anagen by HairDAO</p>
        </div>
        <p className="mt-8 text-center text-xs text-gray-400">
          This compounded formulation is not FDA-approved. Individual results may vary. For men only.
        </p>
      </div>
    </footer>
  );
}
