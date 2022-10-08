-- ATIVIDADE --

-- 1) CRIAR UM DATA BASE COM O NOME EMPRESA
	CREATE DATABASE empresa;
    USE empresa;
    
-- 2) CRIAR UMA TAELA CARGO (ID, NOME, FUNÇÃO)
	CREATE TABLE cargo (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	funcao VARCHAR(200)
	);
    
-- 3) CADASTRAR 4 CARGOS
	INSERT INTO cargo(nome, funcao)
	VALUES ("Diretor Executivo", "Responsável pela gestão da empresa");
    
-- 4) TREINAR OS SELECT, DROP, ALTER, UPDATE E DELETE COM ESSA TABELA
	ALTER TABLE cargo ADD COLUMN salario INT;
    
    SELECT * FROM cargo;
    
    ALTER TABLE cargo DROP COLUMN salario;
    
    UPDATE cargo SET nome = "Diretor de Tecnologia" WHERE id = 3;
    
    DELETE FROM cargo  WHERE id = 4;

-- 5) CRIAR UMA TABELA FUNCIONÁRIO ( ID, NOME, SALÁRIO, CARGO_ID)
			-- O CAMPO CARGO_ID DEVERÁ SER A FOREIGN KEY QUE FARÁ O RELACIONAMENTO COM A TAELA DE CARGOS
            
	CREATE TABLE funcionario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario INT, 
    cargo_id INT,
    FOREIGN KEY(cargo_id) REFERENCES cargo(id)
    );
    
-- 6) CADASTRAR 4 FUNCIONÁRIOS COM OS RESPECTIVOS CARGOS
	INSERT INTO funcionario(nome, salario, cargo_id)
    VALUES ("Marcia", 6000, 3);
    
-- 6.5) CADASTRAR MAIS 2 FUNCIONÁRIOS SEM OS SEUS CARGOS
	-- OK
-- 7) TREINAR E TESTAR O JOIN (OS 3 TIPOS)
	SELECT cargo.nome, cargo.funcao, funcionario.nome, funcionario.salario
    FROM cargo JOIN funcionario
    ON cargo.id = funcionario.cargo_id;
    
    SELECT cargo.nome, cargo.funcao, funcionario.nome, funcionario.salario
    FROM cargo LEFT JOIN funcionario
    ON cargo.id = funcionario.cargo_id;
    
    SELECT cargo.nome, cargo.funcao, funcionario.nome, funcionario.salario
    FROM cargo RIGHT JOIN funcionario
    ON cargo.id = funcionario.cargo_id;

-- DESAFIO 	-- CRIAR UMA TERCEIRA TABELA PARA FAZER O JOIN COM 3 TABELAS 
CREATE TABLE dados_funcionarios(
email VARCHAR(30),
contato VARCHAR(30),
id_funcionario INT NOT NULL,
FOREIGN KEY (id_funcionario) REFERENCES funcionario(id)
);

INSERT INTO dados_funcionarios(email, contato, id_funcionario)
VALUES ("helena@gmail.com", 119888888, 1);

			-- TESTAR O SUM E O GROUP
            







