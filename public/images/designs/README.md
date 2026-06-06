# Instrucciones para Agregar Imágenes de Diseños

## 📸 Cómo agregar las fotos de los diseños:

1. **Guarda las 3 imágenes que me enviaste en esta carpeta** con los siguientes nombres:
   - `design-1.jpg` (primera imagen - diseño tribal)
   - `design-2.jpg` (segunda imagen - diseño con colores)
   - `design-3.jpg` (tercera imagen - diseño de estrella)

2. **Formato recomendado:**
   - Formato: JPG o PNG
   - Tamaño recomendado: 800x800 píxeles (cuadrado)
   - Peso: menos de 500KB por imagen

3. **Pasos:**
   - Abre esta carpeta: `public/images/designs/`
   - Arrastra y suelta las 3 imágenes aquí
   - Renómbralas como se indica arriba
   - Guarda los cambios

## 🎨 Agregar más diseños:

Si quieres agregar más diseños en el futuro:

1. Guarda las imágenes en esta carpeta con nombres como: `design-4.jpg`, `design-5.jpg`, etc.

2. Edita el archivo `components/gallery.tsx` y agrega más objetos al array `hairDesigns`:

```javascript
{
  id: 7,
  title: "Nombre del Diseño",
  description: "Descripción del diseño",
  image: "/images/designs/design-4.jpg",
  category: "Diseños Artísticos"
}
```

## 📝 Categorías disponibles:
- "Diseños Artísticos"
- "Cortes Clásicos"
- "Barbas"
- "Estilos Modernos"

---

**Nota:** Después de agregar las imágenes, el sitio las mostrará automáticamente en la sección de Galería.