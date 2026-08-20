TURF KHUJI — NETLIFY MANUAL DEPLOY

1. Go to Netlify > Add new project > Deploy manually.
2. Drag turf-khuji-netlify-upload.zip into Netlify Drop, or unzip it and drag the folder.
3. index.html is at the ZIP root, so no build command is required.
4. This package contains the public Turf Khuji UI, Owner Portal and Admin Dashboard.
5. Supabase database remains hosted separately. The static preview uses demo data; live auth/bookings/payments require the source app + Supabase environment configuration.
6. Never expose SUPABASE_SERVICE_ROLE_KEY in browser code.
