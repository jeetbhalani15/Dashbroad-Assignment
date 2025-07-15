import styled from "styled-components";

export const DataContainer = styled.div`
height: 100%;
padding: 20px;
display: flex;
flex-direction: column;
gap: 16px;
overflow: auto;
max-height: 90vh;
background-color: ${({ isDarkMode }) => (isDarkMode ? '#1C1C1C' : 'white')};

&::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: gray #f0f0f0;
`
export const DataTitle = styled.div`
font-size: 14px;
font-weight: 600;
line-height: 20px;
color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : 'black')};
`
export const SectionOneWrap = styled.div`
display: flex;
align-items: center;
gap:20px;
width: 100%;
@media (max-width: 429px) { 
  flex-direction: column;
}
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  color: #1C1C1C;
  font-weight: 400;
  background-color: ${({ type, isDarkMode }) => {
    if (isDarkMode && (type === 'orders' || type === 'revenue')) {
      return '#FFFFFF0D';
    }
    switch (type) {
      case 'customer':
        return '#E3F5FF';
      case 'orders':
        return '#F7F9FB';
      case 'revenue':
        return '#F7F9FB';
      case 'growth':
        return '#E5ECF6';
      default:
        return '#E3F5FF';
    }
  }};
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out, background-color 0.4s ease-in-out;
  will-change: transform, box-shadow, background-color;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    background-color: ${({ type, isDarkMode }) => {
    if (isDarkMode && (type === 'orders' || type === 'revenue')) {
      return '#FFFFFF1A';
    }
    switch (type) {
      case 'customer':
        return '#D1EFFF';
      case 'orders':
        return '#EFF3F7';
      case 'revenue':
        return '#EFF3F7';
      case 'growth':
        return '#D4E2F2';
      default:
        return '#D1EFFF';
    }
  }};
  }
`;

export const CardCount = styled.div`
font-size: 24px;
font-weight: 600;
`
export const CardSubCount = styled.div`
font-size: 12px;
font-weight: 400;
display: flex;
align-items: center;
gap: 5px;
`
export const CountWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const CardsWrap = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;
width: 100%;
`
export const ProgressIcon = styled.img`
width: 16px;
height: 16px;
`

export const ProjectionCard = styled.div`
  border-radius: 16px;
  color: #1C1C1C;
  font-weight: 400;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF0D' : '#F7F9FB')};
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.5s ease-in-out;
  will-change: transform, box-shadow, background-color;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-8px) scale(1.05) rotate(1deg);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
      135deg,
      ${({ isDarkMode }) => (isDarkMode ? '#444444' : '#E5ECF6')},
      ${({ isDarkMode }) => (isDarkMode ? '#333333' : '#F0F4FA')}
    );
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%);
    transition: transform 0.5s ease;
    transform: scale(1);
  }

  &:hover:before {
    transform: scale(1.2);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.8;
  }
`;

export const RevenueGraphCard = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#2E2E2E' : '#FFFFFF')};
  width: 100%;
  overflow: hidden;
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  will-change: background-color, box-shadow;

  &:hover {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2E2E2E' : '#FFFFFF')};
    box-shadow: ${({ isDarkMode }) =>
    isDarkMode ? '0 8px 30px rgba(255, 255, 255, 0.2)' : '0 8px 30px rgba(0, 0, 0, 0.15)'};
  }

  &:hover:before {
    opacity: 0.4;
    transform: scale(1.2);
  }

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.5s ease;
    pointer-events: none;
  }

  @media (max-width: 429px) {
    width: 87%;
  }
`;

export const RevenueLocationCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF0D' : '#F7F9FB')};
  transition: transform 0.4s ease-in-out, background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  will-change: transform, background-color, box-shadow;

  &:hover {
    transform: translateY(-4px);
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF1A' : '#F0F3F5')};
    box-shadow: ${({ isDarkMode }) =>
    isDarkMode ? '0 4px 20px rgba(255, 255, 255, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.15)'};
  }

  @media (max-width: 429px) { 
    width: 87%;
  }
`;

export const WorldMap = styled.img`
  margin: 10px;
`
export const WorldIconWrap = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
`

export const CountryPercentage = styled.div`
  display: flex;
  margin: 7px 0;
  flex-direction: column;
  gap: 8px;
`;
export const LabelWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const PercentageLabel = styled.span`
font-size: 12px;
color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '')};

`;

export const ValueLabel = styled.span`
  font-size: 12px; 
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#333')};

`;

export const PercentageBar = styled.div`
  height: 3px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1C1C1C66' : '#e0e0e0')};
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;

export const Fill = styled.div`
  height: 100%;
  background-color: #A8C5DA; 
  width: ${(props) => props.percentage}%;
  transition: width 0.4s ease-in-out;
  will-change: width;
`;
