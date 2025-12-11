import { cn } from '@/lib/utils'

interface Props {
  talentId: string
}

function TalentIcon({ talentId, className, ...props }: React.ComponentProps<'img'> & Props) {
  return (
    <img
      className={cn(
        'size-4',
        className,
      )}
      src={`/assets/talents/${talentId}.png`}
      alt={talentId}
      {...props}
    />
  )
}

export { TalentIcon }
