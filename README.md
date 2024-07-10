# Inicio rapido
## Requerimientos
- [Node](https://nodejs.org/en/) >= 18
- [pnpm](https://pnpm.io/) >= 7.0
- Sistema operativo linux (Fedora o ubuntu)

Se requiere configurar las variables de entorno en el archivo .env
- URL
- FLOW_USER_TOKEN
- FLOW_LICENSE_TOKEN
## Instalalacion de paquetes

```
pnpm install
```
### Consideraciones
Se necesita configurar la variable de entorno FLOW_USER_TOKEN a nivel del sistema antes de ejecutar el comando de instalacion
## Comandos
Para la ejecucion de estas comando se usan pnpm como gestor de paquetes
### dev
Levanta el servidor de desarrollo
```
pnpm dev
```

### generate
Compila y genera todos los archivos del sitio, los archivos se publican en **.flow/output/public** o end **dist**
```
pnpm generate
```
### preview

Levanta un servidor con los archivos generados por el comando **generate**

```
pnpm preview
```

### format
Da formato al codigo para evitar malas practicas.

```
pnpm format
```

## Otros

Para mas informacion revise la carpeta _docs que tiene detalles adicionales acerca de framework