import { Container, Text, Title } from '@mantine/core';

const ErrorPage = () => {
    return (
        <Container size="sm">
            <Title order={1} style={{ marginBottom: '1rem' }}>
                404 Not Found
            </Title>
            <Text>Oops! The page you're looking for does not exist.</Text>
        </Container>
    );
};

export default ErrorPage;