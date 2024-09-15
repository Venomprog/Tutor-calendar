export type TButtonText = {
  text: string
}

export interface IButton {
  text: React.ReactNode,
  type: 'submit' | 'button'
}