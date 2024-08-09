import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Favoritos } from './Favoritos';
import { Formulario } from './Form';
import { Footer } from '../shared/Footer/Footer';

export const Main = () => {
      return (

            <>
                  <Favoritos />
                  <Formulario />
                  <Footer />
            </>    
      );
}


