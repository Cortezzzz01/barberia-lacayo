# 🔧 Configurar Variables de Entorno en Vercel

## ❌ Problema Actual

El formulario de comentarios muestra "Error al crear el comentario" porque **las variables de entorno no están configuradas en Vercel**.

## ✅ Solución: Agregar Variables en Vercel

### Paso 1: Ir a Vercel Dashboard

1. Ve a: https://vercel.com/dashboard
2. Inicia sesión con tu cuenta
3. Busca y selecciona tu proyecto: **barberia-lacayo**

### Paso 2: Ir a Settings

1. En tu proyecto, click en la pestaña **"Settings"** (arriba)
2. En el menú lateral izquierdo, click en **"Environment Variables"**

### Paso 3: Agregar las 3 Variables

Agrega estas 3 variables una por una:

#### Variable 1: NEXT_PUBLIC_SUPABASE_URL

- **Key (Nombre):** `NEXT_PUBLIC_SUPABASE_URL`
- **Value (Valor):** `https://fgauacfxopgmgzrjarsn.supabase.co`
- **Environment:** Selecciona las 3 opciones:
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Click en **"Save"**

#### Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY

- **Key (Nombre):** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value (Valor):** `sb_publishable_vvWE-ccHpji-YuT_83RJHg_cexBzXHD`
- **Environment:** Selecciona las 3 opciones:
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Click en **"Save"**

#### Variable 3: NEXT_PUBLIC_SITE_URL

- **Key (Nombre):** `NEXT_PUBLIC_SITE_URL`
- **Value (Valor):** `https://barberia-lacayo.vercel.app`
- **Environment:** Selecciona las 3 opciones:
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Click en **"Save"**

### Paso 4: Redesplegar el Sitio

Después de agregar las 3 variables:

1. Ve a la pestaña **"Deployments"** (arriba)
2. Busca el último deployment (el más reciente)
3. Click en los **tres puntos (...)** a la derecha
4. Selecciona **"Redeploy"**
5. Confirma el redespliegue

### Paso 5: Esperar y Probar

1. **Espera 1-2 minutos** mientras Vercel redesplega
2. Ve a tu sitio: https://barberia-lacayo.vercel.app
3. Refresca con **Ctrl + F5** (para limpiar caché)
4. Scroll hasta "Testimonios"
5. Click en **"Dejar un Comentario"**
6. Llena el formulario y prueba

## ✅ Checklist

- [ ] Ir a Vercel Dashboard
- [ ] Seleccionar proyecto barberia-lacayo
- [ ] Ir a Settings → Environment Variables
- [ ] Agregar NEXT_PUBLIC_SUPABASE_URL
- [ ] Agregar NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] Agregar NEXT_PUBLIC_SITE_URL
- [ ] Redesplegar desde Deployments
- [ ] Esperar 1-2 minutos
- [ ] Probar el formulario en el sitio

## 🎯 Resultado Esperado

Después de configurar las variables y redesplegar:

✅ El formulario funcionará correctamente
✅ Los comentarios se guardarán en Supabase
✅ Los comentarios aparecerán automáticamente en la página
✅ No habrá más errores

---

**¿Necesitas ayuda?** Avísame si tienes problemas en algún paso.