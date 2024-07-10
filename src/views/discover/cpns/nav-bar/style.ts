import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};
  .nav {
    display: flex;
    padding-left: 180px;
    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 15px;
        margin: 3px 15px;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
