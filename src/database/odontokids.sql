CREATE DATABASE `odontokids`;
USE `odontokids`;

CREATE TABLE `responsavel` (
	`Id` INTEGER NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(80) NOT NULL,
	`email` VARCHAR(150) NOT NULL,
	`cpf` VARCHAR(11) NOT NULL,
	`telefone` VARCHAR(11) NOT NULL,
	`nasc` DATE NOT NULL,
	`genero` VARCHAR(30) NOT NULL,
	`senha` VARCHAR(80) NOT NULL,
	PRIMARY KEY(`Id`)
);


CREATE TABLE `dependentes` (
	`id_responsavel` INTEGER NOT NULL,
	`nome` VARCHAR(80) NOT NULL,
	`nasc` DATE NOT NULL,
	`cpf` VARCHAR(11) NOT NULL,
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`sexo` VARCHAR(20) NOT NULL,
	PRIMARY KEY(`id`)
);


CREATE TABLE `consulta` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`horario` TIME NOT NULL,
	`data` DATE NOT NULL,
	`id_dependente` INTEGER NOT NULL,
	`cod_tratamento` INTEGER NOT NULL,
	`relatorio` VARCHAR(500) NOT NULL,
	`id_medico` INTEGER NOT NULL,
	`status` VARCHAR(20) NOT NULL,
	PRIMARY KEY(`id`)
);


CREATE TABLE `prontuario` (
	`id_consulta` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`arquivo_prontuario` BLOB
);


CREATE TABLE `tratamento` (
	`Id` INTEGER NOT NULL AUTO_INCREMENT,
	`Tratamento` VARCHAR(50) NOT NULL,
	`Descricao` VARCHAR(200) NOT NULL,
	PRIMARY KEY(`Id`)
);


CREATE TABLE `medico_tratamento` (
	`Id_tratamento` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`id_medico` INTEGER NOT NULL
);


CREATE TABLE `medico` (
	`Id` INTEGER NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(80) NOT NULL,
	`email` VARCHAR(150) NOT NULL,
	`cpf` VARCHAR(11) NOT NULL,
	`telefone` VARCHAR(11) NOT NULL,
	`nasc` DATE NOT NULL,
	`genero` VARCHAR(50) NOT NULL,
	`senha` VARCHAR(70) NOT NULL,
	`CRM` VARCHAR(10) NOT NULL,
	`cod_especialidade` INTEGER NOT NULL,
	PRIMARY KEY(`Id`)
);


CREATE TABLE `especialidade` (
	`Id` INTEGER NOT NULL AUTO_INCREMENT,
	`funcao` VARCHAR(50) NOT NULL,
	`descricao` VARCHAR(200) NOT NULL,
	PRIMARY KEY(`Id`)
);


ALTER TABLE `dependentes`
ADD FOREIGN KEY(`id_responsavel`) REFERENCES `responsavel`(`Id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `consulta`
ADD FOREIGN KEY(`id_dependente`) REFERENCES `dependentes`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `prontuario`
ADD FOREIGN KEY(`id_consulta`) REFERENCES `consulta`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `consulta`
ADD FOREIGN KEY(`cod_tratamento`) REFERENCES `tratamento`(`Id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `medico_tratamento`
ADD FOREIGN KEY(`Id_tratamento`) REFERENCES `tratamento`(`Id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `medico_tratamento`
ADD FOREIGN KEY(`id_medico`) REFERENCES `medico`(`Id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `medico`
ADD FOREIGN KEY(`cod_especialidade`) REFERENCES `especialidade`(`Id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `consulta`
ADD FOREIGN KEY(`id_medico`) REFERENCES `medico`(`Id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
