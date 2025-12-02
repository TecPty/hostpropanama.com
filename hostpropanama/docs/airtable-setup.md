# Airtable base para gestión de talento y eventos

## Tablas

### Staff
- Estado (single select): Candidato, Aprobado, Baja, Suspendido
- Rol (single select): Azafata/Host, Promotor/Brand Ambassador, Hospitality/Protocolo, Bilingue VIP, Otro
- Nombre completo (text)
- Idiomas (multi select): Español nativo, Inglés básico, Inglés intermedio, Inglés avanzado, Italiano básico, etc.
- Ciudad (text)
- Disponibilidad (single select): L-V, Fin de semana, Flexible
- Notas de disponibilidad (long text)
- Experiencia/resumen (long text)
- Formación (long text)
- Altura cm (number)
- Peso kg (number)
- Talla (text)
- Ojos (text)
- Cabello (text)
- Instagram/Portafolio URL (url)
- Fotos (attachment)
- Aprobada para web (checkbox)
- Última actualización (date)
- Responsable interno (collaborator)
- Rating post-evento (number 0-5)
- Notas internas (long text)

### Eventos/Asignaciones
- Evento/Cliente (text)
- Fecha (date)
- Ubicación (text)
- Roles requeridos (multi select)
- Staff asignado (link to Staff, multiple)
- Feedback cliente (long text)
- Incidencias (long text)
- Calificación del staff (number 0-5)

### Medios (opcional)
- Staff (link to Staff)
- Foto (attachment)
- Aprobada para web (checkbox)
- Notas (text)

## Vistas sugeridas (Staff)
- Activos: filtro Estado = Aprobado
- Candidatos: Estado = Candidato
- Baja/Archivo: Estado = Baja
- Bilingues: Idiomas contiene “Inglés” o “Italiano”
- Última actualización > 180 días: para revisión
- Aprobados web: Aprobada para web = true

## Formularios
- Formulario Talento (público → crea Candidato):
  - Nombre completo, Email, Teléfono/WhatsApp, Ciudad, Rol, Idiomas, Disponibilidad (select), Portafolio/IG URL, Fotos, Mensaje.
- Formulario Feedback post-evento (interno):
  - Evento, Fecha, Staff asignado, Feedback cliente, Incidencias, Calificación del staff.

## Datos ejemplo (Sofía) para importar
Ver `docs/staff-template.csv` con una fila prellenada. Puedes importar el CSV a la tabla Staff y luego subir las fotos en el campo adjunto.

## Checklist de operación
- Revisar Candidatos semanal, mover a Aprobado o Baja.
- Actualizar Última actualización al editar una ficha.
- Post-evento: registrar feedback y calificación en Eventos y actualizar rating del Staff.
- Marcar “Aprobada para web” solo en perfiles listos para publicar.
  