import Container from "react-bootstrap/Container";
import { ListGroup } from "../../components/ListGroup/ListGroup";

export const MinhasPastasPage = () => {
    return (
        <Container>
            <ListGroup
                items={[
                    {
                        title: "Matemática",
                        total: 3,
                    },
                    {
                        title: "Javascript",
                        total: 10,
                    },
                ]}
            />
        </Container>
    );
};
