# 📧 Configuration Email & Newsletter

## 1. EmailJS (Pour le formulaire de contact)

### Étapes de configuration:

1. **Créer un compte EmailJS**
   - Va sur https://www.emailjs.com/
   - Inscris-toi gratuitement (200 emails/mois gratuits)

2. **Ajouter ton Gmail**
   - Dans EmailJS Dashboard → "Email Services"
   - Clique "Add New Service"
   - Choisis "Gmail"
   - Connecte ton compte: contact.resonancecitoyenne@gmail.com
   - Note ton `SERVICE_ID`

3. **Créer un template**
   - Va dans "Email Templates"
   - Clique "Create New Template"
   - Configure comme ça:

   **Subject:** Nouveau message de {{subject}}

   **Content:**
   ```
   Nouveau message depuis le site Résonance Citoyenne !

   De: {{from_name}}
   Email: {{from_email}}
   Sujet: {{subject}}

   Message:
   {{message}}
   ```

   - Sauvegarde et note ton `TEMPLATE_ID`

4. **Récupérer ta clé publique**
   - Va dans "Account" → "API Keys"
   - Copie ta "Public Key"

5. **Créer le fichier .env.local**
   ```bash
   # Dans le dossier website/
   cp .env.local.example .env.local
   ```

6. **Ajouter tes clés dans .env.local:**
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=ton_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=ton_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ta_public_key
   ```

---

## 2. Supabase (Pour la newsletter)

### Étapes de configuration:

1. **Créer un compte Supabase**
   - Va sur https://supabase.com
   - Inscris-toi gratuitement (très généreux en plan gratuit)
   - Clique "New Project"

2. **Créer ton projet**
   - Nom: "Resonance Citoyenne"
   - Database Password: (choisis un mot de passe sécurisé et garde-le !)
   - Region: Europe West (Ireland) - le plus proche
   - Clique "Create new project"
   - ⏳ Attends 2-3 minutes que le projet se crée

3. **Créer la table newsletter**
   - Dans le menu à gauche, clique sur "Table Editor"
   - Clique "Create a new table"
   - Nom de la table: `newsletter_subscriptions`
   - Active "Enable Row Level Security (RLS)" ✅
   - Ajoute ces colonnes (les colonnes `id` et `created_at` sont déjà là):
     - `email` (type: text) - REQUIRED ✅
     - `source` (type: text) - valeur par défaut: 'website'
   - Clique "Save"

4. **Configurer les permissions (RLS)**
   - Dans la table que tu viens de créer, clique sur le bouton "RLS"
   - Clique "New Policy"
   - Template: "Enable insert for everyone"
   - Policy name: "Allow anonymous inserts"
   - Clique "Review" puis "Save policy"

5. **Récupérer tes clés API**
   - Dans le menu à gauche, clique sur "Settings" (icône engrenage)
   - Puis "API"
   - Copie:
     - `Project URL` → c'est ton `SUPABASE_URL`
     - `anon public` (dans API Keys) → c'est ton `SUPABASE_ANON_KEY`

6. **Ajouter dans .env.local:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...ton_token
   ```

---

## 3. Test complet

1. **Redémarre le serveur dev:**
   ```bash
   npm run dev
   ```

2. **Teste le formulaire de contact:**
   - Va sur http://localhost:3000/contact
   - Remplis et envoie
   - Tu devrais recevoir un email à contact.resonancecitoyenne@gmail.com

3. **Teste la newsletter:**
   - Va sur http://localhost:3000/participer#newsletter
   - Entre un email et inscris-toi
   - Va sur http://localhost:3000/admin/newsletter pour voir les inscriptions
   - Ou check dans Supabase → Table Editor → newsletter_subscriptions

---

## 🚨 Important pour la production

Ajoute ces variables d'environnement dans Vercel:
1. Va sur vercel.com → ton projet → Settings → Environment Variables
2. Ajoute les 5 variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## ⚠️ Sans configuration

Si tu ne configures pas ces services:
- **Contact form:** Affiche un message demandant d'envoyer manuellement à contact.resonancecitoyenne@gmail.com
- **Newsletter:** Affiche un message demandant d'envoyer un email avec "Newsletter" comme objet

Le site fonctionne quand même, mais sans automatisation !