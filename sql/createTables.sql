CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  username text UNIQUE,
  avatar_url text,
  website text,
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE posts (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid REFERENCES profiles(id),
  title text NOT NULL,
  content text,
  created_at timestamp with time zone DEFAULT now()
);