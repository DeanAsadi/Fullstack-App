INSERT INTO products (name, image, price) VALUES ($1, $2, $3) 
RETURNING *;