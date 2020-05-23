# Conflict Prevention

Each time a user updates a template, the value in the `updated_at` column is checked before saving the values to the database.

If the `updated_at` column does not have the same value as when loading the edit form the backend will return an error 409, since the record has been modified by another user, so your data may not be updated.
