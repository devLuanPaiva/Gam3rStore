import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  template: `
    <section class="flex-1 flex flex-col space-y-4 pt-4 container">
      <article class="flex flex-col justify-center items-center gap-5 py-20">
        <img
          src="https://i.ibb.co/HtQjdjQ/logo.png"
          alt="logo"
          class="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72"
        />
        <div class="flex flex-col items-center text-center">
          <h1
            class="font-bold bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            Pedido Realizado com Sucesso!
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base md:text-lg mt-2">
            Você receberá um e-mail com os detalhes da sua compra.
          </p>
        </div>
      </article>
    </section>
  `,
})
export class SuccessComponent {}
