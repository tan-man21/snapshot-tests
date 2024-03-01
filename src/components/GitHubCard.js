import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from 'react';

function GitHubCard() {
    const [gitHubName, setGitHubName] = useState('')
    const [gitHubImg, setGitHubImg] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/tan-man21')
        .then(res => res.json())
        .then(data => {
            setGitHubName(data.name)
            setGitHubImg(data.avatar_url)
        })
    }, [])

    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top' src={gitHubImg} />
            <Card.Body>
                <Card.Title>{gitHubName}</Card.Title>
                <Card.Text>
                    This should be the bio!
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard