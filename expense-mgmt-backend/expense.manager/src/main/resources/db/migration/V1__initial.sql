
CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    category_code VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    expense_date DATE NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    description TEXT,
    notes TEXT,
    tags VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(25) NOT NULL,
    category_code VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    total_expense NUMERIC(10, 2) NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS currency (
    CurrencyID INT PRIMARY KEY,
    CurrencyCode CHAR(3) NOT NULL,
    CurrencyName VARCHAR(50) NOT NULL,
    NumericCode INT,
    MinorUnit INT,
    ExchangeRate DECIMAL(10, 4),
    PeggedTo CHAR(3),
    LastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



