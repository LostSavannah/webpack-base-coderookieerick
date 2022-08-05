import '../css/componentes.css';
import dummyImage from '../assets/img/img_800_x_400.png';

export const saludar = (nombre) => {
    console.log("Creando etiqueta h1");

    const h1 = document.createElement('h1');
    h1.innerText = `Hey ${nombre}! How do you do bro?`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = dummyImage;
    document.body.append(img);
}