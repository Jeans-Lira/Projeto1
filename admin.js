/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
    margin: 0;
    padding: 0;
}

/* Cabeçalho */
header {
    background-color: #007BFF;
    color: white;
    padding: 1rem 0;
    text-align: center;
}

header nav h1 {
    font-size: 1.8rem;
    margin: 0;
}

header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 1rem 0 0;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
}

header nav ul li a:hover {
    text-decoration: underline;
}

/* Main Section */
main {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

main h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #007BFF;
}

/* Formulário */
form {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

form input,
form textarea,
form button {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

form input[type="tel"]::placeholder {
    color: #aaa;
}

form textarea {
    resize: vertical;
    height: 100px;
}

form button {
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s;
}

form button:hover {
    background-color: #0056b3;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 15px 0;
    margin-top: 30px;
}

footer p {
    margin: 0;
    font-size: 0.9rem;
}

/* Responsividade */
@media (max-width: 768px) {
    header nav ul {
        flex-direction: column;
        gap: 10px;
    }

    form button {
        font-size: 1rem;
        padding: 12px;
    }
}
