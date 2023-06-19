import ReactDOM from "react-dom";
import Card from "../../components/Card/Card";
import { Notification } from "../../components/Notification/Notification";
import { Container, Row, Col } from "react-bootstrap";
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";


export const Homepage = () => {
    return (
        <div>
            <ModalCreateFolder open={false} />
            <ModalSavePin open={false} />
            <Notification 
            message="Criado com sucesso"
            onClose={() => {console.log("Clicou em fechar.");}}
            />
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}>
                        <Card
                            image="https://picsum.photos/200/300?53"
                            title="Teste"
                            total="0"
                        />
                    </Col>
                    <Col xs={12} md={2}>
                        <Card
                            image="https://picsum.photos/200/300?53"
                            title="Teste"
                            total="0"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
