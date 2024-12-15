import React from 'react';
import './Footer.css'; // Создай CSS файл для стилей

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Связаться с разработчиком</h4>
                    <p>Email: egshik@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Аркендар НРИ. Все права защищены</p>
            </div>
        </footer>
    );
}

export default Footer;