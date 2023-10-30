declare module "modalInterfaces" {
  export interface ModalProps {
    id: string;
    title: string;
    body: React.JSX.Element
    footer: React.JSX.Element
  }
}