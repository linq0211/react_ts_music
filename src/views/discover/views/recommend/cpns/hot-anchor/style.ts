import styled from 'styled-components'

export const AnchorWrapper = styled.div`
  padding: 20px;

  .anchors {
    margin-top: 14px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        width: 40px;
        height: 40px;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 10px;
        overflow: hidden;
        font-size: 12px;
        .name {
          color: #000;
          ${(props) => props.theme.mixin.textNoWrap}
        }

        .position {
          color: #666;
          ${(props) => props.theme.mixin.textNoWrap}
        }
      }
    }
  }
`
