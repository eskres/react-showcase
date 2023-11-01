declare module "pomodoroInterfaces" {
  export interface PomoConfiguration {
    task: number;
    break: number;
  }
  export interface PomodoroProps {
    pause: boolean;
    task: boolean;
    config: PomoConfiguration;
    remainingTime: number;
  }
  export interface PomoControlProps {
    pause: boolean;
    setPause: (arg: boolean) => void;
    setRemainingTime: (arg: number) => void;
    config: PomoConfiguration;
  }
  export interface PomoConfigModalProps {
    config: PomoConfiguration;
    setTask: (arg: boolean) => void;
    setConfig: (arg: PomoConfiguration) => void;
    setRemainingTime: (arg: number) => void;
  }
}