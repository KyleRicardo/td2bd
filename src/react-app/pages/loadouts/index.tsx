import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loadouts/')({
  component: LoadoutList,
})

function LoadoutList() {
  return <div>Select a loadout.</div>
}
