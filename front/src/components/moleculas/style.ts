import { styled } from 'styled-components'

export const ContainerHeader = styled.header`
  background-color: var(--white);
  width: 100vw;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerForm = styled.form`
  background-color: var(--white);
  width: 40%;
  height: 85%;
  border-radius: var(--border-radius-default);
  padding: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  .beneficiario {
    display: grid;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    gap: 10px;
    grid-template-columns: 70% 30%;
  }

  .action {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: start;
    width: 100%;
    margin-top: 1rem;

    button {
      color: var(--primary);
      display: flex;
      justify-content: start;
      text-decoration: underline;
    }
  }

  .select-plano {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: start;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  .action-proposta {
    color: #fff;
    border-radius: 2px;
  }

  .clear {
    display: flex;
    justify-content: end;
    text-decoration: underline;
    margin-top: 1rem;
    color: var(--primary);
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }
`

export const ContainerCardBeneficiario = styled.div`
  margin-top: 1rem;
  background-color: var(--light);
  width: 100%;
  height: 40%;
  padding: 1rem;
  border-radius: var(--border-radius-default);
  border: 1px solid var(--gray-100);

  .null {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  ul {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font: 400 14px var(--font);
      color: var(--dark);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
export const ContainerCardProposta = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
  background-color: var(--light);
  width: 100%;
  height: fit-content;
  padding: 1rem;
  border-radius: var(--border-radius-default);
  border: 1px solid var(--gray-100);

  span {
    border-bottom: 1px solid var(--gray-100);
    padding-bottom: 10px;
  }

  ul {
    color: var(--dark);
    font: 400 14px var(--font);
    padding-bottom: 1rem;

    > div {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    span {
      border-bottom: none;
    }

    li {
      margin-left: 1.5rem;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 7px;
    margin-top: 1rem;

    a {
      background-color: var(--primary);
      width: 15rem;
      height: 2.5rem;
      font: 500 14px var(--font);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:nth-child(2) {
      color: var(--primary);
    }
  }
`
