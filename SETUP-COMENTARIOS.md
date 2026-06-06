# 🎉 Sistema de Comentarios con Google OAuth - Configuración

## ✅ Lo que ya está hecho

- ✅ Google OAuth configurado en Google Cloud Console
- ✅ Supabase configurado con autenticación de Google
- ✅ Tabla `reviews` creada en Supabase
- ✅ API routes para manejar comentarios (GET, POST)
- ✅ Componente de formulario con autenticación
- ✅ Componente Reviews actualizado para mostrar comentarios dinámicos
- ✅ Variables de entorno configuradas localmente

---

## 🚀 Configurar Variables de Entorno en Vercel

Para que el sistema funcione en producción (https://barberia-lacayo.vercel.app), necesitas agregar las variables de entorno en Vercel:

### Paso 1: Ir a Vercel Dashboard

1. Ve a [vercel.com](https://vercel.com)
2. Selecciona tu proyecto **barberia-lacayo**
3. Ve a **Settings** (Configuración)
4. Click en **Environment Variables** (Variables de entorno)

### Paso 2: Agregar las Variables

Agrega estas 3 variables de entorno:

**Variable 1:**
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** `https://fgauacfxopgmgzrjarsn.supabase.co`
- **Environment:** Production, Preview, Development (selecciona todas)

**Variable 2:**
- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** `sb_publishable_vvWE-ccHpji-YuT_83RJHg_cexBzXHD`
- **Environment:** Production, Preview, Development (selecciona todas)

**Variable 3:**
- **Name:** `NEXT_PUBLIC_SITE_URL`
- **Value:** `https://barberia-lacayo.vercel.app`
- **Environment:** Production, Preview, Development (selecciona todas)

### Paso 3: Redesplegar

Después de agregar las variables:
1. Ve a la pestaña **Deployments**
2. Click en los **tres puntos (...)** del último deployment
3. Selecciona **Redeploy**
4. Confirma el redespliegue

---

## 🧪 Probar el Sistema

### En Desarrollo Local (localhost:3000)

1. Asegúrate de que el servidor esté corriendo:
   ```bash
   npm run dev
   ```

2. Ve a http://localhost:3000
3. Scroll hasta la sección de "Testimonios"
4. Click en **"Dejar un Comentario"**
5. Click en **"Iniciar sesión con Google"**
6. Completa el formulario y envía

### En Producción (barberia-lacayo.vercel.app)

1. Ve a https://barberia-lacayo.vercel.app
2. Sigue los mismos pasos que en desarrollo local

---

## 📋 Estructura de Archivos Creados

```
barberia-lacayo/
├── .env.local                      # Variables de entorno (NO subir a Git)
├── lib/
│   └── supabase.ts                 # Cliente de Supabase
├── app/
│   └── api/
│       └── reviews/
│           └── route.ts            # API endpoints (GET, POST)
├── components/
│   ├── review-form.tsx             # Formulario de comentarios
│   └── reviews.tsx                 # Componente actualizado
└── SETUP-COMENTARIOS.md            # Este archivo
```

---

## 🔧 Características Implementadas

### ✨ Funcionalidades

- **Autenticación con Google OAuth**
  - Login/Logout con cuenta de Google
  - Obtiene nombre, email y foto del usuario

- **Sistema de Comentarios**
  - Calificación de 1 a 5 estrellas
  - Comentario de texto (mínimo 10 caracteres)
  - Validación en cliente y servidor
  - Auto-aprobación de comentarios

- **Visualización**
  - Comentarios destacados de Google Maps (estáticos)
  - Comentarios de usuarios (dinámicos desde Supabase)
  - Rating promedio calculado automáticamente
  - Fechas relativas ("Hace 2 días", etc.)

- **Seguridad**
  - Row Level Security (RLS) en Supabase
  - Solo usuarios autenticados pueden comentar
  - Validación de datos en servidor
  - Sanitización de inputs

---

## 🎨 Cómo se ve

### Sección de Comentarios
- Muestra rating promedio
- Comentarios destacados de Google Maps
- Botón "Dejar un Comentario"
- Comentarios de usuarios con foto de perfil

### Formulario
- Botón de "Iniciar sesión con Google"
- Selector de estrellas interactivo
- Campo de texto para comentario
- Validación en tiempo real
- Botón de envío

---

## 🐛 Solución de Problemas

### Error: "No se puede iniciar sesión"
- Verifica que las variables de entorno estén configuradas en Vercel
- Verifica que la URL de callback esté correcta en Google Cloud Console
- Verifica que Google OAuth esté habilitado en Supabase

### Error: "No se pueden cargar los comentarios"
- Verifica que la tabla `reviews` exista en Supabase
- Verifica las políticas de RLS en Supabase
- Revisa la consola del navegador para errores

### Los comentarios no aparecen
- Verifica que `is_approved` sea `true` en la base de datos
- Refresca la página
- Revisa la consola del navegador

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa los logs de Vercel
3. Verifica las credenciales en Supabase y Google Cloud Console

---

## 🎯 Próximos Pasos (Opcional)

Mejoras que puedes agregar en el futuro:

- [ ] Panel de administración para moderar comentarios
- [ ] Paginación para muchos comentarios
- [ ] Respuestas a comentarios
- [ ] Reportar comentarios inapropiados
- [ ] Editar/eliminar propios comentarios
- [ ] Notificaciones por email de nuevos comentarios
- [ ] Integración con Google Reviews API para sincronizar

---

## ✅ Checklist Final

Antes de considerar el proyecto completo:

- [ ] Variables de entorno configuradas en Vercel
- [ ] Redespliegue realizado en Vercel
- [ ] Probado login con Google en producción
- [ ] Probado envío de comentario en producción
- [ ] Verificado que los comentarios aparecen correctamente
- [ ] Verificado que el rating promedio se calcula bien

---

¡Listo! Tu sistema de comentarios con Google OAuth está completamente implementado. 🎉