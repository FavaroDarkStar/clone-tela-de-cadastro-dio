import React from "react";

import { ButtonContainer } from "./styles";
import { IButton } from './types';

const Button = ({tittle, variant="primary", onClick}: IButton) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {tittle}
        </ButtonContainer>
    )
}

export {Button};