CREATE TABLE IF NOT EXISTS portfolio_content (
  id text PRIMARY KEY,
  content jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS resume_sync (
  id text PRIMARY KEY,
  drive_file_id text NOT NULL,
  sha256 text NOT NULL,
  mime_type text NOT NULL,
  file_bytes bytea NOT NULL,
  extracted_text text NOT NULL,
  synced_at timestamptz NOT NULL DEFAULT now()
);
