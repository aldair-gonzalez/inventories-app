import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      Este es el layout de ordenes de compra
      <Slot />
    </>
  );
});
