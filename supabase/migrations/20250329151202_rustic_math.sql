/*
  # Update customers table RLS policies

  1. Changes
    - Drop existing RLS policies
    - Add new policies that properly handle authentication state
    - Allow authenticated users to insert their own data
    - Allow authenticated users to read their own data

  2. Security
    - Ensure users can only access their own data
    - Verify user is authenticated before any operations
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own customer data" ON customers;
DROP POLICY IF EXISTS "Users can insert own customer data" ON customers;

-- Create new policies
CREATE POLICY "Enable read access for authenticated users"
ON customers FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Enable insert access for authenticated users"
ON customers FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);