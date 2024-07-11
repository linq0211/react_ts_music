import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  > .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 0;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrow {
      position: relative;
      top: -15px;
      width: 8px;
      height: 14px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -265px -77px;

      &:hover {
        background-position: -285px -77px;
      }
    }
    .arrow-right {
      background-position: -305px -77px;

      &:hover {
        background-position: -325px -77px;
      }
    }

    .banner {
      flex: 1;
      overflow: hidden;

      .list {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
`
