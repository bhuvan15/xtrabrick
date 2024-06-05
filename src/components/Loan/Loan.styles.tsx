import styled from 'styled-components';
import { theme } from '@/constants/basetheme';

export const Container = styled.div`
 width: 100vw;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 89px;
`;

export const BankingPartnersWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 min-height: 350px;
 width: 95%;
 margin: 0 auto;

 @media (max-width: 768px) {
 flex-direction: column;
 }
`;

export const PartnersFilter = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 flex: 0.2;

 @media (max-width: 768px) {
 flex-direction: row;
 flex-wrap: wrap;
 margin-bottom: 20px;
 }
`;

export const FilterItem = styled.div<{ active: boolean }>`
 width: 181px;
 height: 44px;
 border-radius: 15px;
 border: 1px solid rgba(0, 0, 0, 0.2);
 display: flex;
 justify-content: center;
 align-items: center;
 margin-bottom: 20px;
 cursor: pointer;

 p {
 font-size: 18px;
 color: ${({ active }) => (active ? '#0173B0' : '#545454')};
 font-weight: 400;
 font-family: ${theme.fonts.lato};
 }

 @media (max-width: 768px) {
 margin: 5px;
 }
`;

export const FilteredData = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: center;
 flex-wrap: wrap;
 flex: 0.8;
 margin: 0px 20px;
 border-left: 1.5px solid rgba(0, 0, 0, 0.2);
 padding-left: 15px;

 @media (max-width: 768px) {
 border-left: none;
 margin: 0;
 padding: 0;
 }
`;

export const BankCard = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 15px;
 border: 1px solid rgba(0, 0, 0, 0.2);
 padding: 10px 10px;
 width: 350px;
 margin: 10px 15px;

 @media (max-width: 768px) {
 width: 100%;
 margin: 5px 0;
 }
`;

export const CalculatorWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 padding: 0 65px;

 @media (max-width: 768px) {
 flex-direction: column;
 padding: 0 15px;
 }
`;

export const CalculatorContainer = styled.div`
 width: 90%;
 border: 1px solid rgba(0, 0, 0, 0.2);
 border-radius: 15px;
 min-height: 350px;
 display: flex;
 align-items: center;
 justify-content: flex-start;
 flex-direction: column;
 padding: 40px;
 margin-right: 20px;

 @media (max-width: 768px) {
 padding: 20px;
 width: 100%;
 margin-right: 0;
 }
`;

export const CalculatorHeader = styled.div`
 height: 49px;
 width: 394px;
 display: flex;
 align-items: center;
 justify-content: center;
 border: 1px solid rgba(0, 0, 0, 0.2);
 border-radius: 15px;

 p {
 font-size: 22px;
 font-weight: 400;
 font-family: ${theme.fonts.lato};
 }

 @media (max-width: 768px) {
 width: 100%;
 }
`;

export const CalculatorText = styled.p`
 font-size: 18px;
 font-weight: 400;
 font-family: ${theme.fonts.lato};
 width: 100%;
 margin-top: 45px;
`;

export const CalculatorInputGroup = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 margin-top: 45px;
 margin-bottom: 25px;

 @media (max-width: 768px) {
 flex-direction: column;
 }
`;

export const CalculatorInput = styled.div<{width?: string; paddingLeft?: string}>`
 display: flex;
 flex-direction: column;
 width: ${({width = '45%'}) => width};

 p {
 font-size: 16px;
 font-weight: 400;
 font-family: ${theme.fonts.lato};
 margin-bottom: 15px;
 }

 input {
 width: 100%;
 padding: 10px 20px;
 padding-left: ${({paddingLeft = '20px'}) => paddingLeft};
 height: 45px;
 border: 1px solid #AEBED7;
 border-radius: 15px;
 }

 @media (max-width: 768px) {
 width: 100%;
 margin-bottom: 15px;
 }
`;

export const SummaryContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 margin-top: 25px;

 p {
 font-size: 16px;
 font-weight: 400;
 font-family: ${theme.fonts.lato};
 margin-bottom: 15px;
 }
`;

export const SummaryGrid = styled.div`
 width: 100%;
 padding: 30px 20px;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(2, 1fr);
 gap: 40px;
 border-radius: 15px;
 border: 1px solid #AEBED7;

 div {
 display: flex;
 align-items: center;
 justify-content: flex-start;

 p {
 font-size: 18px;
 font-family: ${theme.fonts.lato};
 font-weight: 400;

 &:last-child {
 color: #0173B0;
 margin-left: auto;
 }
 }
 }

 @media (max-width: 768px) {
 grid-template-columns: 1fr;
 grid-template-rows: repeat(4, 1fr);
 gap: 20px;
 }
`;

export const QuestionsWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
`;

export const QuestionCard = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 50px;
 border-radius: 15px;
 border: 1px solid rgba(0, 0, 0, 0.2);
 width: 414px;
 margin: 0px 25px 25px 0;
 cursor: pointer;

 p {
 font-size: 22px;
 font-weight: 400;
 font-family: ${theme.fonts.lato};
 text-align: center;
 }

 @media (max-width: 768px) {
 width: 100%;
 margin: 10px 0;
 }
`;

export const ReadMoreCard = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 40px;
 border-radius: 15px;
 border: 1px solid rgba(0, 0, 0, 0.2);
 width: 414px;
 margin: 0px 25px 25px 0;
 cursor: pointer;

 p {
 font-size: 24px;
 font-weight: 300;
 font-family: ${theme.fonts.lato};
 text-align: center;
 letter-spacing: 0.2rem;
 }

 @media (max-width: 768px) {
 width: 100%;
 margin: 10px 0;
 }
`;
export const ModalOverlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.5);
 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 99999990;
`;

export const ModalContent = styled.div<{height?: string; width?: string}>`
 background: #fff;
 padding: 30px;
 max-width: ${({width = '500px'}) => width};
 width: 100%;
 border-radius: 10px;
 position: relative;
 max-height: ${({height = '500px'}) => height};
 overflow: auto;

 h3 {
 font-size: 16px;
 font-family: ${theme.fonts.lato};
 margin: 15px 0px;
 font-weight: 400;
 }

 ol {
 padding-left: 20px;
 font-size: 16px;
 font-family: ${theme.fonts.lato};
 font-weight: 400;
 margin: 15px 0px;
 }
 p {
 font-size: 16px;
 font-family: ${theme.fonts.lato};
 margin: 15px 0px;
 font-weight: 400;
 }
`;

export const CloseButton = styled.button`
 position: absolute;
 top: 10px;
 right: 10px;
 background: none;
 border: none;
 font-size: 20px;
 cursor: pointer;
 font-size: 24px;
`;

export const TableWrapper = styled.div`
 overflow-x: auto;
`;

export const Table = styled.table`
 width: 100%;
 border-collapse: separate;
 /* border-spacing: 0px 10px; */
 
 tr {
 text-align: start;

 /* Apply background color to alternate rows */
 &:nth-child(even) {
 background-color: #F9FAFB !important; /* Adjust the color as needed */
 }
 }
`;

export const Th = styled.th`
 padding: 15px;
 font-family: ${theme.fonts.lato};
 font-weight: 400;
 color: ${theme.colors.white};
 text-align: start;
 font-size: 16px;
`;

export const Td = styled.td`
 padding: 15px;
 font-family: ${theme.fonts.lato};
 font-size: 12px;
 border-bottom: 1px solid #000000;
 margin: 5px; /* Add margin for space between borders of each cell */
 &:first-child {
 width: 55%;
 }
`;
