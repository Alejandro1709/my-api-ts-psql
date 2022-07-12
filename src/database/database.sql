CREATE DATABASE myadvisor;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  website VARCHAR(50) NOT NULL
);

INSERT INTO restaurants (name, address, website) VALUES 
                        ('El Charrua', 'Av. Javier Prado Este 5898, La Molina 15023', 'elcharrua.com'),
                        ('El Hornero', 'Av. Circunvalación del Golf los Inkas 408, La Molina 00012', 'elhornero.com.pe'),
                        ('Tanta', 'Av. Primavera 698, Santiago de Surco 15037', 'tantaperu.com'),
                        ('Punta Sal', 'Av. El Golf Los Incas 376, Lima 15023', 'puntasal.com');