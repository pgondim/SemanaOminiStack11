import React from 'react';



/*Propriedades
 - Quase a mesma coisa que atributos no HTML
 - São atributos do HTML passados para os componentes do React
 - As proriedades são passadas como parâmetro para o componente
*/

//Desse jeito que a propriedade foi parametrizada, chamamos de decomposição de propriedades
//Poderiamos paramatrizar como function Header(props) e chama-la como props.children dentro do header
export default function Header({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

