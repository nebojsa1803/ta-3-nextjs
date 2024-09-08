import { FilePenLine, Archive, ChartColumnIncreasing } from 'lucide-react'

type DashboardLink = {
  href: string
  label: string
  icon: React.ReactNode
}

const links: DashboardLink[] = [
  {
    href: '/new-analysis/general-data-form',
    label: 'Нова анализа',
    icon: <FilePenLine />,
  },
  {
    href: '/archive',
    label: 'Архива',
    icon: <Archive />,
  },
  {
    href: '/statistic',
    label: 'Статистика',
    icon: <ChartColumnIncreasing />,
  },
]

export default links
