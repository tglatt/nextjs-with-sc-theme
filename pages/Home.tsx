import { Component } from "react";
import styled from "../src/theme";

const Box = styled.div`
width: 100%;
height: 100px;
line-height: 100px;
border: 1px solid #EEEEEE;
text-align: center;
border: 1px solid ${props => props.theme.main};
`

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

class Home extends Component {

    public render() {
        return (
            <Box>
                <Button>NextJS + TypeScript + Styled Components + Theme</Button>
            </Box>
        )
    }

}


export default Home;