import GitHubCard from './components/GitHubCard';
import renderer from 'react-test-renderer';
import App from './App'
import { render, screen, waitFor } from '@testing-library/react';

test('receives GitHub info for GitHubCard', async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Tanner Rogers', avatar_url: 'https://avatars.githubusercontent.com/u/147564784?v=4'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', {level: 2}))
    expect(gitHubName).toHaveTextContent('Tanner Rogers')
})

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })
  
  test('renders a snapshot of GitHubCard', () => {
    const tree =renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })