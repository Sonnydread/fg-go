"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../../components/ui/scroll-based-velocity";

export default function Velocidad() {
  return (
    <section className="relative bg-gradient-to-b from-green-700 to-green-900 py-30">
     
       {/* <p className="text-red-700 ml-34 font-bold">Sección nuestros clientes</p> */}
        <h1 className="ml-34 pb-18 text-5xl text-white font-semibold">Nuestros Servicios Integrales</h1>
      <div className="relative"> 
      
        <ScrollVelocityContainer className="text-3xl md:text-5xl bg-transparent font-semibold text-black">
          <ScrollVelocityRow baseVelocity={-4}>
            <div className="flex gap-16 text-6xl font-bold pl-2 pb-4 text-[#009846] whitespace-nowrap">
              Amazon · Meta · Nike · Adidas · Shell · Chevron · Siemens · Bosch ·
              Hyundai · Honda · Intel · IBM · Sony · Panasonic ·
            </div>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

     

      </div>
    </section>
  );
}