import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 100%;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .list {
    display: flex;
    height: 100%;
    line-height: 70px;
    .item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      &:last-of-type a {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 16px;
        }
      }

      &:hover a,
      .active {
        background-color: #000;
        color: #fff;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -2px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    > input {
      font-size: 12px;
    }
  }
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 16px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
  .login {
    cursor: pointer;
  }
`
