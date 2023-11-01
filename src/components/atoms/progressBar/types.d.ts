declare module "progressBarInterfaces" {
  export interface ProgressBarProps {
    valueNow: number;
    valueMax: number;
    color: string;
    height: number;
    striped: boolean;
    animated: boolean;
    className?: string;
  }
}