CREATE TABLE IF NOT EXISTS prenotazioni (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(255) NOT NULL,
    data_prenotazione DATE NOT NULL,
    ora_prenotazione TIME NOT NULL,
    note TEXT
)