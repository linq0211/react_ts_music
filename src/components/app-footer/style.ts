import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  height: 325px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  > .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
  font-size: 12px;
  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
      &:last-child {
        display: none;
      }
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 88px;
      height: 88px;

      background-image: url(${require('@/assets/img/sprite_footer_02.png')});
      background-repeat: no-repeat;
      background-position: -120px -100px;
      &:hover {
        background-position: -120px -400px;
      }
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 99px;
      height: 20px;
      background-image: url(${require('@/assets/img/sprite_footer_01.png')});
      background-repeat: no-repeat;
      background-position: 0 0;
      &:hover {
        background-position: 0 -300px;
      }
    }
  }
`
