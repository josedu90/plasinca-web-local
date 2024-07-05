<script lang="ts" setup>
const { cms } = useContext();
const { logos, menu, btns } = cms.$settings.common;
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

// Extraer solo las opciones con header === true
const filteredData = menu.items.filter((item: { header: boolean }) => item.header !== false);

// Encontrar el objeto con link.url igual a 'products'
const targetObject = filteredData.find((item: { link: { url: string } }) => item.link.url === 'products');

// Añadir el arreglo de objetos al objeto encontrado
if (targetObject)
  targetObject.menu = products;
</script>

<template>
  <header class="header">
    <div class="container mx-auto">
      <div class="xl:w-10/12 w-full mx-auto flex gap-4 items-center justify-between">
        <div class="flex-none">
          <a href="/">
            <mk-picture e-width="200" e-height="47" :src="logos?.logo_header.src" :alt="logos?.logo_header.alt" :title="logos?.logo_header.title" />
          </a>
        </div>
        <nav class="grow lg:block hidden">
          <ul class="flex gap-12 items-center justify-center">
            <li v-for="(item, i) in filteredData" :key="i">
              <MoleculesBtnDropdown v-if="item.submenu" :data="item" />
              <AtomsButton v-else class="text-white text-[1.0625rem]" :data="item.link">
                {{ item.txt }}
              </AtomsButton>
            </li>
          </ul>
        </nav>
        <div class="flex gap-4">
          <div class="toggle">
            <button class="lg:hidden flex" :@click="`toggle()`">
              <mk-icon :v-if="`!state`" class="text-white text-[2rem]">
                ic:round-menu
              </mk-icon>
              <mk-icon :v-if="`state`" class="text-white text-[2rem]">
                ic:round-close
              </mk-icon>
            </button>
            <molecules-mov-menu ::class="`{'active':state}`" />
          </div>
          <AtomsButton class="flex-none md:block hidden open-dialog" data-dialog-id="dialog-overlay-1">
            <MoleculesBtnTxtIcon :data="btns.quote" />
          </AtomsButton>
        </div>
      </div>
    </div>
  </header>
</template>
