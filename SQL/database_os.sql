create database synapse_os;

use synapse_os;

create table if not exists ordem_servico (
	id_os int not null auto_increment primary key,
    nome_solicitante varchar(255),
	email_solicitante varchar(255), 
    data_solicitacao date,
    descricao text,
    nivel_prioridade boolean, 
    servico_terceirizado boolean, 
    data_inicial_servico date, 
    data_final_servico date, 
    material_utilizado varchar(1000), 
    relatorio text, 
    feedback boolean,
    status_os enum("Solicitada", "Aprovada", "Em andamento", "Concluída"),
    setor int, 
    foreign key (setor) references setor (id_setor),
    categoria int, 
    foreign key (categoria) references categoria (id_categoria)
);



create table if not exists usuario (
	id_usuario int not null auto_increment primary key,
    nome varchar(255), 
    email varchar(255), 
    senha varchar(255), 
    terceirizado boolean,
    empresa varchar(255),
    cargo boolean, 
    categoria int, 
    foreign key (categoria) references categoria (id_categoria)
);

create table if not exists instituicao (
	id_instituicao int not null auto_increment primary key, 
    nome_instituicao varchar(255)
);

create table if not exists setor (
	id_setor int not null auto_increment primary key,
    nome_setor varchar(255), 
    id_instituicao int,
    foreign key (id_instituicao) references instituicao (id_instituicao)
);

create table if not exists categoria (
	id_categoria int not null auto_increment primary key, 
    nome_categoria varchar(50)
);

show tables;
