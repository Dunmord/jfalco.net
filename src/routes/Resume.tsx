import { Badge, Container, Group, Paper, Text, Timeline, Title } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';

const Resume = () => {
return (
    <Container size="md" my={40} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Title order={1}>Javier Falcón</Title>
        <Text size="sm" color="dimmed">SOFTWARE ENGINEER - Seattle, WA</Text>
        <Text size="sm" color="dimmed">javierfalconc@gmail.com</Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Title order={2}>Professional Summary</Title>
            <Text size="sm">
                Dynamic Software Development Engineer with extensive experience in front-end and back-end technologies, 
                adept at leading and delivering high-performance systems in large organizations like Amazon.
            </Text>

            <Group mt={30} mb={20} style={{ flexDirection: 'column', alignItems: 'start' }}>
                <Title order={3} style={{ width: '100%', textAlign: 'left' }}>Education</Title>
                <Timeline active={1} bulletSize={24} lineWidth={2}>
                    <Timeline.Item bullet={<IconBriefcase size={12} />} title="Bachelor's of Science">
                        Computer Systems Development Applications Engineer <Text size="xs" color="dimmed">Year of Graduation</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Associate Degree">
                        Visualization Programming <Text size="xs" color="dimmed">Year of Graduation</Text>
                    </Timeline.Item>
                </Timeline>
            </Group>

            <Group mt={30}>
                <Title order={3}>Professional Experience</Title>
                <Timeline active={0} bulletSize={24} lineWidth={2}>
                    <Timeline.Item bullet={<IconBriefcase size={12} />} title="Software Development Engineer 2 - Amazon Inc.">
                        Focused on commerce team projects, including integration with third-party systems and payment systems. <Text size="xs" color="dimmed">Nov 2021 - Present</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Backend Software Development Engineer - Zillow Group">
                        Developed and maintained systems primarily in AWS, enhancing system observability. <Text size="xs" color="dimmed">Aug 2021 - Nov 2021</Text>
                    </Timeline.Item>
                    {/* Additional experiences can be added here with their respective dates */}
                </Timeline>
            </Group>

            <Group mt={30}>
                <Title order={3}>Skills</Title>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                    <Badge color="pink" variant="light">Java</Badge>
                    <Badge color="grape" variant="light">Node.js/TypeScript</Badge>
                    <Badge color="teal" variant="light">AWS</Badge>
                    <Badge color="blue" variant="light">React</Badge>
                    <Badge color="orange" variant="light">Unity C#</Badge>
                    <Badge color="green" variant="light">Spring</Badge>
                    <Badge color="red" variant="light">CI/CD</Badge>
                    <Badge color="violet" variant="light">Agile & Kanban</Badge>
                </div>
            </Group>
        </Paper>
    </Container>
);
};

export default Resume;
