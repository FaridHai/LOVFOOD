import styled from "styled-components/macro";
import {Button} from "@primer/components";

export default function HomePage() {

    const handleSubmit = event => {
        event.preventDefault()

    }

   return (
       <Wrapper>
        <form onSubmit={handleSubmit}>
            <Wrapper>
                    <input type="text" placeholder="Incredients"></input>
                <Button>Search</Button>
            </Wrapper>
        </form>
    </Wrapper>
)
}

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
        
    *:not(img):not(a){
    margin: 10px;
    }
`