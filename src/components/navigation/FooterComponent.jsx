import styled from '@emotion/styled'

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    width: 100%;
    height: 60px;
    left: 0;
    right: 0;
    padding: 20px;
    text-align: center;
    color: #fff;
    background-color: #333;
    font-weight: bold;
`;

const FooterComponent = () => {
    return (
        <FooterContainer>
            Reservamos
        </FooterContainer>
    )
}

export default FooterComponent
