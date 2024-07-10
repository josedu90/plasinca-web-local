<script lang="ts" setup>
const { cms } = useContext();
const { menu, btns } = cms.$settings.common;
const { shared } = useSharedContext();
const { products } = shared;

function removeColorText(str: string): string {
  // Expresión regular para buscar "(color)"
  const regex = /\(color\)/g;

  // Reemplazar todas las ocurrencias de "(color)" con una cadena vacía
  return str.replace(regex, '');
}

products.forEach((item: { link?: any; slug: any; name?: any }) => {
  item.link = {
    url: `single-products/${item.slug}`,
    type: 'mk',
    blank: false,
  };
  // Asegurarse de que item.name exista y no sea null o undefined
  if (item.name)
    item.name = removeColorText(item.name);
});
// Encontrar el objeto con link.url igual a 'products'
const targetObject = menu.items.find((item: { link: { url: string } }) => item.link.url === 'products');

// Añadir el arreglo de objetos al objeto encontrado
if (targetObject)
  targetObject.menu = products;
</script>

<template>
  <div class="mov-menu">
    <nav>
      <ul>
        <li v-for="(item, i) in menu.items" :key="i" :class="{ 'h-12 my-5': !item.submenu }">
          <MoleculesBtnDropdown v-if="item.submenu" :data="item" :toggle="false" />
          <AtomsButton v-else class="text-white toggle text-[2rem] font-bold transition-all duration-[0.5s]" :data="item.link">
            {{ item.txt }}
          </AtomsButton>
        </li>
      </ul>
      <AtomsButton class="md:hidden block open-dialog" data-dialog-id="dialog-overlay-1">
        <MoleculesBtnTxtIcon :data="btns.quote" />
      </AtomsButton>
    </nav>
  </div>
</template>
