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

## 2. Google Sheets (Pour la newsletter)

### Étapes de configuration:

1. **Créer un Google Sheet**
   - Va sur https://sheets.google.com
   - Crée une nouvelle feuille
   - Nomme-la "Newsletter Résonance Citoyenne"
   - Dans la première ligne, ajoute ces colonnes:
     - A1: Email
     - B1: Date
     - C1: Source

2. **Créer un Google Apps Script**
   - Dans ton Google Sheet, clique sur "Extensions" → "Apps Script"
   - Supprime tout le code et colle celui-ci:

   ```javascript
   function doPost(e) {
     try {
       // Ouvre la feuille de calcul
       var sheet = SpreadsheetApp.getActiveSheet();

       // Parse les données reçues
       var data = JSON.parse(e.postData.contents);

       // Ajoute une nouvelle ligne
       sheet.appendRow([
         data.email,
         data.date,
         data.source || 'website'
       ]);

       // Retourne succès
       return ContentService
         .createTextOutput(JSON.stringify({success: true}))
         .setMimeType(ContentService.MimeType.JSON);

     } catch(error) {
       return ContentService
         .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }

   function doGet(e) {
     return ContentService.createTextOutput("Newsletter API is running!");
   }
   ```

3. **Déployer le script**
   - Clique sur "Déployer" → "Nouveau déploiement"
   - Type: "Application Web"
   - Execute as: "Moi"
   - Who has access: "Tout le monde"
   - Clique "Déployer"
   - **IMPORTANT:** Copie l'URL qui apparaît

4. **Ajouter l'URL dans .env.local:**
   ```
   NEXT_PUBLIC_GOOGLE_SHEETS_URL=ton_url_google_apps_script
   ```

5. **Tester**
   - Va sur l'URL dans ton navigateur
   - Tu devrais voir: "Newsletter API is running!"

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
   - Check ton Google Sheet, l'email devrait apparaître

---

## 🚨 Important pour la production

Ajoute ces variables d'environnement dans Vercel:
1. Va sur vercel.com → ton projet → Settings → Environment Variables
2. Ajoute les 4 variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_GOOGLE_SHEETS_URL`

---

## ⚠️ Sans configuration

Si tu ne configures pas ces services:
- **Contact form:** Affiche un message demandant d'envoyer manuellement à contact.resonancecitoyenne@gmail.com
- **Newsletter:** Affiche un message demandant d'envoyer un email avec "Newsletter" comme objet

Le site fonctionne quand même, mais sans automatisation !