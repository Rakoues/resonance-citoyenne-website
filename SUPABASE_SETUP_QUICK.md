# 🚀 Setup Supabase - Guide Rapide

## Pourquoi Supabase ?
✅ Base de données PostgreSQL gratuite
✅ Dashboard admin automatique
✅ Plus scalable que Google Sheets
✅ Facile à configurer (10 min)

---

## Setup en 5 étapes

### 1️⃣ Créer un compte
- Va sur https://supabase.com
- Inscris-toi avec ton email
- Crée un nouveau projet:
  - Nom: "Resonance Citoyenne"
  - Password: (garde-le bien !)
  - Region: Europe West (Ireland)

### 2️⃣ Créer la table
Une fois le projet créé (2-3 min d'attente):
- Clique sur "Table Editor" dans le menu
- "Create a new table"
- Nom: `newsletter_subscriptions`
- ✅ Active "Enable Row Level Security (RLS)"
- Les colonnes à créer:
  - ✅ `id` (UUID, auto) - déjà créé
  - ✅ `created_at` (timestamp) - déjà créé
  - ➕ `email` (text) - **REQUIRED**
  - ➕ `source` (text) - default: 'website'
- Save

### 3️⃣ Activer les permissions
- Dans la table, clique "RLS" (Row Level Security)
- "New Policy"
- Template: **"Enable insert for everyone"**
- Policy name: "Allow anonymous inserts"
- Review → Save

### 4️⃣ Copier les clés
- Menu: Settings → API
- Copie:
  ```
  Project URL → ton SUPABASE_URL
  anon public → ton SUPABASE_ANON_KEY
  ```

### 5️⃣ Ajouter dans .env.local
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...ton_token
```

---

## Tester

### En local
```bash
npm run dev
```

1. Va sur http://localhost:3000/participer
2. Inscris un email test
3. Va sur http://localhost:3000/admin/newsletter
4. Tu devrais voir l'email !

### Sur Vercel
Ajoute les mêmes variables dans:
`vercel.com → Settings → Environment Variables`

---

## Dashboard Admin

Accède à `/admin/newsletter` pour:
- ✅ Voir tous les emails inscrits
- ✅ Date + source de chaque inscription
- ✅ Exporter en CSV

---

## C'est tout ! 🎉

Questions ? Check [SETUP_EMAIL.md](./SETUP_EMAIL.md) pour plus de détails.
