<script lang="ts" setup>
const { cms } = useContext();
const { logos, menu, btns } = cms.$settings.common;
// Extraer solo las opciones con header === true
const filteredData = menu.items.filter((item: { header: boolean }) => item.header !== false);

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
const targetObject = filteredData.find((item: { link: { url: string } }) => item.link.url === 'products');

// Añadir el arreglo de objetos al objeto encontrado
if (targetObject)
  targetObject.menu = items;
</script>

<template>
  <header class="header">
    <div class="container mx-auto">
      <div class="xl:w-10/12 w-full mx-auto flex gap-4 items-center justify-between">
        <div class="flex-none">
          <mk-picture e-width="200" e-height="47" :src="logos?.logo_header.src" :alt="logos?.logo_header.alt" :title="logos?.logo_header.title" />
        </div>
        <nav class="grow lg:block hidden">
          <ul class="flex gap-12 items-center justify-center">
            <li v-for="(item, i) in filteredData" :key="i">
              <MoleculesBtnDropdown v-if="item.submenu" :data="item" />
              <AtomsButton v-else class="text-white font-[1.0625rem]" :data="item.link">
                {{ item.txt }}
              </AtomsButton>
            </li>
          </ul>
        </nav>
        <AtomsButton class="flex-none md:block hidden">
          <MoleculesBtnIcon :data="btns.quote" />
        </AtomsButton>
      </div>
    </div>
  </header>
</template>
