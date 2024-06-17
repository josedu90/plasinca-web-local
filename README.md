# Proyecto inicial


## Nombre de componentes

Cada componente dentro de la carpeta view recibe el subfijo de la carpeta padre en la que se encuentra.
Esto funciona solo a partir del 2 nivel

 | Ruta                                                       | nombre del componente      |
 | ---------------------------------------------------------- | -------------------------- |
 | /templates(nivel 1)/MainHome.vue                           | ------>  MainHome          |
 | /partials(nivel 1)/home(nivel 2)/Banner.vue                | ------>  HomeBanner        |
 | /design(nivel 1)/atoms(nivel 2)/button.vue                 | ------>  AtomsButton       |
 | /design(nivel 1)/molecules(nivel 2)/banner.vue             | ------>  MoleculesBanner   |
 | /design(nivel 1)/atoms(nivel 2)/common(nivel 3)/button.vue | ------>  AtomsCommonButton |



## Cms
Para ingresas al cms vaya a la siguiente ruta

```
/cms/v2/app
```

## MkIcon
Cambio de propiedad type por collection

```html
<!-- Old -->
<mk-icon type="mdi">plus</mk-icon>
<!-- New -->
<mk-icon collection="mdi">plus</mk-icon>
<!-- Short new alternative -->
<mk-icon>mdi:plus</mk-icon>
<mk-icon>ci:arrow-left</mk-icon>


```

# plasinca-web
