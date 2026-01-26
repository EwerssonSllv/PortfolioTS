export function Carrer() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-8 border-b border-gray-700 pb-2">
            Education
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">
                Systems Analysis and Development
              </h3>
              <p className="text-gray-400">Unip - Remote</p>
              <span className="text-sm text-gray-500">2025 - Present</span>
            </div>

            <div>
              <h3 className="text-lg font-semibold">ECIT Prefeito Oswaldo Pessoa - João Pessoa, PB </h3>
              <p className="text-gray-400">Manutenção e Suporte em Informática</p>
              <span className="text-sm text-gray-500">2021 - 2024</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-8 border-b border-gray-700 pb-2">
            Experience
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">
                Brazilian Army — Military Service
              </h3>
              <p className="text-gray-400">Soldier</p>
              <span className="text-sm text-gray-500">2025 - 2026</span>

              <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                <li>Teamwork and discipline in high-pressure environments</li>
                <li>Operational training and organizational activities</li>
                <li>Development of leadership and responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
