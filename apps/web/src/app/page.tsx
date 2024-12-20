import { Button, Input } from '@repo/ui/components'

export default function Page() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <div>
          <Input />
          <Button variant="secondary">Search</Button>
        </div>
      </div>
    </div>
  )
}
