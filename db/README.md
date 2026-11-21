# Neon portfolio content

`portfolio_content` is the live source for the profile, metrics, experience, skills, company projects, personal projects, and education. The Next.js page reads it through `/api/portfolio` with caching disabled, so an edit in Neon appears on the next page request without a redeploy.

Run `npm run db:seed` to create the tables and insert the starter portfolio once. The seed uses `ON CONFLICT DO NOTHING`; rerunning it will not overwrite edits made in Neon.

To edit content, open the Neon SQL Editor for the `production` branch and update the JSONB document in `portfolio_content` where `id = 'main'`. Example for changing the summary:

```sql
UPDATE portfolio_content
SET content = jsonb_set(content, '{profile,summary}', to_jsonb('Your updated summary'::text)),
    updated_at = now()
WHERE id = 'main';
```

`resume_sync` stores a PDF snapshot exported from the public Google Drive résumé, its SHA-256, and extracted text. `npm run db:sync-resume` supports both uploaded PDF files and Google Docs documents. For Google Docs it exports the document as PDF; for uploaded PDFs it downloads the file directly. Run the command after changing the Drive résumé. The sync is idempotent and only replaces the saved copy when the file hash changes. This command can be scheduled by the app's hosting provider once its deployment and secret storage are configured.

The PDF is currently shared for link access, so this sync uses its Drive file ID without a Google API secret. If Drive sharing is restricted later, configure Drive API credentials and update the downloader before running the sync.

Static image files (portrait, project screenshots, and logos) remain under `public/`; the database stores their paths. Replace these files in the app when changing the image assets.


The profile's `availability` object controls the small status pill beside the location. To show that you are open to work, update it in Neon:

```sql
UPDATE portfolio_content
SET content = jsonb_set(content, '{profile,availability}', '{"status":"open","label":"Open to work"}'::jsonb),
    updated_at = now()
WHERE id = 'main';
```

To switch back, set the value to `{"status":"employed","label":"Currently at Newtuple Technologies"}`.


Project items are stored in `content.projects`. Set `kind` to an array such as `["Freelance", "Full stack"]` to show a project under the Freelance filter. Use the same fields as neighboring records (`name`, `type`, `description`, `image`, `stack`, `kind`, `demo`, and `code`).
