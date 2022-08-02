import React from 'react'
import tw, { css } from 'twin.macro'
import { Button, Logo } from './components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      {/* Overriding CSS + specificity for the secondary variant */}
      <Button variant="secondary" style={{ color: "black" }}>
        Submit with Black Text
      </Button>
    </div>
    <Logo />
  </div>
)

export default App

{
  /* <Button
        variant="secondary"
        css={css`
          color: black;
        `}
      > */
}
