<script lang="ts" setup>
const { cms } = useContext();
const { menu, btns } = cms.$settings.common;

// dev
const items = [
  {
    txt: 'Rollos naturales o pigmentados',
    link: {
      url: 'products',
      type: 'mk',
      blank: false,
    },
  },
  {
    txt: 'Fundas naturales o pigmentadas',
    link: {
      url: 'industrias',
      type: 'mk',
      blank: false,
    },
  },
  {
    txt: 'Productos plásticos especiales',
    link: {
      url: 'clients',
      type: 'mk',
      blank: false,
    },
  },
];

// Encontrar el objeto con link.url igual a 'products'
const targetObject = menu.items.find((item: { link: { url: string } }) => item.link.url === 'products');

// Añadir el arreglo de objetos al objeto encontrado
if (targetObject)
  targetObject.menu = items;
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
