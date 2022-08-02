import tw, { styled, css, theme } from 'twin.macro'

const baseButtonStyles = tw`
  px-8 py-2 rounded focus:outline-none transform duration-75 hocus:(scale-105 text-yellow-400)
`

const PrimaryButton = styled.button`
  ${baseButtonStyles}
  ${tw`bg-black text-white border-black`}
`

const SecondaryButton = styled.button`
  ${baseButtonStyles}
  ${tw`border-2 border-yellow-600`}
`

export const Button = ({ variant }: { variant: 'primary' | 'secondary' }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryButton />
    case 'secondary': {
      return <SecondaryButton />
    }
  }
}

/* ${css`
    box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
  `} */
