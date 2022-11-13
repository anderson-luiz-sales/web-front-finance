import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex; 
	width: 100%; 
	height: 100%;
  overflow: auto; 
  background-color: #3380D0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;    
    display: flex;
    color: #ffffff;
    font-size: 16px;

    margin: 15px 0 5px 10px;

    &:hover {
      font-weight: 900;
    }
`;

export const IconHouse = styled.div`
    display: flex;
    color: #ffffff;
    font-size: 16px;
    margin: 15px 0 5px 40px;
`;

export const IconCashCoin = styled.div`
    display: flex;
    color: #ffffff;
    font-size: 16px;
    margin: 18px 0 5px 40px;
`;

export const IconCalendar= styled.div`
    display: flex;
    color: #ffffff;
    font-size: 16px;
    margin: 15px 0 5px 40px;
`;

export const IconCashClipboard2Data= styled.div`
    display: flex;
    color: #ffffff;
    font-size: 16px;
    margin: 15px 0 5px 40px;
`;