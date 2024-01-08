import StyledComponents from 'styled-components'

export default function StyledComponents(){
    const Container=styled.div`
    width: 80%;
    margin: auto;
    text-align: center;`;
    
    const Title=styled.h1`
    font-size: 3em;
    color: red;`;

    return(
        <>
        <h1>styled components</h1>
        <Container>
            <Title>Hello World</Title>
        </Container>
        </>
    )
    
}