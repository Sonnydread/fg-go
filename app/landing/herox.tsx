import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-800 text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-fgGreen/30 blur-[160px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-fgBlue/30 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-sm tracking-wide text-white/80">
              +25 años liderando publicidad exterior e interior
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              Hacemos que tu marca se vea
              
              imposible de ignorar
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80">
              Diseñamos, producimos e instalamos soluciones de publicidad
              de alto impacto visual. Precisión, calidad y presencia real
              en la calle.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-fgGreen px-8 py-4 text-sm font-semibold text-black transition hover:bg-fgGreenDark">
                Solicitar cotización
              </button>

              <button className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5">
                Ver servicios
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex items-center gap-8 text-sm text-white/60">
              <div>
                <span className="block text-2xl font-bold text-white">25+</span>
                Años de experiencia
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">100%</span>
                Calidad garantizada
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">Alta</span>
                Resolución visual
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <Image
                src="/img/green.jpg"
                alt="Publicidad exterior"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-xl">
              <p className="text-sm font-medium">
                Publicidad Exterior & Interior
              </p>
              <p className="text-xs text-white/60">
                Vallas · Letreros · Cajas de luz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
