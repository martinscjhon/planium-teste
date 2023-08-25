import { ChangeEvent, FC, useEffect, useState } from 'react'
import { ContainerCardProposta, ContainerForm } from './style'
import { A_Text } from '../atomos/A_Text'
import { A_Input } from '../atomos/A_Input'
import { A_Button } from '../atomos/A_Button'
import { MdAddCircle } from 'react-icons/md'
import { M_CardBeneficiarios } from './M_CardBeneficiarios'
import { A_Select } from '../atomos/A_Select'
import { IAddBeneficiario } from '../../utils/interface/IAddBeneficiario'
import { handleRequest } from '../../utils/request'
import { IPlanos } from '../../utils/interface/IPlanos'
import { ICreateProposta } from '../../utils/interface/ICreateProposta'
import { IReturnProposta } from '../../utils/interface/IReturnProposta'
import { formatMoney } from '../../utils/functions/formatMoney'
import { toast } from 'react-toastify'
import { CONFIG_ENVIRONMENT } from '../../config/environment'
import { endpoint } from '../../utils/endpoints'


const M_Form: FC = () => {
  const [step, setStep] = useState<number>(0)
  const [planos, setPlanos] = useState<IPlanos[]>([])
  const [proposta, setProposta] = useState<IReturnProposta>({
    beneficiarios: [],
    plano: {
      codigo: 0,
      nome: '',
      registro: ''
    },
    totalVidas: 0,
    valorTotal: 0
  })
  const [planoSelected, setPlanoSelected] = useState<string>('')
  const [dados, setDados] = useState<IAddBeneficiario>({
    idade: 0,
    nome: '',
  })
  const [beneficiarios, setBeneficiarios] = useState<IAddBeneficiario[]>([])

  const resetDados = (type: 'new-proposta' | "add-beneficiario") => {
    setDados({
      ...dados,
      idade: 0,
      nome: ''
    })

    if (type === "new-proposta") {
      setBeneficiarios([])
      setPlanoSelected('')
    }
  }
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    })
  }

  const handleCreateProposta = async () => {
    if (beneficiarios.length === 0) {
      await toast.info("Adicione pelo menos 1 beneficiário")
      return handleEditStep(0)
    }

    if (Number(planoSelected) === 0) {
      await toast.info("Selecione pelo menos 1 plano")
      return handleEditStep(0)
    }

    const payload: ICreateProposta = {
      beneficiarios,
      plano: Number(planoSelected)
    }

    await handleRequest.CreateProposta(payload).then(res => {
      setProposta(res)
    }).catch(() => {
      toast.error("Ocorreu um erro ao criar proposta")
    })
  }

  const handleEditStep = (ref: number, action?: () => void) => {
    setStep(ref)

    if (action) {
      action()
    }
  }

  const handleAddBeneficiario = () => {
    const array: IAddBeneficiario[] = []

    if (
      dados.idade === 0 || dados.nome === ""
    ) {
      return toast.error("Os dados de nome e idade não podem ser vazios")
    }

    array.push(...beneficiarios, {
      nome: dados.nome,
      idade: dados.idade,
    })
    setBeneficiarios(array)
    resetDados("add-beneficiario")
  }

  const handleGetAllPlans = async () => {
    await handleRequest.GetAllPlans().then((response: IPlanos[]) => {
      setPlanos(response)
    }).catch(() => {
      toast.error("Ocorreu um erro ao buscar planos")
    })
  }

  useEffect(() => {
    handleGetAllPlans()
  }, [])

  const handleViewStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <div className='beneficiario'>
              <A_Input label={'Nome do beneficiário'} type={'text'} id={'nome'} name="nome" value={dados.nome} onChange={handleChange} />
              <A_Input label={'Idade'} type={'number'} id={'nome'} name="idade" value={dados.idade} onChange={handleChange} />
            </div>

            <div className='action'>
              <MdAddCircle color="#447488" />
              <A_Button title={'Clique aqui para adicionar o beneficiário'} background={'transparent'} width={'100%'} height={'auto'} size='12px' onClick={handleAddBeneficiario} type='button' />
            </div>

            <M_CardBeneficiarios beneficiarios={beneficiarios} />
            <A_Button title={'Limpar lista'} background={'transparent'} width={'100%'} height={'auto'} size='13px' onClick={() => setBeneficiarios([])} type='button' className='clear' />


            <div className='select-plano'>
              <A_Select options={planos} label={'Planos'} id={'planos'} name='' value={planoSelected} onChange={(e: ChangeEvent<HTMLSelectElement>) => setPlanoSelected(e.target.value)} />
            </div>

            <A_Button title={'Visualizar proposta'} background={'#447488'} width={'15rem'} height={'2.5rem'} size='14px' className='action-proposta' onClick={() => handleEditStep(1, handleCreateProposta)} />
          </>
        )
        break;

      case 1:
        return (
          <ContainerCardProposta>
            <A_Text size={'14px'} color={'#4e4e4e'} weight={500} title={`Nome do plano: <b>${proposta.plano.nome}</b>`} />
            <A_Text size={'14px'} color={'#4e4e4e'} weight={500} title={`Total de beneficiários: <b>${proposta.totalVidas}</b>`} />
            <A_Text size={'14px'} color={'#4e4e4e'} weight={500} title={`Valor total dos beneficiários : <b>${formatMoney(proposta.valorTotal)}</b>`} />

            <ul>
              <A_Text size={'14px'} color={'#4e4e4e'} weight={500} title={'Todos beneficiários:'} />
              <div>
                {proposta.beneficiarios.map(item => {
                  return (
                    <li key={Math.random()}>Nome: <b>{item.nome}</b> | Idade: <b>{item.idade} anos</b> | Valor plano: <b>{formatMoney(item.valorPlano || 0)}</b></li>
                  )
                })}
              </div>
            </ul>

            <div className="actions">
              <a href={`${CONFIG_ENVIRONMENT.API}${endpoint.download}`} target="iframe_download">Baixar em JSON</a>
              <A_Button title={'Realizar nova proposta'} background={'transparent'} width={'15rem'} height={'2rem'} size='14px' className='action-proposta' onClick={() => handleEditStep(0, () => resetDados('new-proposta'))} type='button' />
            </div>
          </ContainerCardProposta>
        )
    }
  }

  return (
    <ContainerForm>
      <A_Text size={'1rem'} color={'#000'} weight={500} title='Informe os dados abaixo e selecione o melhor plano para você!' />

      {handleViewStep()}
    </ContainerForm>
  )
}

export { M_Form }
