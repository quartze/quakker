export interface INotifyStore {
    notifications: INotify[]
}

export enum INotifyType {
    success = 'success',
    error = 'error',
    warning = 'warning',
    info = 'info',
    clean = 'clean'
}

export interface INotify {
    id?: number
    message: string
    type: INotifyType
    duration: number
}