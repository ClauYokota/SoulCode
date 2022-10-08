-- JOIN

SELECT animal.nome, animal.especie, cliente.nome, cliente.email
FROM animal JOIN cliente
ON animal.id = cliente.animal_id;

SELECT animal.nome, animal.especie, cliente.nome, cliente.email
FROM animal LEFT JOIN cliente
ON animal.id = cliente.animal_id;

SELECT animal.nome, animal.especie, cliente.nome, cliente.email
FROM animal RIGHT JOIN cliente
ON animal.id = cliente.animal_id;