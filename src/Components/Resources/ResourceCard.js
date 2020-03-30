import React from "react";
import Emoji from "a11y-react-emoji";
import styled from "styled-components";

const Card = styled.div`
  height: 18rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  background-image: linear-gradient(#ebedee, #fdfbfb);
  flex-wrap: wrap;
  border: 0.2rem solid lightgrey;
  border-radius: 0.5rem;
  box-shadow: 5px 2px 5px 0px lightgrey;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Circle = styled.div`
  margin-top: 10px;
  background-color: white;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  // border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  // margin-left: 5px;
`;

const Bold = styled(Text)`
  font-weight: 700;
`
const StyledEmoji = styled(Emoji)`
  font-size: 40px
`

const StyledLink = styled.a`
  color: black;
`;

const ResourceCard = props => {
  const { emoji, resourceName, description, address } = props;
  return (
    <Card>
      <Circle>
        <StyledEmoji symbol={`${emoji}`} label={resourceName} />
      </Circle>
      <Container>
        <Bold>{resourceName}</Bold>
        <Text>{description}</Text>
        <Text>
          Address:{" "}
          <StyledLink
            target="_blank"
            href={`http://www.google.com/search?q=${address}`}
          >
            {address}
          </StyledLink>
        </Text>
      </Container>
    </Card>
  );
};

export default ResourceCard;
