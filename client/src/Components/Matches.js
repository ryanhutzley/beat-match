import { Card } from 'react-bootstrap'
import MatchCard from './MatchCard'

function Matches(props) {
    const {user} = props
    console.log(props)
    return (
        <div class="container">
            <h2>{user.username}'s Matches</h2>
            <MatchCard/>
        </div>
    )
}

export default Matches