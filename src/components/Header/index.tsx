import { Select } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const selectRouters = [
  {
    id: 1,
    name: 'Curso',
    href: '/curse',
  },
  {
    id: 2,
    name: 'Disciplina',
    href: '/grade',
  },
  {
    id: 3,
    name: 'Restrição Etapas',
    href: '/restriction-steps',
  },
  {
    id: 4,
    name: 'Fila',
    href: '/row',
  },
  {
    id: 5,
    name: 'Fila Professor',
    href: '/teachers-row',
  },
  {
    id: 6,
    name: 'Hora Turma',
    href: '/class-time',
  },
  {
    id: 7,
    name: 'Atribuição de turmas aos professores',
    href: '/assigning-classes-to-teachers',
  },
  {
    id: 8,
    name: 'Prioridade',
    href: '/priority',
  },
  {
    id: 9,
    name: 'Professor',
    href: '/teachers',
  },
  {
    id: 10,
    name: 'Restrição',
    href: '/restriction',
  },
  {
    id: 11,
    name: 'Semestre',
    href: '/semester',
  },
  {
    id: 12,
    name: 'Turma',
    href: '/class',
  },
  {
    id: 13,
    name: 'Distribuição',
    href: '/distribution',
  },
]

export function Header() {
  const navigate = useNavigate()

  return (
    <header
      style={{
        color: '#ffffff',
        width: '100%',
        height: '4rem',
        backgroundColor: '#144195',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '1200px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <h2 style={{
          margin: 0,
          color: '#ffffff',
        }}>
          Distribuição das disciplinas
        </h2>

        <a href="/">
          Home
        </a>

        <Select
          style={{ width: 200, fontSize: '0.85rem' }}
          defaultValue={''}
          onChange={(value) => navigate(value)}
        >
          {selectRouters.map(router => (
            <Option
              key={router.id}
              value={router.href}>
              {router.name}
            </Option>
          ))}
        </Select>
      </div>
    </header >
  )
}
