-- criar tabela

-- criar a tabela de animais com os campos: nome, espécie e data de nascimento
-- os principais tipos do sql
-- VARCHAR -> texto
-- INT, DOUBLE -> valores numéricos
-- DATE -> datas

CREATE TABLE animal (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(50) NOT NULL UNIQUE,
    especie VARCHAR(50),
    data_nascimento DATE 
);

-- SELECT -> comando que busca os dados no database

SELECT *FROM animal;

-- WHERE -> especificarr qual(is) registros queremos

SELECT * FROM animal WHERE especie = 'Gato';

SELECT * FROM animal WHERE data_nascimento > '2020-01-01'; 


