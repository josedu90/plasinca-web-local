<script lang="ts" setup>
const { cms } = useContext();
const { logos, menu, footer, networks } = cms.$settings.common;

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

// Quitar el objeto con link.url igual a 'products'
const filteredData = menu.items.filter((item: { link: { url: string } }) => item.link.url !== 'products');
</script>

<template>
  <footer class="footer">
    <div class="container mx-auto">
      <div class="xl:px-20">
        <div class="flex flex-wrap md:justify-between justify-center items-center border-solid border-white border-b-[1px] pb-3 mb-5">
          <mk-picture e-width="200" e-height="47" :src="logos?.logo_footer.src" :alt="logos?.logo_footer.alt" :title="logos?.logo_footer.title" />
          <p class="text-white md:text-left text-center text-[1.25rem]">
            {{ footer.txt }}
          </p>
        </div>
        <div class="flex lg:flex-nowrap flex-wrap justify-between items-strech">
          <div class="md:w-3/12 w-full flex flex-col justify-end lg:items-start items-center lg:mx-0 mx-auto lg:mt-0 mt-5 lg:order-1 order-2">
            <p class="text-white text-[1.25rem] mb-1">
              {{ networks.txt }}
            </p>
            <div class="flex gap-2">
              <AtomsButton v-for="(item, i) in networks.items" :key="i" :data="item.link" class="block">
                <mk-picture e-width="40" e-height="40" class="w-[40px]" :src="item.icon.src" :alt="item.icon.alt" :title="item.icon.title" />
              </AtomsButton>
            </div>
          </div>
          <div class="flex md:flex-nowrap flex-wrap lg:w-9/12 w-full items-strech lg:h-[200px] lg:order-2 order-1">
            <div class="md:grow w-full md:text-left text-center">
              <AtomsButton :data="targetObject.link">
                <div class="top">
                  {{ targetObject.txt }}
                </div>
              </AtomsButton>
              <nav>
                <ul class="submenu">
                  <li v-for="(item, i) in targetObject.menu" :key="i" class="option my-2">
                    <AtomsButton :data="item.link">
                      {{ item.txt }}
                    </AtomsButton>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="md:grow w-full md:text-left text-center flex flex-col justify-between">
              <nav>
                <ul class="flex justify-between md:my-0 my-2">
                  <li v-for="(item, i) in filteredData" :key="i" class="top">
                    <AtomsButton :data="item.link">
                      {{ item.txt }}
                    </AtomsButton>
                  </li>
                </ul>
              </nav>
              <AtomsButton :data="footer.policy.link">
                <p class="text-white underline text-[1.0625rem] md:text-right text-center transition-all duration-[0.5s] hover:opacity-60">
                  {{ footer.policy.txt }}
                </p>
              </AtomsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
