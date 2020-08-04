import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://images.unsplash.com/photo-1561388991-da11c4d99c56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="Eric Mariot"/>
                <div>
                    <strong>Eric Mariot</strong>
                    <span>Química</span>
                </div>
            </header>

             <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /> <br />
                Apaixonado por explodir as coisas em laboratório e por mudar a vida das pessoas através de experciências.
                Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
                    
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;