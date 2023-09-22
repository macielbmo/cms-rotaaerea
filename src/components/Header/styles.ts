import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3366FF;

    .box-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1280px;
        width: 100%;
        height: 48px;
        color: white;
    }

    .title {
        font-size: 24px;
        text-transform: lowercase;
        letter-spacing: -1px;

        text-decoration: none;
        color: white;
    }
`

export const NavList = styled.nav`
    display: flex;
    gap: 24px;
    height: 100%;

    .item {
        cursor: pointer;
    }
`

export const MenuUser = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    .icon {
        font-size: 18px;
    }

    h6 {
        font-size: 14px;
    }
`

export const Dropdown = styled.div`
    background-color: #ffffff;
    height: 48px;
    width: 100%;

    .slider {
        max-width: 1280px;
        width: 100%;
        height: 100%;

        display: flex;
        margin: 0 auto;
        gap: 25px;

        padding-left: 15px;
    }
`
