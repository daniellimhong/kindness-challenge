import React from 'react';
import styled from 'styled-components';
import { Container, Button, Input, Text } from "../../StyledComponents";

const Card = styled.div`
    border: 1px solid black;
    // margin-top: 20px;
    height: 250px;
    width: 250px;
    border-radius: 20px;
    display: flex;
    margin: 20px 10px 0 10px;

`

const ResourceCard = (props) => {

    return (
        <Card>
            {props.resourceName}
            {props.description}
            {props.category}
            {props.address}
        </Card>
    )
}

export default ResourceCard;