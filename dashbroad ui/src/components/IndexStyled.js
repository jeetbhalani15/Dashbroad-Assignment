import styled from "styled-components";

export const DashboardWrap = styled.div`
  display: flex;
  height: 100vh; /* 👈 ensure full screen height */
  overflow: hidden;
`

export const DataDisplayWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* 👈 allow nested flex children to scroll properly */
  overflow: hidden;
  height: 100%;

  @media (max-width: 1024px) { 
    position: absolute;
    z-index: ${props => ((props.leftPanelView || props.rightPanelView) ? '-1' : 'auto')};
  }
`