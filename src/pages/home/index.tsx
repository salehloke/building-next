import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div class="container">
            <p>test</p>

            <Stack direction="horizontal" gap={3}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        </div>

    )
}