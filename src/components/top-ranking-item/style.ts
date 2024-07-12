import styled from 'styled-components'

export const TopRankingItemWrapper = styled.div`
  width: 230px;
  &:last-child {
    width: 228px;
  }

  .header {
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;

    .image {
      width: 80px;
      height: 80px;
      position: relative;
      cursor: pointer;

      .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: -145px -57px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      .name {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }

      .btn {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-top: 8px;
        cursor: pointer;
      }
      .play {
        margin-right: 10px;
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }
      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      margin-left: 10px;

      .index {
        width: 35px;
        text-align: center;
        font-size: 16px;
      }
      &:nth-child(-n + 3) .index {
        color: #c10d0c;
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
          ${(props) => props.theme.mixin.textNoWrap}
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .operator {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 6px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .add {
            background-position: 0 -698px;
            &:hover {
              background-position: -21px -698px;
            }
          }
          .favor {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
      }

      &:hover {
        .operator {
          display: block;
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
    padding-right: 20px;

    a:hover {
      text-decoration: underline;
    }
  }
`
