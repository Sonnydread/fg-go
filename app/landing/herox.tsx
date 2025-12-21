import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-100 text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="mt-6 text-5xl text-[#093fb4] font-bold tracking-tight md:text-6xl xl:text-7xl">
              Hacemos que tu marca se vea imposible de ignorar
            </h1>

            <p className="mt-6 max-w-xl text-lg text-black">
              Diseñamos, producimos e instalamos soluciones de publicidad de
              alto impacto visual. Precisión, calidad y presencia real en todos
              lados.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full border-2 border-[#009846] px-8 py-4 text-base font-semibold text-black transition hover:border-white hover:bg-white/5">
                Solicitar cotización
              </button>

              <button className="rounded-full border-2 border-[#093fb4] px-8 py-4 text-base font-semibold text-black transition hover:border-white hover:bg-white/5">
                Ver servicios
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex items-center gap-8 text-sm text-black">
              <div>
                <span className="block text-2xl font-bold text-black">25+</span>
                Años de experiencia
              </div>
              <div>
                <span className="block text-2xl font-bold text-black">
                  100%
                </span>
                Calidad garantizada
              </div>
              <div>
                <span className="block text-2xl font-bold text-black">
                  Alta
                </span>
                Resolución visual
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative aspect-[5/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* Imagen base */}
              <Image
                src="/img/stole.png"
                alt="Publicidad exterior"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />

              {/* Video overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <video
                  src="/vid/log-mov.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-3/4 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#009846] px-6 py-4 backdrop-blur-xl">
              <p className="text-lg font-semibold text-center">
                Publicidad Exterior & Interior
              </p>
              <p className="text-base text-white">
                Vallas · Letreros · Adhesivos · Paneles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
