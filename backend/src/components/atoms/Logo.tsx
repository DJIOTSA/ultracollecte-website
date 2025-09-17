import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <Image
        src="/adaptive-icon.png"
        alt="logo"
        width={512}
        height={512}
        className="w-8 aspect-square"
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          objectFit: 'cover',
          width: '10rem',
          height: '10rem',
        }}
      />
      ULTRA-COLLECTE
    </div>
  )
}

export const Icon = () => {
  return <h5>UC</h5>
}
