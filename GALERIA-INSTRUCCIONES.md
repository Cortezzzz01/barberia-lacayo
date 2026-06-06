# 🎨 Galería de Diseños - Instrucciones

## ✅ Lo que se ha creado:

1. **Nueva sección de Galería** en el sitio web
2. **Componente interactivo** con:
   - Filtros por categoría (Todos, Diseños Artísticos, Cortes Clásicos, Barbas, Estilos Modernos)
   - Vista de cuadrícula responsive
   - Lightbox para ver imágenes en grande
   - Navegación entre imágenes
   - Botón de WhatsApp para solicitar diseños

3. **Enlace en el menú** de navegación

---

## 📸 IMPORTANTE: Agregar las Fotos de los Diseños

### Paso 1: Preparar las Imágenes

Las 3 imágenes que me enviaste deben guardarse con estos nombres:

1. **Primera imagen (diseño tribal)** → `design-1.jpg`
2. **Segunda imagen (diseño con colores)** → `design-2.jpg`
3. **Tercera imagen (diseño de estrella)** → `design-3.jpg`

### Paso 2: Guardar en la Carpeta Correcta

1. Abre la carpeta del proyecto: `barberia-lacayo`
2. Navega a: `public/images/designs/`
3. Copia las 3 imágenes en esa carpeta
4. Asegúrate de que tengan los nombres correctos

### Paso 3: Verificar

1. Ve a http://localhost:3000
2. Scroll hasta la sección "Galería" o click en "Galería" en el menú
3. Deberías ver las 3 imágenes de diseños artísticos

---

## 🎯 Características de la Galería:

### Filtros Interactivos
- **Todos**: Muestra todos los trabajos
- **Diseños Artísticos**: Solo diseños con patrones artísticos
- **Cortes Clásicos**: Cortes tradicionales
- **Barbas**: Trabajos de barba
- **Estilos Modernos**: Cortes modernos

### Funcionalidades
- ✅ Click en cualquier imagen para verla en grande
- ✅ Navegación con flechas entre imágenes
- ✅ Información de cada diseño (título, categoría, descripción)
- ✅ Botón de WhatsApp para solicitar el diseño
- ✅ Responsive (se adapta a móviles y tablets)

---

## 📱 Agregar Más Diseños en el Futuro

### Opción 1: Agregar Imágenes Manualmente

1. Guarda nuevas imágenes en `public/images/designs/` con nombres como:
   - `design-4.jpg`
   - `design-5.jpg`
   - etc.

2. Edita el archivo `components/gallery.tsx`

3. Busca el array `hairDesigns` y agrega nuevos objetos:

```javascript
{
  id: 7,
  title: "Nombre del Diseño",
  description: "Descripción breve del diseño",
  image: "/images/designs/design-4.jpg",
  category: "Diseños Artísticos"
}
```

### Opción 2: Reemplazar Imágenes Existentes

Si quieres cambiar alguna imagen:
1. Reemplaza el archivo en `public/images/designs/`
2. Mantén el mismo nombre de archivo
3. La imagen se actualizará automáticamente

---

## 🎨 Categorías Disponibles

Puedes usar estas categorías para organizar los diseños:

- `"Diseños Artísticos"` - Para diseños con patrones artísticos
- `"Cortes Clásicos"` - Para cortes tradicionales
- `"Barbas"` - Para trabajos de barba
- `"Estilos Modernos"` - Para cortes modernos y tendencias

---

## 📋 Estructura de Archivos

```
barberia-lacayo/
├── components/
│   └── gallery.tsx          # Componente de la galería
├── public/
│   └── images/
│       └── designs/         # AQUÍ van las fotos de diseños
│           ├── design-1.jpg
│           ├── design-2.jpg
│           └── design-3.jpg
└── app/
    └── page.tsx            # Página principal (incluye la galería)
```

---

## 🚀 Desplegar en Vercel

Cuando subas las imágenes y hagas commit:

```bash
git add .
git commit -m "Agregar imágenes de diseños a la galería"
git push
```

Vercel automáticamente desplegará los cambios y la galería estará disponible en:
https://barberia-lacayo.vercel.app

---

## 💡 Consejos para las Imágenes

### Tamaño Recomendado:
- **Ancho:** 800-1200 píxeles
- **Alto:** 800-1200 píxeles (preferiblemente cuadradas)
- **Formato:** JPG o PNG
- **Peso:** Menos de 500KB por imagen

### Optimización:
Si las imágenes son muy pesadas, puedes optimizarlas en:
- https://tinypng.com/
- https://squoosh.app/

---

## ❓ Solución de Problemas

### Las imágenes no aparecen:
1. Verifica que los nombres de archivo sean exactos (con extensión .jpg)
2. Verifica que estén en la carpeta correcta: `public/images/designs/`
3. Refresca el navegador (Ctrl + F5)

### Las imágenes se ven pixeladas:
- Usa imágenes de mayor resolución (mínimo 800x800px)

### Quiero cambiar el orden de las imágenes:
- Edita `components/gallery.tsx` y reordena los objetos en el array `hairDesigns`

---

## 📞 Soporte

Si tienes problemas o quieres agregar más funcionalidades a la galería, házmelo saber.

---

¡La galería está lista! Solo falta que agregues las 3 imágenes de los diseños. 🎉