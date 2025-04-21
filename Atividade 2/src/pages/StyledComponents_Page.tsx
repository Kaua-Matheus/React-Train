// React
import { useEffect, useState } from 'react';

// Axios
import axios from 'axios';

// Components
import { Container, Card, ProfileImage, InfoContainer, Button } from '../assets/styles/style';

function StyledComponents() {
    const url = "https://api.github.com/users/Kaua-Matheus";

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(
    {
        perfil: "",
        nome: "",
        bio: "",
        public_repo: "",
        html_url: "",
    }
    );

    useEffect(() => {
    const getData = async () => {
        const response = await axios.get(url);
        const formattedData = {
        perfil: response.data.avatar_url,
        nome: response.data.name,
        bio: response.data.bio,
        public_repo: response.data.public_repos,
        html_url: response.data.html_url,
        };
        setData(formattedData);
        setLoaded(true);
    };
    getData();
    }, []);

    return (
        <Container>
            {loaded ? (
            <Card>
                <ProfileImage src={data.perfil} alt="Imagem do Perfil" />

                <InfoContainer>
                <p>
                    {data.nome}
                </p>
                <hr />
                <p>
                    {data.bio || "Sem biografia disponível"}
                </p>
                <hr />
                <p>
                    Repositórios Públicos: {data.public_repo}
                </p>
                </InfoContainer>

                <Button 
                href={data.html_url} target="_blank">
                    Ver Perfil no GitHub
                </Button>
            </Card>
            ) : (
            <div>Carregando...</div>
            )}
        </Container>
    );
}

export default StyledComponents;