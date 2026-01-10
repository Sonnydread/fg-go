"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function Velocidad() {
  return (
    <section className="py-28 bg-zinc-100">
       <p className="text-red-700 ml-34 font-bold">Sección nuestros clientes</p>
        <h1 className="ml-34 pb-18 text-5xl font-semibold">Nuestros clientes</h1>
      <div className="relative"> {/* Contenedor relativo para los overlays */}
        {/* ScrollVelocityContainer principal */}
        <ScrollVelocityContainer className="text-3xl md:text-5xl font-semibold text-black">

          {/* ROW TOP */}
          <ScrollVelocityRow baseVelocity={4}>
            <div className="flex gap-16 text-6xl font-bold pl-2 text-[#093fb4] pb-4 whitespace-nowrap">
              Toyota · BMW · Mercedes-Benz · Audi · Tesla · Ford · Volkswagen ·
              Coca-Cola · Nestlé · Unilever · Samsung · Apple · Microsoft · Google ·
            </div>
          </ScrollVelocityRow>

          {/* Espacio sutil entre filas */}
          <div className="h-12 md:h-10" />

          {/* ROW BOTTOM */}
          <ScrollVelocityRow baseVelocity={-4}>
            <div className="flex gap-16 text-6xl font-bold pl-2 pb-4 text-[#009846] whitespace-nowrap">
              Amazon · Meta · Nike · Adidas · Shell · Chevron · Siemens · Bosch ·
              Hyundai · Honda · Intel · IBM · Sony · Panasonic ·
            </div>
          </ScrollVelocityRow>

        </ScrollVelocityContainer>

        {/* Overlay izquierdo - fade in desde la izquierda */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-84 bg-gradient-to-r from-zinc-100 to-transparent z-10" />

        {/* Overlay derecho - fade out hacia la derecha */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-84 bg-gradient-to-l from-zinc-100 to-transparent z-10" />

      </div>
    </section>
  );
}