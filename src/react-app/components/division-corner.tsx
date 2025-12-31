function DivisionCorner() {
  return (
    <>
      <div className="absolute h-[3px] w-[3px] -top-0.5 -left-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -bottom-0.5 -left-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -top-0.5 -right-0.5 bg-border" />
      <div className="absolute h-[3px] w-[3px] -bottom-0.5 -right-0.5 bg-border" />
    </>
  )
}

export { DivisionCorner }
