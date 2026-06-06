# 🚀 Cómo Actualizar el Sitio Web - Guía Completa

## 📋 Resumen de lo que Hicimos

✅ Cambiamos el código para usar imágenes `.jpg` en lugar de `.png`
✅ Las imágenes ahora deben tener tu logo incluido
✅ El sitio está listo para mostrar las nuevas imágenes urbanas

## 🔄 Pasos para Ver los Cambios en tu Sitio Web

### Paso 1: Prepara las Imágenes (Si aún no lo has hecho)

1. **Descarga 3 imágenes urbanas** de Unsplash o Pexels
2. **Agrega tu logo** a cada imagen usando Canva
3. **Guarda como JPG** con estos nombres:
   - `service-corte.jpg`
   - `service-barba.jpg`
   - `service-estilo.jpg`

### Paso 2: Coloca las Imágenes en la Carpeta

Copia los 3 archivos JPG a:
```
c:\Users\corte\Downloads\barberia-lacayo\public\images\
```

### Paso 3: Actualiza el Sitio Web

Hay 2 formas de actualizar tu sitio:

#### Opción A: Si el Sitio Está Corriendo Localmente (en tu computadora)

1. **Abre una terminal en VS Code:**
   - Presiona `Ctrl + Ñ` (o `Ctrl + ~`)
   - O ve a: Terminal → Nueva Terminal

2. **Verifica que el servidor esté corriendo:**
   - Deberías ver algo como: "Local: http://localhost:3000"
   - Si NO está corriendo, ejecuta:
   ```bash
   npm run dev
   ```

3. **Refresca el navegador:**
   - Ve a tu navegador (donde está abierto localhost:3000)
   - Presiona `Ctrl + F5` (o `Ctrl + Shift + R`)
   - ¡Deberías ver las nuevas imágenes urbanas con tu logo!

#### Opción B: Si el Sitio Está en Vercel (en Internet)

1. **Abre una terminal en VS Code:**
   - Presiona `Ctrl + Ñ` (o `Ctrl + ~`)

2. **Guarda los cambios en Git:**
   ```bash
   git add .
   git commit -m "Actualizar imágenes de servicios a estilo urbano con logo"
   git push
   ```

3. **Vercel detectará los cambios automáticamente:**
   - Espera 1-2 minutos
   - Ve a tu sitio web (tu dominio o URL de Vercel)
   - Presiona `Ctrl + F5` para refrescar
   - ¡Las nuevas imágenes estarán en línea!

## 🎯 Checklist Completo

### Preparación de Imágenes:
- [ ] Descargué 3 imágenes urbanas de barbería
- [ ] Agregué mi logo a cada imagen en Canva
- [ ] Guardé las imágenes como:
  - `service-corte.jpg`
  - `service-barba.jpg`
  - `service-estilo.jpg`
- [ ] Copié las imágenes a: `c:\Users\corte\Downloads\barberia-lacayo\public\images\`

### Actualización Local:
- [ ] El servidor está corriendo (`npm run dev`)
- [ ] Refresqué el navegador (Ctrl+F5)
- [ ] ¡Veo las nuevas imágenes urbanas con logo! 🎉

### Actualización en Vercel (si aplica):
- [ ] Ejecuté: `git add .`
- [ ] Ejecuté: `git commit -m "Actualizar imágenes de servicios"`
- [ ] Ejecuté: `git push`
- [ ] Esperé 1-2 minutos
- [ ] Refresqué mi sitio web (Ctrl+F5)
- [ ] ¡El sitio en línea tiene las nuevas imágenes! 🚀

## 🔍 Verificación

Para confirmar que todo está bien:

1. **Verifica que los archivos existan:**
   - Abre: `c:\Users\corte\Downloads\barberia-lacayo\public\images\`
   - Debes ver:
     - `service-corte.jpg` ✅
     - `service-barba.jpg` ✅
     - `service-estilo.jpg` ✅
     - `logo.png` ✅

2. **Verifica en el navegador:**
   - Ve a la sección "Servicios" de tu sitio
   - Debes ver 3 tarjetas con:
     - Imágenes urbanas de barbería
     - Tu logo en cada imagen
     - Precios: C$ 250, C$ 200, C$ 380

## ❓ Solución de Problemas

### Las imágenes no se ven:
1. Verifica que los nombres sean EXACTOS (minúsculas, con guión)
2. Verifica que estén en la carpeta correcta
3. Refresca con `Ctrl + F5` (no solo F5)
4. Si usas Vercel, espera 2-3 minutos después del push

### Las imágenes se ven pixeladas:
1. Usa imágenes de mayor resolución (mínimo 1200x800px)
2. Descarga imágenes de alta calidad de Unsplash

### El logo se ve muy grande/pequeño:
1. Vuelve a Canva
2. Ajusta el tamaño del logo
3. Guarda de nuevo
4. Reemplaza el archivo

### El sitio no actualiza:
1. Cierra completamente el navegador
2. Vuelve a abrir
3. Ve a tu sitio
4. Presiona `Ctrl + Shift + Delete` → Borrar caché
5. Refresca con `Ctrl + F5`

## 📞 Comandos Útiles

**Ver el sitio localmente:**
```bash
npm run dev
```

**Detener el servidor:**
- Presiona `Ctrl + C` en la terminal

**Actualizar a Vercel:**
```bash
git add .
git commit -m "Tu mensaje aquí"
git push
```

**Ver el estado de Git:**
```bash
git status
```

## 🎉 ¡Listo!

Una vez que sigas estos pasos, tu sitio web mostrará las nuevas imágenes urbanas con tu logo en la sección de servicios.

**Recuerda:** 
- Local: Solo refresca el navegador
- Vercel: Haz push y espera 1-2 minutos

---

**¿Necesitas más ayuda?** Revisa las guías anteriores o pregunta lo que necesites! 🚀