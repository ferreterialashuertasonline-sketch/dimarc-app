# DIMARC App Comercial — proyecto Capacitor

Este proyecto genera un APK real de Android de forma automática y gratuita
usando GitHub Actions, sin necesidad de instalar Android Studio.

## Cómo usarlo

1. Sube TODO el contenido de esta carpeta a un repositorio nuevo en GitHub
   (puede ser público o privado).
2. En cuanto subas los archivos, GitHub empezará a compilar solo
   (pestaña "Actions" del repositorio).
3. Cuando termine (unos 3-5 minutos, icono verde ✓), entra en esa ejecución
   y descarga "dimarc-app-apk" al final de la página, en la sección Artifacts.
4. Descomprime ese archivo: dentro está app-debug.apk. Pásalo al móvil e
   instálalo (activando "orígenes desconocidos" la primera vez).

## Actualizar el contenido de la app más adelante

Para cambiar cualquier cosa de la app (textos, datos, colores), edita el
archivo `www/index.html` y vuelve a subir el cambio a GitHub — se
recompilará solo y tendrás un APK nuevo en unos minutos.
