import React from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components';

const Img = styled.div`
    z-index: 50;
`;

const Fadein = () => {
    const props = useSpring({
        to: [{opacity: 1, color: '#ffaaee'}, {opacity: 0, color: 'white'}],
        from: {opacity: 0, color: 'red'}
    })
    return (
            <animated.div style={props}><Img><img style={{'margin': 'auto' }} src="images/hello.jpeg" /></Img></animated.div>
    )
}

export default Fadein
