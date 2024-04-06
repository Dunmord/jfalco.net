import { Anchor, AppShell, Container, Text } from '@mantine/core';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root: React.FC = () => {

    return (
        <AppShell>
            <Container size="lg">
                <nav>
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                        <li>
                            <Anchor component={Link} to="/">
                                <Text size="lg">Resume</Text>
                            </Anchor>
                        </li>
                        <li>
                            <Anchor component={Link} to="https://chat.openai.com/g/g-T6OuKuJxz-jfalco">
                                <Text size="lg">Ask jfalco GPT</Text>
                            </Anchor>
                        </li>
                    </ul>
                </nav>
                <Outlet/>
            </Container>
        </AppShell>
    );
};

export default Root;