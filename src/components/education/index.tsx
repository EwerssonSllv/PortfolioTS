export function Carrer() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-8 border-b border-gray-700 pb-2">
            Educação
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-gray-400">Unip - Remote</p>
              <span className="text-sm text-gray-500">2025 - Present</span>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Ciências Econômicas
              </h3>
              <p className="text-gray-400">UFPB - João Pessoa</p>
              <span className="text-sm text-gray-500">2026 - Present</span>
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
            Experiência
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">
                Exército Brasileiro — Serviço Militar
              </h3>
              <p className="text-gray-400">Soldado</p>
              <span className="text-sm text-gray-500">2025 - 2026</span>

              <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                <li>Trabalho em equipe e disciplina em ambientes de alta pressão</li>
                <li>Treinamento operacional e atividades organizacionais</li>
                <li>Desenvolvimento de liderança e responsabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
