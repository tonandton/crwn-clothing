import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
    width: 29px;
    height: 29px;
`;

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    bottom: 9px;
`;
